import { useRef, type ReactNode } from 'react';

interface MarkdownStoryProps {
  markdown: string;
  title: string;
  outlineLabel?: string;
  videoPosters?: Record<string, string>;
}

type StoryBlock =
  | { type: 'heading'; level: number; text: string }
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; caption: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'details'; summary: string; blocks: StoryBlock[] }
  | { type: 'paragraph'; text: string };

const imagePattern = /^!\[(.*?)\]\((.*?)\)$/;
const videoPattern = /^@\[video(?::\s*(.*?))?\]\((.*?)\)$/;
const headingPattern = /^(#{1,6})\s+(.+)$/;
const unorderedPattern = /^\s*-\s+(.+)$/;
const orderedPattern = /^\s*\d+\.\s+(.+)$/;
const detailsPattern = /^:::details\s+(.+)$/;
const inlinePattern = /(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s)]+)/g;

function cleanLine(line: string) {
  return line.replace(/^\s*>\s?/, '').trimEnd();
}

function isStructural(line: string) {
  const value = cleanLine(line).trim();
  return !value || value === '<aside>' || value === '</aside>' || detailsPattern.test(value) || value === ':::' || imagePattern.test(value) || videoPattern.test(value) || headingPattern.test(value) || unorderedPattern.test(value) || orderedPattern.test(value);
}

function parseMarkdown(markdown: string): StoryBlock[] {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const blocks: StoryBlock[] = [];

  for (let index = 0; index < lines.length;) {
    const line = cleanLine(lines[index]).trim();
    if (!line || line === '<aside>' || line === '</aside>') {
      index += 1;
      continue;
    }

    const details = line.match(detailsPattern);
    if (details) {
      const content: string[] = [];
      let depth = 1;
      index += 1;
      while (index < lines.length) {
        const candidate = cleanLine(lines[index]).trim();
        if (detailsPattern.test(candidate)) depth += 1;
        if (candidate === ':::') depth -= 1;
        index += 1;
        if (depth === 0) break;
        content.push(lines[index - 1]);
      }
      blocks.push({ type: 'details', summary: details[1], blocks: parseMarkdown(content.join('\n')) });
      continue;
    }

    const image = line.match(imagePattern);
    if (image) {
      blocks.push({ type: 'image', alt: image[1], src: image[2] });
      index += 1;
      continue;
    }

    const video = line.match(videoPattern);
    if (video) {
      blocks.push({ type: 'video', caption: video[1] ?? '', src: video[2] });
      index += 1;
      continue;
    }

    const heading = line.match(headingPattern);
    if (heading) {
      blocks.push({ type: 'heading', level: heading[1].length, text: heading[2].replace(/^\*\*|\*\*$/g, '') });
      index += 1;
      continue;
    }

    const unordered = line.match(unorderedPattern);
    const ordered = line.match(orderedPattern);
    if (unordered || ordered) {
      const orderedList = Boolean(ordered);
      const items: string[] = [];
      while (index < lines.length) {
        const candidate = cleanLine(lines[index]).trim();
        const match = candidate.match(orderedList ? orderedPattern : unorderedPattern);
        if (!match) break;
        items.push(match[1]);
        index += 1;
      }
      blocks.push({ type: 'list', ordered: orderedList, items });
      continue;
    }

    const paragraph = [line];
    index += 1;
    while (index < lines.length && !isStructural(lines[index])) {
      paragraph.push(cleanLine(lines[index]).trim());
      index += 1;
    }
    blocks.push({ type: 'paragraph', text: paragraph.join(' ') });
  }

  return blocks;
}

function notionImagePath(source: string) {
  let decoded = source;
  for (let index = 0; index < 2; index += 1) {
    try { decoded = decodeURIComponent(decoded); } catch { break; }
  }

  if (decoded === 'image.png') return '/media/notion/image-000.webp';
  if (decoded === 'texture.png') return '/media/notion/texture.webp';
  if (decoded === 'PixPin_2024-11-13_18-17-55.gif') return '/media/notion/vfx-fluctuation.gif';

  const numberedImage = decoded.match(/^image (\d+)\.png$/);
  if (numberedImage) return `/media/notion/image-${numberedImage[1]}.webp`;

  const cover = decoded.match(/^图片(\d+)\.png$/);
  if (cover) return `/media/notion/cover-${cover[1]}.webp`;

  return source;
}

function renderInline(text: string): ReactNode[] {
  return text.split(inlinePattern).filter(Boolean).map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`')) return <code key={index}>{part.slice(1, -1)}</code>;
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>;

    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return <a key={index} href={link[2]} target="_blank" rel="noreferrer">{link[1]}</a>;
    if (/^https?:\/\//.test(part)) return <a key={index} href={part} target="_blank" rel="noreferrer">{part}</a>;
    return part;
  });
}

export function MarkdownStory({ markdown, title, outlineLabel, videoPosters }: MarkdownStoryProps) {
  const storyRef = useRef<HTMLDivElement>(null);
  const blocks = parseMarkdown(markdown);
  const firstHeading = blocks.findIndex((block) => block.type === 'heading' && block.level === 1);
  const renderBlock = (block: StoryBlock, key: string): ReactNode => {
        if (block.type === 'details') return <details className="story-details" key={key} onToggle={event => {
          if (!event.currentTarget.open) event.currentTarget.querySelectorAll('video').forEach(video => video.pause());
        }}>
          <summary>{renderInline(block.summary)}</summary>
          <div>{block.blocks.map((child, index) => renderBlock(child, `${key}-${index}`))}</div>
        </details>;
        if (block.type === 'image') {
          return (
            <figure key={key}>
              <img src={notionImagePath(block.src)} alt={block.alt || title} loading="lazy" />
            </figure>
          );
        }
        if (block.type === 'video') {
          return (
            <figure className="story-video" key={key}>
              <video src={block.src} poster={videoPosters?.[block.src]} controls preload="metadata" playsInline />
              {block.caption && <figcaption>{block.caption}</figcaption>}
            </figure>
          );
        }
        if (block.type === 'heading') {
          const Heading = block.level <= 2 ? 'h3' : 'h4';
          return <Heading id={`story-section-${key}`} key={key}>{renderInline(block.text)}</Heading>;
        }
        if (block.type === 'list') {
          const List = block.ordered ? 'ol' : 'ul';
          return <List key={key}>{block.items.map((item, itemIndex) => <li key={`${item}-${itemIndex}`}>{renderInline(item)}</li>)}</List>;
        }
        return <p key={key}>{renderInline(block.text)}</p>;
  };

  return (
    <div className={`notion-story${outlineLabel ? ' has-outline' : ''}`} ref={storyRef}>
      {outlineLabel && <nav className="story-outline" aria-label={outlineLabel}>
        {blocks.map((block, index) => block.type === 'heading' && block.level === 2 ?
          <button key={index} type="button" onClick={() => {
            storyRef.current?.querySelector(`#story-section-${index}`)?.scrollIntoView({ block: 'start' });
          }}>{block.text}</button> : null)}
      </nav>}
      {blocks.map((block, index) => index === firstHeading ? null : renderBlock(block, String(index)))}
    </div>
  );
}

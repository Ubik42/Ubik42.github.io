import { useRef, type ReactNode } from 'react';
import { ZoomImage } from './ZoomImage';
import { useLanguage } from '../i18n/LanguageContext';
import { MechanismFlow } from './MechanismFlow';

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
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'code'; language: string; text: string }
  | { type: 'flow'; id: string }
  | { type: 'paragraph'; text: string };

const imagePattern = /^!\[(.*?)\]\((.*?)\)$/;
const videoPattern = /^@\[video(?::\s*(.*?))?\]\((.*?)\)$/;
const headingPattern = /^(#{1,6})\s+(.+)$/;
const unorderedPattern = /^\s*-\s+(.+)$/;
const orderedPattern = /^\s*\d+\.\s+(.+)$/;
const detailsPattern = /^:::details\s+(.+)$/;
const flowPattern = /^@\[flow\]\(([a-z-]+)\)$/;
const tableSeparator = /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/;
const tableCells = (line: string) => line.trim().replace(/^\|/, '').replace(/\|$/, '').split(/(?<!\\)\|/).map(cell => cell.trim().replace(/\\\|/g, '|'));
const inlinePattern = /(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s)]+)/g;

function cleanLine(line: string) {
  return line.replace(/^\s*>\s?/, '').trimEnd();
}

function isStructural(line: string) {
  const value = cleanLine(line).trim();
  return !value || flowPattern.test(value) || value.startsWith('```') || value.startsWith('|') || value === '<aside>' || value === '</aside>' || detailsPattern.test(value) || value === ':::' || imagePattern.test(value) || videoPattern.test(value) || headingPattern.test(value) || unorderedPattern.test(value) || orderedPattern.test(value);
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

    if (line.startsWith('```')) {
      const content: string[] = [];
      const language = line.slice(3).trim();
      index += 1;
      while (index < lines.length && !lines[index].trim().startsWith('```')) content.push(lines[index++]);
      index += 1;
      blocks.push({ type: 'code', language, text: content.join('\n') });
      continue;
    }
    if (line.includes('|') && tableSeparator.test(lines[index + 1]?.trim() ?? '')) {
      const headers = tableCells(line);
      const rows: string[][] = [];
      index += 2;
      while (index < lines.length && lines[index].trim().includes('|') && lines[index].trim()) rows.push(tableCells(lines[index++]));
      blocks.push({ type: 'table', headers, rows });
      continue;
    }

    const details = line.match(detailsPattern);
    const flow = line.match(flowPattern);
    if (flow) {
      blocks.push({ type: 'flow', id: flow[1] });
      index += 1;
      continue;
    }
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
  const { locale } = useLanguage();
  const storyRef = useRef<HTMLDivElement>(null);
  const blocks = parseMarkdown(markdown);
  const hasOutline = Boolean(outlineLabel) || blocks.filter(block => block.type === 'heading' && block.level === 2).length >= 3;
  const firstHeading = blocks.findIndex((block) => block.type === 'heading' && block.level === 1);
  const renderBlock = (block: StoryBlock, key: string): ReactNode => {
        if (block.type === 'flow') return <MechanismFlow key={key} id={block.id} />;
        if (block.type === 'table') return <div className="story-table" key={key} role="region" tabIndex={0} aria-label={`${title} — ${locale === 'zh' ? '数据表' : 'data table'}`}>
          <table><thead><tr>{block.headers.map((header, i) => <th key={i} scope="col">{renderInline(header)}</th>)}</tr></thead>
            <tbody>{block.rows.map((row, i) => <tr key={i}>{block.headers.map((_, j) => <td key={j}>{renderInline(row[j] ?? '')}</td>)}</tr>)}</tbody></table>
        </div>;
        if (block.type === 'code') return <pre className="story-code" key={key} tabIndex={0} aria-label={block.language || (locale === 'zh' ? '代码' : 'Code')}><code>{block.text}</code></pre>;
        if (block.type === 'details') return <details className="story-details" key={key} onToggle={event => {
          if (!event.currentTarget.open) event.currentTarget.querySelectorAll('video').forEach(video => video.pause());
        }}>
          <summary>{renderInline(block.summary)}</summary>
          <div>{block.blocks.map((child, index) => renderBlock(child, `${key}-${index}`))}</div>
        </details>;
        if (block.type === 'image') {
          return (
            <figure key={key}>
              <ZoomImage src={notionImagePath(block.src)} alt={block.alt || title} />
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
    <div className={`notion-story${hasOutline ? ' has-outline' : ''}`} ref={storyRef}>
      {hasOutline && <nav className="story-outline" aria-label={outlineLabel ?? (locale === 'zh' ? '项目章节' : 'Project chapters')}>
        {blocks.map((block, index) => block.type === 'heading' && block.level === 2 ?
          <button key={index} type="button" onClick={() => {
            storyRef.current?.querySelector(`#story-section-${index}`)?.scrollIntoView({ block: 'start' });
          }}>{block.text}</button> : null)}
      </nav>}
      {blocks.map((block, index) => index === firstHeading ? null : renderBlock(block, String(index)))}
    </div>
  );
}

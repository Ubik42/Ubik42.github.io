import { useEffect, useId, useRef, useState, type CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../i18n/LanguageContext';

/** Native nested dialog: Escape returns to the project, then to the gallery. */
export function ZoomImage({ src, alt, loading = 'lazy', style }: {
  src: string; alt: string; loading?: 'eager' | 'lazy'; style?: CSSProperties;
}) {
  const { locale } = useLanguage();
  const zh = locale === 'zh';
  const [open, setOpen] = useState(false);
  const [actualSize, setActualSize] = useState(false);
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  useEffect(() => {
    const dialog = ref.current;
    if (open && dialog && !dialog.open) dialog.showModal();
    if (!open && dialog?.open) dialog.close();
  }, [open]);
  return <>
    <button className="image-expand" type="button" aria-label={`${zh ? '放大图片：' : 'Enlarge image: '}${alt}`}
      onClick={() => { setActualSize(false); setOpen(true); }}>
      <img src={src} alt={alt} loading={loading} decoding="async" style={style} />
      <span className="image-expand-hint" aria-hidden="true">⤢ {zh ? '放大' : 'Enlarge'}</span>
    </button>
    {createPortal(<dialog className="image-dialog" ref={ref} aria-labelledby={titleId}
      onCancel={event => { event.preventDefault(); event.stopPropagation(); setOpen(false); }}
      onClick={event => { event.stopPropagation(); if (event.target === event.currentTarget) setOpen(false); }}>
      {open && <>
        <header><p id={titleId}>{alt}</p><div>
          <button type="button" aria-pressed={actualSize} onClick={() => setActualSize(!actualSize)}>{actualSize ? (zh ? '适应窗口' : 'Fit image') : (zh ? '原始尺寸' : 'Actual size')}</button>
          <a href={src} target="_blank" rel="noreferrer">{zh ? '打开原图 ↗' : 'Open original ↗'}</a>
          <button type="button" onClick={() => setOpen(false)} aria-label={zh ? '关闭放大图片' : 'Close enlarged image'}>×</button>
        </div></header>
        <div className={`image-dialog-canvas${actualSize ? ' is-actual-size' : ''}`}><img src={src} alt={alt} /></div>
      </>}
    </dialog>, document.body)}
  </>;
}

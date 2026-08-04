import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useMemo, useState } from 'react';

import { EvidenceDialog } from './EvidenceDialog';
import type { SystemId } from '../data/content';
import { useLanguage } from '../i18n/LanguageContext';

const layerIds = ['rules', 'ai', 'review', 'dcc', 'evidence'] as const;

export function EvidenceAtlas() {
  const { copy } = useLanguage();
  const reducedMotion = useReducedMotion() ?? false;
  const [selectedId, setSelectedId] = useState<SystemId>('rules');
  const [dialogOpen, setDialogOpen] = useState(false);

  const selectedSystem = useMemo(
    () => copy.systems.find((system) => system.id === selectedId) ?? copy.systems[0],
    [copy.systems, selectedId],
  );

  const layers = copy.method.filter((stage) => layerIds.includes(stage.id as (typeof layerIds)[number]));

  return (
    <section id="atlas" className="atlas-section" aria-labelledby="atlas-title">
      <div className="section-intro atlas-intro">
        <div>
          <p className="section-signal">DCC / ENGINE / AI / EVIDENCE</p>
          <h2 id="atlas-title">{copy.atlas.title}</h2>
        </div>
        <p>{copy.atlas.intro}</p>
      </div>

      <div className="atlas-shell">
        <aside className="atlas-identity">
          <img src="/media/avatar.jpg" alt="" width="640" height="640" loading="lazy" />
          <div>
            <strong>Lucas Shen</strong>
            <span lang="zh-CN">沈裕焱</span>
          </div>
          <p>{copy.atlas.identity}</p>
          <a href="https://github.com/Ubik42" target="_blank" rel="noreferrer">
            github.com/Ubik42 <span aria-hidden="true">↗</span>
          </a>
        </aside>

        <div className="atlas-map">
          <div className="system-selector" aria-label={copy.atlas.title}>
            {copy.systems.map((system, index) => {
              const selected = system.id === selectedId;
              return (
                <motion.button
                  type="button"
                  key={system.id}
                  className={`system-node system-node-${system.id}${selected ? ' is-selected' : ''}`}
                  aria-pressed={selected}
                  onClick={() => setSelectedId(system.id)}
                  whileHover={
                    reducedMotion
                      ? undefined
                      : { y: -6, rotateX: index === 1 ? -1.2 : 1.2, rotateY: index === 0 ? -1.4 : 1.4 }
                  }
                  whileTap={reducedMotion ? undefined : { scale: 0.985 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="node-index">{String(index + 1).padStart(2, '0')}</span>
                  <strong>{system.shortTitle}</strong>
                  <span className="node-image">
                    <img
                      src={system.image}
                      alt=""
                      width={system.imageWidth}
                      height={system.imageHeight}
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </span>
                  <span className="node-summary">{system.summary}</span>
                </motion.button>
              );
            })}
          </div>

          <div className="shared-layers">
            <div className="layers-heading">
              <h3>{copy.atlas.sharedLayers}</h3>
              <span aria-hidden="true">INPUT → REVIEW → OUTPUT</span>
            </div>
            <ol>
              {layers.map((layer, index) => (
                <li key={layer.id} className={`layer-${layer.id}`}>
                  <span className="layer-swatch" aria-hidden="true" />
                  <strong>{layer.label}</strong>
                  <span>{layer.detail}</span>
                  <span className="layer-route" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <aside className="atlas-inspector" aria-live="polite">
          <span className="inspector-label">{copy.atlas.selectedSystem}</span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selectedSystem.id}
              initial={reducedMotion ? false : { opacity: 0, x: 22 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reducedMotion ? { opacity: 1 } : { opacity: 0, x: -16 }}
              transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3>{selectedSystem.title}</h3>
              <div className="inspector-fact">
                <strong>{copy.atlas.problem}</strong>
                <p>{selectedSystem.problem}</p>
              </div>
              <div className="inspector-fact">
                <strong>{copy.atlas.core}</strong>
                <p>{selectedSystem.core}</p>
              </div>
              <div className="inspector-fact">
                <strong>{copy.atlas.aiBoundary}</strong>
                <p>{selectedSystem.aiBoundary}</p>
              </div>
              <div className="inspector-evidence">
                <strong>{copy.atlas.evidence}</strong>
                <ul>
                  {selectedSystem.evidence.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="inspector-tags" aria-label="Technologies and methods">
                {selectedSystem.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <button type="button" className="inspector-action" onClick={() => setDialogOpen(true)}>
                {copy.atlas.inspect}
                <span aria-hidden="true">↗</span>
              </button>
            </motion.div>
          </AnimatePresence>
        </aside>
      </div>

      <EvidenceDialog system={selectedSystem} open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </section>
  );
}

import React from 'react';
import { Layers, Headphones, ShieldAlert, Zap, Star, ArrowLeft, Sparkles, ExternalLink, Grid } from 'lucide-react';

const iconMap = {
  Headphones: Headphones,
  ShieldAlert: ShieldAlert,
  Zap: Zap,
  Star: Star,
  Sparkles: Sparkles,
  Layers: Layers
};

export default function CustomBlocksSection({ customBlocks, setActiveTab }) {
  const activeBlocks = customBlocks.filter(b => b.enabled !== false);

  if (activeBlocks.length === 0) return null;

  return (
    <section style={{ margin: '40px 0' }}>
      <div className="section-title-wrap">
        <h2 className="section-title">
          <Grid className="section-title-icon" size={28} />
          <span>المربعات والبطاقات المخصصة (أقسام الموقع)</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {activeBlocks.map((block) => {
          const Icon = iconMap[block.icon] || Sparkles;
          const blockColor = block.color || '#f59e0b';
          
          return (
            <div
              key={block.id}
              className="glass-card"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                borderColor: blockColor + '44',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: blockColor + '22',
                  border: `1px solid ${blockColor}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon size={24} color={blockColor} />
                </div>

                {block.category && (
                  <span style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    background: blockColor + '22',
                    color: blockColor,
                    border: `1px solid ${blockColor}66`
                  }}>
                    {block.category}
                  </span>
                )}
              </div>

              <div>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#fff', marginBottom: '8px' }}>
                  {block.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' }}>
                  {block.subtitle}
                </p>
              </div>

              {block.image && (
                <img
                  src={block.image}
                  alt={block.title}
                  style={{
                    width: '100%',
                    height: '140px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.08)'
                  }}
                />
              )}

              {block.buttonText && (
                <div style={{ marginTop: 'auto', paddingTop: '12px' }}>
                  {block.buttonLink && block.buttonLink.startsWith('http') ? (
                    <a
                      href={block.buttonLink}
                      target="_blank"
                      rel="noreferrer"
                      className="action-btn-secondary"
                      style={{ width: '100%', borderColor: blockColor, color: blockColor }}
                    >
                      <span>{block.buttonText}</span>
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <button
                      className="action-btn-primary"
                      onClick={() => {
                        const tab = block.buttonLink ? block.buttonLink.replace('#', '') : 'home';
                        if (setActiveTab) setActiveTab(tab);
                      }}
                      style={{
                        width: '100%',
                        background: `linear-gradient(135deg, ${blockColor}, ${blockColor}dd)`,
                        color: '#0b0f19'
                      }}
                    >
                      <span>{block.buttonText}</span>
                      <ArrowLeft size={16} />
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

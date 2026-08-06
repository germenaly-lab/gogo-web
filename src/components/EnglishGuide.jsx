import React from 'react';
import { Globe, Shield, CheckCircle2, DollarSign } from 'lucide-react';
import { englishGuide } from '../data/siteData';

export default function EnglishGuide() {
  return (
    <section style={{ direction: 'ltr' }}>
      <div className="section-title-wrap">
        <h2 className="section-title" style={{ flexDirection: 'row-reverse' }}>
          <span>{englishGuide.title}</span>
          <Globe className="section-title-icon" size={28} />
        </h2>
      </div>

      <div className="glass-card" style={{ padding: '32px', marginBottom: '32px' }}>
        <p style={{ fontSize: '18px', color: '#06b6d4', fontWeight: '700', marginBottom: '8px' }}>
          {englishGuide.subtitle}
        </p>
        <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: '1.7', marginBottom: '24px' }}>
          {englishGuide.overview}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {englishGuide.keyPoints.map((item, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#f59e0b', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={20} color="#f59e0b" />
                <span>{item.title}</span>
              </h3>
              <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: '1.6' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

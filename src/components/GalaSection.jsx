import React from 'react';
import { Sparkles, Play, Award, Globe } from 'lucide-react';
import { galaData } from '../data/siteData';

export default function GalaSection() {
  return (
    <section>
      <div className="section-title-wrap">
        <h2 className="section-title">
          <Sparkles className="section-title-icon" size={28} />
          <span>{galaData.title}</span>
        </h2>
      </div>

      <p style={{ fontSize: '16px', color: '#94a3b8', lineHeight: '1.7', marginBottom: '32px' }}>
        {galaData.description}
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
        {galaData.events.map((ev, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ padding: '4px 14px', borderRadius: '9999px', background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#0b0f19', fontWeight: '900', fontSize: '13px' }}>
                {ev.tag}
              </span>
              <span style={{ fontSize: '14px', color: '#06b6d4', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Globe size={16} />
                <span>{ev.location}</span>
              </span>
            </div>

            <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '8px' }}>
              {ev.year} - {ev.location}
            </h3>

            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '16px' }}>
              {ev.description}
            </p>

            {/* YouTube Video Responsive Player */}
            <div className="video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${ev.videoId}`}
                title={ev.tag}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div style={{ marginTop: '16px', borderTop: '1px solid var(--glass-border)', paddingTop: '12px' }}>
              <h4 style={{ fontSize: '13px', color: '#f59e0b', fontWeight: '700', marginBottom: '6px' }}>أبرز اللحظات والتكريمات:</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '13px', color: 'var(--text-muted)' }}>
                {ev.highlights.map((h, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Award size={14} color="#f59e0b" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

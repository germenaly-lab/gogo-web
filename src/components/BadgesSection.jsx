import React from 'react';
import { Award, Shield, Star, CheckCircle } from 'lucide-react';

export default function BadgesSection({ badgesData }) {
  return (
    <section>
      <div className="section-title-wrap">
        <h2 className="section-title">
          <Award className="section-title-icon" size={28} />
          <span>القلادات والرتب المعتمدة للوكالات</span>
        </h2>
      </div>

      <div className="badges-grid">
        {badgesData.map((badge) => (
          <div key={badge.id} className="glass-card badge-card">
            <div className="badge-header">
              <div className={`badge-icon-wrap badge-${badge.color}`}>
                {badge.color === 'gold' && <Award size={28} color="#f59e0b" />}
                {badge.color === 'silver' && <Shield size={28} color="#94a3b8" />}
                {badge.color === 'bronze' && <Star size={28} color="#ec4899" />}
              </div>
              <span className="badge-tag">{badge.badgeType}</span>
            </div>

            <h3 style={{ fontSize: '20px', fontWeight: '800', margin: '8px 0 4px 0' }}>{badge.title}</h3>
            <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' }}>{badge.description}</p>

            <img src={badge.image} alt={badge.title} className="badge-img" />

            <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <h4 style={{ fontSize: '13px', color: '#f59e0b', marginBottom: '8px', fontWeight: '700' }}>المميزات والصلاحيات:</h4>
              <ul className="badge-feature-list">
                {badge.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

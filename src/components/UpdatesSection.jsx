import React from 'react';
import { Bell, Calendar, Tag, CheckCircle2 } from 'lucide-react';

export default function UpdatesSection({ updatesData }) {
  return (
    <section>
      <div className="section-title-wrap">
        <h2 className="section-title">
          <Bell className="section-title-icon" size={28} />
          <span>العروض والإشعارات الرسمية للوكالات</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
        {updatesData.map((update) => (
          <div key={update.id} className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ padding: '4px 12px', borderRadius: '9999px', background: 'rgba(245,158,11,0.15)', color: '#f59e0b', fontSize: '12px', fontWeight: '700' }}>
                {update.category}
              </span>
              <span style={{ fontSize: '13px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={14} />
                <span>{update.date}</span>
              </span>
            </div>

            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#fff', lineHeight: '1.4' }}>
              {update.title}
            </h3>

            <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' }}>
              {update.summary}
            </p>

            <div style={{ background: 'rgba(15,23,42,0.6)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ fontSize: '13px', color: '#06b6d4', marginBottom: '8px', fontWeight: '700' }}>التفاصيل والاشتراطات:</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', color: '#cbd5e1' }}>
                {update.details.map((detail, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <CheckCircle2 size={16} color="#06b6d4" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{detail}</span>
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

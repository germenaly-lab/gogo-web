import React from 'react';
import { BookOpen, CheckCircle, ArrowLeft } from 'lucide-react';
import { newAgenciesGuide } from '../data/siteData';

export default function GuideSection({ onOpenApplyModal }) {
  return (
    <section>
      <div className="section-title-wrap">
        <h2 className="section-title">
          <BookOpen className="section-title-icon" size={28} />
          <span>{newAgenciesGuide.title}</span>
        </h2>
      </div>

      <div className="glass-card" style={{ padding: '32px', marginBottom: '32px', background: 'linear-gradient(135deg, rgba(22, 30, 49, 0.8), rgba(15, 23, 42, 0.95))' }}>
        <p style={{ fontSize: '18px', color: '#f59e0b', fontWeight: '700', marginBottom: '8px' }}>
          {newAgenciesGuide.subtitle}
        </p>
        <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: '1.7', marginBottom: '24px' }}>
          دليلك المتكامل للانطلاق في عالم وكالات Bigo Live وبناء فريق بث مباشر قوي وتحقيق أعلى المستويات والعمولات الشهرية.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {newAgenciesGuide.sections.map((sec, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '24px', position: 'relative' }}>
              <span style={{ fontSize: '32px', fontWeight: '900', color: 'rgba(245,158,11,0.25)', position: 'absolute', top: '16px', left: '16px' }}>
                {sec.step}
              </span>

              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#fff', marginBottom: '14px', paddingLeft: '40px' }}>
                {sec.title}
              </h3>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#94a3b8' }}>
                {sec.content.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <CheckCircle size={16} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ lineHeight: '1.5' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '32px', textAlign: 'center', background: 'rgba(245,158,11,0.1)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(245,158,11,0.3)' }}>
          <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#fff', marginBottom: '8px' }}>
            هل أنت جاهز لبدء وكالتك المعتمدة الآن؟
          </h4>
          <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '16px' }}>
            تواصل معنا وقدم بيانات وكالتك للحصول على الدعم والمتابعة والقلادة الذهبية.
          </p>
          <button className="action-btn-primary" onClick={onOpenApplyModal}>
            <span>تقديم طلب إنشاء وكالة</span>
            <ArrowLeft size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

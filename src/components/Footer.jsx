import React from 'react';
import { ShieldCheck, Heart, ExternalLink } from 'lucide-react';
import { siteInfo } from '../data/siteData';

export default function Footer({ setActiveTab, onOpenApplyModal }) {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className="logo-badge" style={{ width: '36px', height: '36px', fontSize: '18px' }}>G</div>
          <span style={{ fontWeight: '800', fontSize: '18px', color: '#fff' }}>Agency Book - دليل وكالات Bigo Live</span>
        </div>

        <p style={{ maxWidth: '600px', lineHeight: '1.6', fontSize: '13px' }}>
          هذا الدليل شامل لكل ما يخص عمل الوكالة على منصة Bigo Live، بهدف ضمان الالتزام الكامل بالسياسات وزيادة فرص النجاح.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '14px' }}>
          <button onClick={() => setActiveTab('home')} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontFamily: 'inherit' }}>الصفحة الرئيسية</button>
          <button onClick={() => setActiveTab('badges')} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontFamily: 'inherit' }}>القلادات والرتب</button>
          <button onClick={() => setActiveTab('points')} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontFamily: 'inherit' }}>جدول العمولات</button>
          <button onClick={() => setActiveTab('guide')} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontFamily: 'inherit' }}>دليل الوكالات الجديدة</button>
          <button onClick={() => setActiveTab('gala')} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontFamily: 'inherit' }}>Bigo GALA</button>
          <button onClick={() => { setActiveTab('admin'); window.location.hash = '#admin'; }} style={{ background: 'none', border: 'none', color: '#f59e0b', cursor: 'pointer', fontFamily: 'inherit', fontWeight: '700' }}>لوحة التحكم (Admin)</button>
          <a href={siteInfo.contactLinks.cibus} target="_blank" rel="noreferrer" style={{ color: '#06b6d4', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <span>منصة CIBUS</span>
            <ExternalLink size={14} />
          </a>
        </div>

        <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', width: '100%', fontSize: '12px', color: '#64748b' }}>
          © 2026 Bigo Live Agency Book. جميع الحقوق محفوظة لشبكة وكالات البث المباشر.
        </div>
      </div>
    </footer>
  );
}

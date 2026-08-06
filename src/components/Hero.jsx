import React from 'react';
import { ShieldCheck, Award, Calculator, ExternalLink, ArrowLeft } from 'lucide-react';
import { siteInfo as defaultSiteInfo } from '../data/siteData';

export default function Hero({ setActiveTab, onOpenApplyModal, siteInfo: propSiteInfo }) {
  const currentSiteInfo = propSiteInfo || defaultSiteInfo;
  return (
    <section className="hero-card">
      <div className="hero-grid">
        <div>
          <div className="hero-badge-tag">
            <ShieldCheck size={16} />
            <span>وكالة معتمدة رسمياً لدى Bigo Live</span>
          </div>
          
          <h1 className="hero-title">{currentSiteInfo.title}</h1>
          <p className="hero-desc">{currentSiteInfo.description}</p>
          
          <div className="hero-actions">
            <button className="action-btn-primary" onClick={onOpenApplyModal}>
              <span>طلب إنشاء وكالة معتمدة</span>
              <ArrowLeft size={18} />
            </button>

            <button className="action-btn-secondary" onClick={() => setActiveTab('points')}>
              <Calculator size={18} />
              <span>جدول العمولات والحاسبة</span>
            </button>

            <button className="action-btn-secondary" onClick={() => setActiveTab('badges')}>
              <Award size={18} />
              <span>القلادات والرتب</span>
            </button>

            <a 
              href={currentSiteInfo.contactLinks?.cibus || '#'} 
              target="_blank" 
              rel="noreferrer" 
              className="action-btn-secondary"
            >
              <span>منصة CIBUS</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <img 
            src={currentSiteInfo.heroBanner} 
            alt="Agency Book Header" 
            className="hero-img-preview"
          />
        </div>
      </div>
    </section>
  );
}

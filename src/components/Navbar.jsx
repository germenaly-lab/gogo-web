import React from 'react';
import { Home, Bell, Award, Calculator, BookOpen, Sparkles, Globe, Search, User, LogOut, ShieldCheck, Sliders } from 'lucide-react';

const iconMap = {
  Home: Home,
  Bell: Bell,
  Award: Award,
  Calculator: Calculator,
  BookOpen: BookOpen,
  Sparkles: Sparkles,
  Globe: Globe,
};

export default function Navbar({ navItems, activeTab, setActiveTab, searchQuery, setSearchQuery, user, onLogout, siteTitle }) {
  return (
    <header className="main-header">
      <nav className="nav-bar">
        <div className="logo-area" onClick={() => setActiveTab('home')}>
          <div className="logo-badge">G</div>
          <div className="logo-text">
            <h1>{siteTitle || 'وكالات Bigo Live'}</h1>
            <p>الموقع الرسمي - Agency Book</p>
          </div>
        </div>

        <ul className="nav-links">
          {navItems.map((item) => {
            if (item.id === 'login') return null; // We handle user account button separately
            const Icon = iconMap[item.icon] || Home;
            const isActive = activeTab === item.id;
            return (
              <li key={item.id}>
                <button
                  className={`nav-tab ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(item.id);
                    if (window.location.hash === '#admin') {
                      window.history.pushState(null, '', window.location.pathname);
                    }
                  }}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}

          <li>
            <button
              className={`nav-tab ${activeTab === 'admin' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('admin');
                window.location.hash = '#admin';
              }}
              style={{
                background: activeTab === 'admin' ? 'linear-gradient(135deg, rgba(245,158,11,0.3), rgba(236,72,153,0.3))' : 'rgba(245,158,11,0.1)',
                borderColor: '#f59e0b',
                color: '#f59e0b',
                fontWeight: '800'
              }}
            >
              <Sliders size={16} color="#f59e0b" />
              <span>لوحة التحكم (Admin)</span>
            </button>
          </li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {user && (
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Search size={16} style={{ position: 'absolute', right: '12px', color: '#94a3b8', pointerEvents: 'none' }} />
              <input
                type="text"
                placeholder="بحث في الدليل..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  padding: '8px 36px 8px 14px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(15,23,42,0.6)',
                  color: '#fff',
                  fontSize: '13px',
                  outline: 'none',
                  width: '140px',
                  fontFamily: 'inherit'
                }}
              />
            </div>
          )}

          {user ? (
            <>
              <button
                className="action-btn-secondary"
                onClick={() => setActiveTab('login')}
                style={{ borderColor: '#06b6d4', color: '#06b6d4' }}
              >
                <User size={16} />
                <span>{user.name.split(' ')[0]}</span>
              </button>

              <button
                className="action-btn-secondary"
                onClick={onLogout}
                style={{ color: '#ef4444', borderColor: 'rgba(239,68,68,0.3)', padding: '8px 14px' }}
                title="تسجيل الخروج"
              >
                <LogOut size={16} />
              </button>
            </>
          ) : (
            <button
              className="action-btn-secondary"
              onClick={() => setActiveTab('login')}
              style={{ borderColor: '#f59e0b', color: '#f59e0b', padding: '8px 16px' }}
            >
              <ShieldCheck size={18} color="#f59e0b" />
              <span>تسجيل الدخول</span>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}


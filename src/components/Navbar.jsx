import React from 'react';
import { Home, Bell, Award, Calculator, BookOpen, Sparkles, Globe, PlusCircle, Search, UserCheck, User, LogOut, ShieldCheck } from 'lucide-react';

const iconMap = {
  Home: Home,
  Bell: Bell,
  Award: Award,
  Calculator: Calculator,
  BookOpen: BookOpen,
  Sparkles: Sparkles,
  Globe: Globe,
  UserCheck: UserCheck,
};

export default function Navbar({ navItems, activeTab, setActiveTab, searchQuery, setSearchQuery, user, onLogout }) {
  return (
    <header className="main-header">
      <nav className="nav-bar">
        <div className="logo-area" onClick={() => user && setActiveTab('home')}>
          <div className="logo-badge">G</div>
          <div className="logo-text">
            <h1>وكالات Bigo Live</h1>
            <p>الموقع الرسمي - Agency Book</p>
          </div>
        </div>

        {user ? (
          <>
            <ul className="nav-links">
              {navItems.map((item) => {
                const Icon = iconMap[item.icon] || Home;
                const isActive = activeTab === item.id;
                return (
                  <li key={item.id}>
                    <button
                      className={`nav-tab ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveTab(item.id)}
                    >
                      <Icon size={16} />
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
                    width: '150px',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <button
                className="action-btn-secondary"
                onClick={() => setActiveTab('login')}
                style={{ borderColor: '#f59e0b', color: '#f59e0b' }}
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
            </div>
          </>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(245,158,11,0.15)', padding: '8px 16px', borderRadius: '9999px', border: '1px solid #f59e0b' }}>
            <ShieldCheck size={18} color="#f59e0b" />
            <span style={{ fontSize: '13px', fontWeight: '800', color: '#f59e0b' }}>بوابة تسجيل الدخول الموحدة - يرجى الدخول لمشاهدة التفاصيل</span>
          </div>
        )}
      </nav>
    </header>
  );
}

import React from 'react';
import { Home, Bell, Award, Calculator, BookOpen, Sparkles, Globe, PlusCircle, Search, UserCheck, User } from 'lucide-react';

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

export default function Navbar({ navItems, activeTab, setActiveTab, onOpenApplyModal, searchQuery, setSearchQuery, user }) {
  return (
    <header className="main-header">
      <nav className="nav-bar">
        <div className="logo-area" onClick={() => setActiveTab('home')}>
          <div className="logo-badge">G</div>
          <div className="logo-text">
            <h1>وكالات Bigo Live</h1>
            <p>الموقع الرسمي - Agency Book</p>
          </div>
        </div>

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

          {user ? (
            <button
              className="action-btn-secondary"
              onClick={() => setActiveTab('login')}
              style={{ borderColor: '#f59e0b', color: '#f59e0b' }}
            >
              <User size={16} />
              <span>{user.name.split(' ')[0]}</span>
            </button>
          ) : (
            <button className="action-btn-primary" onClick={onOpenApplyModal}>
              <PlusCircle size={18} />
              <span>طلب إنشاء وكالة</span>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

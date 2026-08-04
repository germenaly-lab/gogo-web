import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BadgesSection from './components/BadgesSection';
import PointsCalculator from './components/PointsCalculator';
import UpdatesSection from './components/UpdatesSection';
import GuideSection from './components/GuideSection';
import GalaSection from './components/GalaSection';
import EnglishGuide from './components/EnglishGuide';
import LoginSection from './components/LoginSection';
import Footer from './components/Footer';

import { navItems, badgesData, updatesData } from './data/siteData';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState(null);
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  const handleLogout = () => {
    setUser(null);
    setActiveTab('home');
    setIsRegisterMode(false);
  };

  const handleOpenApplyModal = () => {
    setIsRegisterMode(true);
  };

  // Search filter logic
  const filteredUpdates = updatesData.filter(
    (u) =>
      u.title.includes(searchQuery) ||
      u.summary.includes(searchQuery) ||
      u.category.includes(searchQuery)
  );

  const filteredBadges = badgesData.filter(
    (b) =>
      b.title.includes(searchQuery) ||
      b.description.includes(searchQuery) ||
      b.badgeType.includes(searchQuery)
  );

  return (
    <div className="app-container">
      <Navbar
        navItems={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        user={user}
        onLogout={handleLogout}
      />

      <main className="main-content">
        {/* MANDATORY AUTHENTICATION LANDING GATE: If not logged in, render LoginSection only! */}
        {!user ? (
          <div style={{ padding: '20px 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '9999px', background: 'rgba(245,158,11,0.15)', border: '1px solid #f59e0b', color: '#f59e0b', fontSize: '13px', fontWeight: '800', marginBottom: '16px' }}>
                🛡️ بوابة وكالات Bigo Live المعتمدة الرسمية
              </div>
              <h1 style={{ fontSize: '36px', fontWeight: '900', color: '#fff', marginBottom: '12px' }}>
                تسجيل الدخول يتيح لك الوصول إلى الدليل والعمولات
              </h1>
              <p style={{ fontSize: '16px', color: '#94a3b8', maxWidth: '650px', margin: '0 auto', lineHeight: '1.7' }}>
                يرجى تسجيل الدخول أو تقديم طلب إنشاء وكالة جديد لفتح كامل تفاصيل المنصة، حاسبة الأرباح الفورية، الشارات المعتمدة، ودليل التارجت.
              </p>
            </div>

            <LoginSection
              user={user}
              setUser={setUser}
              setActiveTab={setActiveTab}
              isRegisterMode={isRegisterMode}
              setIsRegisterMode={setIsRegisterMode}
            />
          </div>
        ) : (
          /* AUTHENTICATED ACCESS: Full Site Content Unlocked */
          <>
            {/* Search Results Alert if user typed in search bar */}
            {searchQuery.trim() !== '' && (
              <div className="glass-card" style={{ padding: '20px', marginBottom: '24px', border: '1px solid #f59e0b' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#f59e0b', marginBottom: '8px' }}>
                  نتائج البحث عن: "{searchQuery}"
                </h3>
                <p style={{ fontSize: '14px', color: '#94a3b8' }}>
                  تم تصفية المحتوى بناءً على كلمة البحث الخاصة بك.
                </p>
              </div>
            )}

            {/* Tab 1: Home */}
            {activeTab === 'home' && (
              <>
                <Hero setActiveTab={setActiveTab} onOpenApplyModal={handleOpenApplyModal} />
                <BadgesSection badgesData={filteredBadges} />
                <div style={{ margin: '40px 0' }}>
                  <PointsCalculator />
                </div>
                <UpdatesSection updatesData={filteredUpdates} />
              </>
            )}

            {/* Tab 2: Updates */}
            {activeTab === 'updates' && <UpdatesSection updatesData={filteredUpdates} />}

            {/* Tab 3: Badges */}
            {activeTab === 'badges' && <BadgesSection badgesData={filteredBadges} />}

            {/* Tab 4: Points & Calculator */}
            {activeTab === 'points' && <PointsCalculator />}

            {/* Tab 5: New Agencies Guide */}
            {activeTab === 'guide' && <GuideSection onOpenApplyModal={handleOpenApplyModal} />}

            {/* Tab 6: Bigo GALA */}
            {activeTab === 'gala' && <GalaSection />}

            {/* Tab 7: English Guide */}
            {activeTab === 'english' && <EnglishGuide />}

            {/* Tab 8: User Account & Agency Dashboard */}
            {activeTab === 'login' && (
              <LoginSection
                user={user}
                setUser={setUser}
                setActiveTab={setActiveTab}
                isRegisterMode={isRegisterMode}
                setIsRegisterMode={setIsRegisterMode}
              />
            )}
          </>
        )}
      </main>

      <Footer setActiveTab={setActiveTab} onOpenApplyModal={handleOpenApplyModal} />
    </div>
  );
}

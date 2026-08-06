import React, { useState, useEffect } from 'react';
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
import AdminDashboard from './components/AdminDashboard';
import CustomBlocksSection from './components/CustomBlocksSection';

import {
  navItems,
  siteInfo as defaultSiteInfo,
  badgesData as defaultBadgesData,
  updatesData as defaultUpdatesData,
  defaultCustomBlocks,
  defaultThemeConfig,
  defaultAccountsData
} from './data/siteData';

export default function App() {
  const [activeTab, setActiveTab] = useState(() => {
    if (
      window.location.hash === '#admin' ||
      window.location.pathname.includes('admin') ||
      window.location.search.includes('admin')
    ) {
      return 'admin';
    }
    return 'login';
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState(null);
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  // Dynamic Site State with localStorage persistence
  const [siteInfo, setSiteInfo] = useState(() => {
    const saved = localStorage.getItem('gogo_siteInfo');
    return saved ? JSON.parse(saved) : defaultSiteInfo;
  });

  const [themeConfig, setThemeConfig] = useState(() => {
    const saved = localStorage.getItem('gogo_themeConfig');
    return saved ? JSON.parse(saved) : defaultThemeConfig;
  });

  const [updatesData, setUpdatesData] = useState(() => {
    const saved = localStorage.getItem('gogo_updatesData');
    return saved ? JSON.parse(saved) : defaultUpdatesData;
  });

  const [badgesData, setBadgesData] = useState(() => {
    const saved = localStorage.getItem('gogo_badgesData');
    return saved ? JSON.parse(saved) : defaultBadgesData;
  });

  const [customBlocks, setCustomBlocks] = useState(() => {
    const saved = localStorage.getItem('gogo_customBlocks');
    return saved ? JSON.parse(saved) : defaultCustomBlocks;
  });

  const [accountsData, setAccountsData] = useState(() => {
    const saved = localStorage.getItem('gogo_accountsData');
    return saved ? JSON.parse(saved) : defaultAccountsData;
  });

  // URL listener for #admin or /admin
  useEffect(() => {
    const handleUrlChange = () => {
      if (
        window.location.hash === '#admin' ||
        window.location.pathname.includes('admin') ||
        window.location.search.includes('admin')
      ) {
        setActiveTab('admin');
      }
    };
    window.addEventListener('hashchange', handleUrlChange);
    window.addEventListener('popstate', handleUrlChange);
    return () => {
      window.removeEventListener('hashchange', handleUrlChange);
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem('gogo_siteInfo', JSON.stringify(siteInfo));
  }, [siteInfo]);

  useEffect(() => {
    localStorage.setItem('gogo_themeConfig', JSON.stringify(themeConfig));
  }, [themeConfig]);

  useEffect(() => {
    localStorage.setItem('gogo_updatesData', JSON.stringify(updatesData));
  }, [updatesData]);

  useEffect(() => {
    localStorage.setItem('gogo_badgesData', JSON.stringify(badgesData));
  }, [badgesData]);

  useEffect(() => {
    localStorage.setItem('gogo_customBlocks', JSON.stringify(customBlocks));
  }, [customBlocks]);

  useEffect(() => {
    localStorage.setItem('gogo_accountsData', JSON.stringify(accountsData));
  }, [accountsData]);

  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem('gogo_themeMode') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('gogo_themeMode', themeMode);
    document.documentElement.setAttribute('data-theme', themeMode);
  }, [themeMode]);

  const handleToggleThemeMode = () => {
    setThemeMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Dynamically apply Theme & Font changes to document
  useEffect(() => {
    const root = document.documentElement;
    if (themeConfig.fontFamily) {
      root.style.setProperty('--font-family', themeConfig.fontFamily);
    }
    if (themeConfig.primaryColor) {
      root.style.setProperty('--primary-gold', themeConfig.primaryColor);
    }
    if (themeConfig.glowColor) {
      root.style.setProperty('--primary-gold-glow', themeConfig.glowColor);
    }
    if (themeConfig.baseFontSize) {
      root.style.fontSize = `${themeConfig.baseFontSize}px`;
    }
  }, [themeConfig]);

  const handleLogout = () => {
    setUser(null);
    setActiveTab('login');
    setIsRegisterMode(false);
  };

  const handleOpenApplyModal = () => {
    setIsRegisterMode(true);
  };

  const handleResetDefaults = () => {
    localStorage.removeItem('gogo_siteInfo');
    localStorage.removeItem('gogo_themeConfig');
    localStorage.removeItem('gogo_updatesData');
    localStorage.removeItem('gogo_badgesData');
    localStorage.removeItem('gogo_customBlocks');
    localStorage.removeItem('gogo_accountsData');
    localStorage.removeItem('gogo_themeMode');

    setSiteInfo(defaultSiteInfo);
    setThemeConfig(defaultThemeConfig);
    setUpdatesData(defaultUpdatesData);
    setBadgesData(defaultBadgesData);
    setCustomBlocks(defaultCustomBlocks);
    setAccountsData(defaultAccountsData);
    setThemeMode('dark');
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
        siteTitle={siteInfo.title}
        themeMode={themeMode}
        onToggleThemeMode={handleToggleThemeMode}
      />

      <main className="main-content">
        {/* Search Results Alert if user typed in search bar */}
        {searchQuery.trim() !== '' && activeTab !== 'admin' && (
          <div className="glass-card" style={{ padding: '20px', marginBottom: '24px', border: '1px solid #f59e0b' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#f59e0b', marginBottom: '8px' }}>
              نتائج البحث عن: "{searchQuery}"
            </h3>
            <p style={{ fontSize: '14px', color: '#94a3b8' }}>
              تم تصفية المحتوى بناءً على كلمة البحث الخاصة بك.
            </p>
          </div>
        )}

        {/* Tab: ADMIN DASHBOARD */}
        {activeTab === 'admin' && (
          <AdminDashboard
            siteInfo={siteInfo}
            setSiteInfo={setSiteInfo}
            themeConfig={themeConfig}
            setThemeConfig={setThemeConfig}
            updatesData={updatesData}
            setUpdatesData={setUpdatesData}
            badgesData={badgesData}
            setBadgesData={setBadgesData}
            customBlocks={customBlocks}
            setCustomBlocks={setCustomBlocks}
            accountsData={accountsData}
            setAccountsData={setAccountsData}
            onResetDefaults={handleResetDefaults}
            onCloseAdmin={() => {
              setActiveTab('home');
              if (window.location.hash === '#admin') {
                window.history.pushState(null, '', window.location.pathname);
              }
            }}
          />
        )}

        {/* Tab 1: Home */}
        {activeTab === 'home' && (
          <>
            <Hero setActiveTab={setActiveTab} onOpenApplyModal={handleOpenApplyModal} siteInfo={siteInfo} />
            <CustomBlocksSection customBlocks={customBlocks} setActiveTab={setActiveTab} />
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

        {/* Tab 8: User Account Login Section */}
        {activeTab === 'login' && (
          <LoginSection
            user={user}
            setUser={setUser}
            setActiveTab={setActiveTab}
            isRegisterMode={isRegisterMode}
            setIsRegisterMode={setIsRegisterMode}
          />
        )}
      </main>

      <Footer setActiveTab={setActiveTab} onOpenApplyModal={handleOpenApplyModal} />
    </div>
  );
}

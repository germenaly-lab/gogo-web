import React, { useState } from 'react';
import {
  Sliders,
  Type,
  Image as ImageIcon,
  FileText,
  Award,
  Grid,
  Plus,
  Trash2,
  Edit3,
  Check,
  RotateCcw,
  Sparkles,
  Eye,
  EyeOff,
  Layers,
  Palette,
  ExternalLink,
  ShieldCheck,
  Save,
  Download,
  Upload,
  ArrowRight,
  Lock,
  Users,
  UserPlus,
  UserCheck,
  ShieldAlert,
  User,
  KeyRound,
  LogOut
} from 'lucide-react';

export default function AdminDashboard({
  siteInfo,
  setSiteInfo,
  themeConfig,
  setThemeConfig,
  updatesData,
  setUpdatesData,
  badgesData,
  setBadgesData,
  customBlocks,
  setCustomBlocks,
  accountsData = [],
  setAccountsData = () => {},
  onResetDefaults,
  onCloseAdmin
}) {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    return sessionStorage.getItem('bigo_admin_auth') === 'true' || sessionStorage.getItem('gogo_admin_auth') === 'true';
  });

  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [showAdminPassword, setShowAdminPassword] = useState(false);
  const [adminLoginError, setAdminLoginError] = useState('');

  const [adminTab, setAdminTab] = useState('appearance'); // 'appearance', 'updates', 'badges', 'blocks', 'accounts', 'system'

  // Accounts Form & Filter State
  const [editingAccount, setEditingAccount] = useState(null);
  const [accountRoleFilter, setAccountRoleFilter] = useState('all');
  const [accountForm, setAccountForm] = useState({
    name: '',
    email: '',
    bigoId: '',
    role: 'manager',
    badge: 'القلادة الذهبية',
    beans: '100,000',
    monthlySalary: '$800 USD',
    status: 'active',
    joinDate: 'أغسطس 2026'
  });

  const handleSaveAccount = (e) => {
    e.preventDefault();
    if (editingAccount) {
      setAccountsData((prev) =>
        prev.map((acc) =>
          acc.id === editingAccount.id
            ? { ...acc, ...accountForm }
            : acc
        )
      );
      setEditingAccount(null);
    } else {
      const newAcc = {
        id: 'acc-' + Date.now(),
        ...accountForm
      };
      setAccountsData((prev) => [...prev, newAcc]);
    }

    setAccountForm({
      name: '',
      email: '',
      bigoId: '',
      role: 'manager',
      badge: 'القلادة الذهبية',
      beans: '100,000',
      monthlySalary: '$800 USD',
      status: 'active',
      joinDate: 'أغسطس 2026'
    });
  };

  const handleEditAccountClick = (acc) => {
    setEditingAccount(acc);
    setAccountForm({
      name: acc.name,
      email: acc.email,
      bigoId: acc.bigoId,
      role: acc.role,
      badge: acc.badge,
      beans: acc.beans,
      monthlySalary: acc.monthlySalary,
      status: acc.status,
      joinDate: acc.joinDate || 'أغسطس 2026'
    });
  };

  const handleDeleteAccount = (id) => {
    if (confirm('هل أنت تأكد من حذف هذا الحساب؟')) {
      setAccountsData((prev) => prev.filter((a) => a.id !== id));
    }
  };

  const handleToggleAccountStatus = (id) => {
    setAccountsData((prev) =>
      prev.map((a) =>
        a.id === id
          ? { ...a, status: a.status === 'active' ? 'suspended' : 'active' }
          : a
      )
    );
  };

  const filteredAccounts = accountsData.filter((a) => {
    if (accountRoleFilter === 'all') return true;
    return a.role === accountRoleFilter;
  });

  // Forms local states
  const [editingArticle, setEditingArticle] = useState(null);
  const [articleForm, setArticleForm] = useState({
    title: '',
    category: 'تحديث جديد',
    summary: '',
    date: 'أغسطس 2026',
    badge: 'جديد',
    detailsText: ''
  });

  const [editingBadge, setEditingBadge] = useState(null);
  const [badgeForm, setBadgeForm] = useState({
    title: '',
    badgeType: 'رتبة معتمدة',
    color: 'gold',
    description: '',
    image: '/images/image_7.png',
    featuresText: ''
  });

  const [editingBlock, setEditingBlock] = useState(null);
  const [blockForm, setBlockForm] = useState({
    title: '',
    subtitle: '',
    category: 'قسم مميز',
    icon: 'Sparkles',
    color: '#f59e0b',
    image: '/images/image_1.png',
    buttonText: 'عرض التفاصيل',
    buttonLink: '#home'
  });

  // Fonts list
  const fontOptions = [
    { name: 'Cairo (افتراضي)', value: "'Cairo', sans-serif" },
    { name: 'Tajawal (تجوال)', value: "'Tajawal', sans-serif" },
    { name: 'IBM Plex Sans Arabic', value: "'IBM Plex Sans Arabic', sans-serif" },
    { name: 'Readex Pro', value: "'Readex Pro', sans-serif" },
    { name: 'Almarai (المراعي)', value: "'Almarai', sans-serif" },
    { name: 'El Messiri (المسيري)', value: "'El Messiri', sans-serif" },
    { name: 'Changa (تشانغا)', value: "'Changa', sans-serif" }
  ];

  // Colors list
  const colorOptions = [
    { name: 'ذهبي بيجو (Gold)', color: '#f59e0b', glow: 'rgba(245, 158, 11, 0.3)' },
    { name: 'أزرق سماوي (Cyan)', color: '#06b6d4', glow: 'rgba(6, 182, 212, 0.3)' },
    { name: 'بنفسجي ملبي (Purple)', color: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.3)' },
    { name: 'أخضر زمردي (Emerald)', color: '#10b981', glow: 'rgba(16, 185, 129, 0.3)' },
    { name: 'وردي ياقوتي (Pink)', color: '#ec4899', glow: 'rgba(236, 72, 153, 0.3)' },
    { name: 'أحمر ناري (Red)', color: '#ef4444', glow: 'rgba(239, 68, 68, 0.3)' }
  ];

  // Image Presets
  const imagePresets = [
    { label: 'صورة الدليل الرئيسية', url: '/images/image_1.png' },
    { label: 'شعارات بيجو والقلادات', url: '/images/image_7.png' },
    { label: 'القلادة الفضية', url: '/images/image_8.png' },
    { label: 'تكريم المشاهير', url: '/images/image_9.png' }
  ];

  // ---------------- ARTICLES HANDLERS ----------------
  const handleSaveArticle = (e) => {
    e.preventDefault();
    const detailsArray = articleForm.detailsText
      .split('\n')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    if (editingArticle) {
      setUpdatesData((prev) =>
        prev.map((item) =>
          item.id === editingArticle.id
            ? {
                ...item,
                title: articleForm.title,
                category: articleForm.category,
                summary: articleForm.summary,
                date: articleForm.date,
                badge: articleForm.badge,
                details: detailsArray
              }
            : item
        )
      );
      setEditingArticle(null);
    } else {
      const newArt = {
        id: Date.now(),
        title: articleForm.title,
        category: articleForm.category,
        summary: articleForm.summary,
        date: articleForm.date || 'أغسطس 2026',
        badge: articleForm.badge || 'جديد',
        details: detailsArray.length > 0 ? detailsArray : ['تحديث جديد مضاف من لوحة التحكم']
      };
      setUpdatesData((prev) => [newArt, ...prev]);
    }

    setArticleForm({ title: '', category: 'تحديث جديد', summary: '', date: 'أغسطس 2026', badge: 'جديد', detailsText: '' });
  };

  const handleEditArticleClick = (art) => {
    setEditingArticle(art);
    setArticleForm({
      title: art.title,
      category: art.category,
      summary: art.summary,
      date: art.date,
      badge: art.badge,
      detailsText: art.details ? art.details.join('\n') : ''
    });
  };

  const handleDeleteArticle = (id) => {
    if (confirm('هل أنت تأكد من حذف المقال / التحديث؟')) {
      setUpdatesData((prev) => prev.filter((a) => a.id !== id));
    }
  };

  // ---------------- BADGES HANDLERS ----------------
  const handleSaveBadge = (e) => {
    e.preventDefault();
    const featuresArr = badgeForm.featuresText
      .split('\n')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    if (editingBadge) {
      setBadgesData((prev) =>
        prev.map((b) =>
          b.id === editingBadge.id
            ? {
                ...b,
                title: badgeForm.title,
                badgeType: badgeForm.badgeType,
                color: badgeForm.color,
                description: badgeForm.description,
                image: badgeForm.image,
                features: featuresArr
              }
            : b
        )
      );
      setEditingBadge(null);
    } else {
      const newBadgeObj = {
        id: 'badge-' + Date.now(),
        title: badgeForm.title,
        badgeType: badgeForm.badgeType,
        color: badgeForm.color,
        description: badgeForm.description,
        image: badgeForm.image,
        features: featuresArr.length > 0 ? featuresArr : ['ميزة رتبة جديدة']
      };
      setBadgesData((prev) => [...prev, newBadgeObj]);
    }

    setBadgeForm({ title: '', badgeType: 'رتبة معتمدة', color: 'gold', description: '', image: '/images/image_7.png', featuresText: '' });
  };

  const handleEditBadgeClick = (badge) => {
    setEditingBadge(badge);
    setBadgeForm({
      title: badge.title,
      badgeType: badge.badgeType,
      color: badge.color,
      description: badge.description,
      image: badge.image,
      featuresText: badge.features ? badge.features.join('\n') : ''
    });
  };

  const handleDeleteBadge = (id) => {
    if (confirm('هل أنت تأكد من حذف هذه القلادة؟')) {
      setBadgesData((prev) => prev.filter((b) => b.id !== id));
    }
  };

  // ---------------- CUSTOM BLOCKS HANDLERS ----------------
  const handleSaveBlock = (e) => {
    e.preventDefault();
    if (editingBlock) {
      setCustomBlocks((prev) =>
        prev.map((blk) =>
          blk.id === editingBlock.id
            ? { ...blk, ...blockForm }
            : blk
        )
      );
      setEditingBlock(null);
    } else {
      const newBlk = {
        id: 'block-' + Date.now(),
        ...blockForm,
        enabled: true
      };
      setCustomBlocks((prev) => [...prev, newBlk]);
    }

    setBlockForm({
      title: '',
      subtitle: '',
      category: 'قسم مميز',
      icon: 'Sparkles',
      color: '#f59e0b',
      image: '/images/image_1.png',
      buttonText: 'عرض التفاصيل',
      buttonLink: '#home'
    });
  };

  const handleEditBlockClick = (blk) => {
    setEditingBlock(blk);
    setBlockForm({
      title: blk.title,
      subtitle: blk.subtitle || '',
      category: blk.category || '',
      icon: blk.icon || 'Sparkles',
      color: blk.color || '#f59e0b',
      image: blk.image || '',
      buttonText: blk.buttonText || '',
      buttonLink: blk.buttonLink || '#home'
    });
  };

  const handleDeleteBlock = (id) => {
    if (confirm('هل تريد مسح هذا المربع بالكامل من الموقع؟')) {
      setCustomBlocks((prev) => prev.filter((b) => b.id !== id));
    }
  };

  const handleToggleBlock = (id) => {
    setCustomBlocks((prev) =>
      prev.map((b) => (b.id === id ? { ...b, enabled: !b.enabled } : b))
    );
  };

  const handleAdminLoginSubmit = (e) => {
    e.preventDefault();
    const u = adminUsername.trim().toLowerCase();
    const p = adminPassword.trim().toLowerCase();

    const isUserValid = ['admin', 'ادمن', 'أدمن', 'إدمن', 'آدمن'].includes(u);
    const isPassValid = ['admin', 'ادمن', 'أدمن', 'إدمن', 'آدمن'].includes(p);

    if (isUserValid && isPassValid) {
      sessionStorage.setItem('bigo_admin_auth', 'true');
      setIsAdminLoggedIn(true);
      setAdminLoginError('');
    } else {
      setAdminLoginError('بيانات الدخول غير صحيحة. يمكنك تجربة: admin / admin أو ادمن / ادمن');
    }
  };

  const handleAdminLogout = () => {
    sessionStorage.removeItem('bigo_admin_auth');
    sessionStorage.removeItem('gogo_admin_auth');
    setIsAdminLoggedIn(false);
    setAdminUsername('');
    setAdminPassword('');
  };

  // IF ADMIN IS NOT LOGGED IN -> RENDER ADMIN LOGIN SCREEN
  if (!isAdminLoggedIn) {
    return (
      <div style={{ maxWidth: '480px', margin: '40px auto' }}>
        <div
          className="glass-card"
          style={{
            padding: '36px',
            background: 'linear-gradient(145deg, rgba(22, 30, 49, 0.98), rgba(15, 23, 42, 0.99))',
            border: '1px solid rgba(245,158,11,0.5)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 25px rgba(245,158,11,0.4)',
                marginBottom: '14px'
              }}
            >
              <Lock size={32} color="#0b0f19" />
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '6px' }}>
              تسجيل دخول الأدمن (Admin Login)
            </h2>
            <p style={{ fontSize: '13px', color: '#94a3b8' }}>
              أدخل اسم المستخدم وكلمة المرور للوصول إلى لوحة التحكم
            </p>
          </div>



          {adminLoginError && (
            <div style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid #ef4444', color: '#fca5a5', padding: '10px 14px', borderRadius: '10px', fontSize: '13px', marginBottom: '16px', textAlign: 'center' }}>
              {adminLoginError}
            </div>
          )}

          <form onSubmit={handleAdminLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label className="form-label">اسم المستخدم (Username):</label>
              <div style={{ position: 'relative' }}>
                <User size={18} style={{ position: 'absolute', right: '14px', top: '16px', color: '#64748b' }} />
                <input
                  type="text"
                  required
                  className="form-input"
                  style={{ paddingRight: '44px' }}
                  placeholder="admin"
                  value={adminUsername}
                  onChange={(e) => setAdminUsername(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="form-label">كلمة المرور (Password):</label>
              <div style={{ position: 'relative' }}>
                <KeyRound size={18} style={{ position: 'absolute', right: '14px', top: '16px', color: '#64748b' }} />
                <input
                  type={showAdminPassword ? 'text' : 'password'}
                  required
                  className="form-input"
                  style={{ paddingRight: '44px', paddingLeft: '44px' }}
                  placeholder="admin"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowAdminPassword(!showAdminPassword)}
                  style={{ position: 'absolute', left: '14px', top: '14px', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
                >
                  {showAdminPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button type="submit" className="action-btn-primary" style={{ width: '100%', marginTop: '10px', padding: '12px' }}>
              <Lock size={18} />
              <span>تسجيل الدخول إلى الأدمن</span>
            </button>

            <button
              type="button"
              className="action-btn-secondary"
              onClick={onCloseAdmin}
              style={{ width: '100%', marginTop: '6px' }}
            >
              <span>الرجوع إلى الصفحة الرئيسية</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header Bar */}
      <div
        className="glass-card"
        style={{
          padding: '24px 32px',
          marginBottom: '28px',
          background: 'linear-gradient(135deg, rgba(22, 30, 49, 0.95), rgba(15, 23, 42, 0.98))',
          border: '1px solid #f59e0b'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(245, 158, 11, 0.4)'
              }}
            >
              <Sliders size={28} color="#0b0f19" />
            </div>
            <div>
              <h1 style={{ fontSize: '24px', fontWeight: '900' }}>
                لوحة التحكم الكاملة بالموقع (Admin Dashboard)
              </h1>
              <p style={{ fontSize: '13px', color: '#94a3b8' }}>
                تعديل النصوص، الصور، المقالات، الخطوط، الأحجام، وإضافة أو مسح المربعات مباشرة
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              className="action-btn-secondary"
              onClick={onCloseAdmin}
              style={{ borderColor: '#06b6d4', color: '#06b6d4' }}
            >
              <Eye size={18} />
              <span>معاينة الموقع الرئيسية</span>
            </button>

            <button
              className="action-btn-secondary"
              onClick={handleAdminLogout}
              style={{ color: '#ef4444', borderColor: 'rgba(239,68,68,0.4)' }}
            >
              <LogOut size={18} />
              <span>خروج الأدمن</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Admin Navigation Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '10px',
          overflowX: 'auto',
          paddingBottom: '12px',
          marginBottom: '28px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <button
          className={`nav-tab ${adminTab === 'appearance' ? 'active' : ''}`}
          onClick={() => setAdminTab('appearance')}
        >
          <Type size={18} />
          <span>المظهر والخطوط والأحجام والصورة</span>
        </button>

        <button
          className={`nav-tab ${adminTab === 'updates' ? 'active' : ''}`}
          onClick={() => setAdminTab('updates')}
        >
          <FileText size={18} />
          <span>إدارة المقالات والأخبار ({updatesData.length})</span>
        </button>

        <button
          className={`nav-tab ${adminTab === 'badges' ? 'active' : ''}`}
          onClick={() => setAdminTab('badges')}
        >
          <Award size={18} />
          <span>إدارة القلادات والرتب ({badgesData.length})</span>
        </button>

        <button
          className={`nav-tab ${adminTab === 'blocks' ? 'active' : ''}`}
          onClick={() => setAdminTab('blocks')}
        >
          <Grid size={18} />
          <span>إدارة المربعات والبطاقات ({customBlocks.length})</span>
        </button>

        <button
          className={`nav-tab ${adminTab === 'accounts' ? 'active' : ''}`}
          onClick={() => setAdminTab('accounts')}
        >
          <Users size={18} />
          <span>إدارة الحسابات والاشتراكات ({accountsData.length})</span>
        </button>

        <button
          className={`nav-tab ${adminTab === 'system' ? 'active' : ''}`}
          onClick={() => setAdminTab('system')}
        >
          <RotateCcw size={18} />
          <span>الضبط والنسخ الاحتياطي</span>
        </button>
      </div>

      {/* ---------------- TAB 1: APPEARANCE & TYPOGRAPHY ---------------- */}
      {adminTab === 'appearance' && (
        <div className="glass-card" style={{ padding: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '20px', color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Palette size={22} />
            <span>إعدادات النصوص، الخطوط، الألوان، وصورة الموقع</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {/* Left Column: Text & Hero Banner */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label className="form-label">عنوان الموقع الرئيسي:</label>
                <input
                  type="text"
                  className="form-input"
                  value={siteInfo.title}
                  onChange={(e) => setSiteInfo({ ...siteInfo, title: e.target.value })}
                />
              </div>

              <div>
                <label className="form-label">وصف الموقع الشامل:</label>
                <textarea
                  className="form-input"
                  rows={3}
                  value={siteInfo.description}
                  onChange={(e) => setSiteInfo({ ...siteInfo, description: e.target.value })}
                />
              </div>

              <div>
                <label className="form-label">رابط صورة الهيدر / البانر (Hero Banner):</label>
                <input
                  type="text"
                  className="form-input"
                  value={siteInfo.heroBanner}
                  onChange={(e) => setSiteInfo({ ...siteInfo, heroBanner: e.target.value })}
                  placeholder="/images/image_1.png"
                />
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '10px' }}>
                  {imagePresets.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSiteInfo({ ...siteInfo, heroBanner: preset.url })}
                      style={{
                        padding: '4px 10px',
                        fontSize: '12px',
                        borderRadius: '6px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        background: 'rgba(255,255,255,0.05)',
                        color: '#94a3b8',
                        cursor: 'pointer'
                      }}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Fonts & Sizes & Colors */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label className="form-label">نوع الخط العربي (Font Family):</label>
                <select
                  className="form-select"
                  value={themeConfig.fontFamily}
                  onChange={(e) => setThemeConfig({ ...themeConfig, fontFamily: e.target.value })}
                >
                  {fontOptions.map((font, i) => (
                    <option key={i} value={font.value}>
                      {font.name}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label className="form-label">حجم خط المحتوى ({themeConfig.baseFontSize}px):</label>
                  <input
                    type="range"
                    min="13"
                    max="22"
                    value={themeConfig.baseFontSize}
                    onChange={(e) => setThemeConfig({ ...themeConfig, baseFontSize: Number(e.target.value) })}
                    style={{ width: '100%', accentColor: '#f59e0b' }}
                  />
                </div>

                <div>
                  <label className="form-label">حجم خط العناوين ({themeConfig.headingFontSize}px):</label>
                  <input
                    type="range"
                    min="18"
                    max="36"
                    value={themeConfig.headingFontSize}
                    onChange={(e) => setThemeConfig({ ...themeConfig, headingFontSize: Number(e.target.value) })}
                    style={{ width: '100%', accentColor: '#f59e0b' }}
                  />
                </div>
              </div>

              <div>
                <label className="form-label">اللون الرئيسي للموقع (Theme Accent):</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {colorOptions.map((c, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setThemeConfig({ ...themeConfig, primaryColor: c.color, glowColor: c.glow })}
                      style={{
                        padding: '10px 8px',
                        borderRadius: '10px',
                        border: themeConfig.primaryColor === c.color ? `2px solid ${c.color}` : '1px solid rgba(255,255,255,0.1)',
                        background: 'rgba(15,23,42,0.8)',
                        color: '#fff',
                        fontSize: '12px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: c.color }} />
                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Style Preview Box */}
              <div style={{ padding: '16px', background: 'rgba(15,23,42,0.9)', borderRadius: '12px', border: `1px solid ${themeConfig.primaryColor}` }}>
                <span style={{ fontSize: '12px', color: '#94a3b8', display: 'block', marginBottom: '6px' }}>معاينة حية للخط واللون:</span>
                <h4 style={{ fontFamily: themeConfig.fontFamily, fontSize: `${themeConfig.headingFontSize}px`, color: themeConfig.primaryColor, fontWeight: '800' }}>
                  دليل وكالات بيجو لايف المعتمد
                </h4>
                <p style={{ fontFamily: themeConfig.fontFamily, fontSize: `${themeConfig.baseFontSize}px`, color: '#cbd5e1', marginTop: '6px' }}>
                  هذا النص يعرض المعاينة الحية للخط والحجم المختارين حالياً في لوحة التحكم.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- TAB 2: ARTICLES & UPDATES ---------------- */}
      {adminTab === 'updates' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {/* Article Form */}
          <div className="glass-card" style={{ padding: '28px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '20px', color: '#06b6d4', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {editingArticle ? <Edit3 size={20} /> : <Plus size={20} />}
              <span>{editingArticle ? 'تعديل التحديث / المقال الحالي' : 'إضافة مقال / تحديث جديد للموقع'}</span>
            </h2>

            <form onSubmit={handleSaveArticle} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div>
                <label className="form-label">عنوان المقال / الإشعار:</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="مثال: تحديث شروط التارجت والعمولات لشهر جديد"
                  value={articleForm.title}
                  onChange={(e) => setArticleForm({ ...articleForm, title: e.target.value })}
                />
              </div>

              <div>
                <label className="form-label">التصنيف (Category):</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="سياسات جديدة / أمان وتوثيق / فعاليات"
                  value={articleForm.category}
                  onChange={(e) => setArticleForm({ ...articleForm, category: e.target.value })}
                />
              </div>

              <div>
                <label className="form-label">التاريخ / الشهر:</label>
                <input
                  type="text"
                  className="form-input"
                  value={articleForm.date}
                  onChange={(e) => setArticleForm({ ...articleForm, date: e.target.value })}
                />
              </div>

              <div>
                <label className="form-label">الشارة (Badge Tag):</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="مهم جداً / تحديث أمني / عاجل"
                  value={articleForm.badge}
                  onChange={(e) => setArticleForm({ ...articleForm, badge: e.target.value })}
                />
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">الملخص العام للمقال:</label>
                <textarea
                  required
                  className="form-input"
                  rows={2}
                  placeholder="اكتب ملخص الإشعار أو المقال ليظهر في الكارت..."
                  value={articleForm.summary}
                  onChange={(e) => setArticleForm({ ...articleForm, summary: e.target.value })}
                />
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">التفاصيل والنقاط (ضع كل نقطة في سطر مستقل):</label>
                <textarea
                  className="form-input"
                  rows={4}
                  placeholder="الشرط الأول&#10;الشرط الثاني&#10;ملاحظات إضافية..."
                  value={articleForm.detailsText}
                  onChange={(e) => setArticleForm({ ...articleForm, detailsText: e.target.value })}
                />
              </div>

              <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '12px' }}>
                <button type="submit" className="action-btn-primary">
                  <Check size={18} />
                  <span>{editingArticle ? 'حفظ التعديلات' : 'إضافة المقال الآن'}</span>
                </button>

                {editingArticle && (
                  <button
                    type="button"
                    className="action-btn-secondary"
                    onClick={() => {
                      setEditingArticle(null);
                      setArticleForm({ title: '', category: 'تحديث جديد', summary: '', date: 'أغسطس 2026', badge: 'جديد', detailsText: '' });
                    }}
                  >
                    إلغاء التعديل
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Articles List */}
          <div className="glass-card" style={{ padding: '28px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '16px' }}>
              المقالات والإشعارات الحالية في الموقع:
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {updatesData.map((art) => (
                <div
                  key={art.id}
                  style={{
                    padding: '16px 20px',
                    borderRadius: '12px',
                    background: 'rgba(15,23,42,0.8)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '12px'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                      <span style={{ fontSize: '12px', fontWeight: '700', color: '#06b6d4', background: 'rgba(6,182,212,0.15)', padding: '2px 8px', borderRadius: '9999px' }}>
                        {art.category}
                      </span>
                      <span style={{ fontSize: '12px', color: '#94a3b8' }}>{art.date}</span>
                    </div>
                    <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#fff' }}>{art.title}</h4>
                    <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>{art.summary}</p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                      type="button"
                      className="action-btn-secondary"
                      style={{ padding: '6px 12px', fontSize: '12px' }}
                      onClick={() => handleEditArticleClick(art)}
                    >
                      <Edit3 size={14} />
                      <span>تعديل</span>
                    </button>

                    <button
                      type="button"
                      className="action-btn-secondary"
                      style={{ padding: '6px 12px', fontSize: '12px', color: '#ef4444', borderColor: 'rgba(239,68,68,0.3)' }}
                      onClick={() => handleDeleteArticle(art.id)}
                    >
                      <Trash2 size={14} />
                      <span>حذف</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ---------------- TAB 3: BADGES CRUD ---------------- */}
      {adminTab === 'badges' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div className="glass-card" style={{ padding: '28px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '20px', color: '#8b5cf6', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {editingBadge ? <Edit3 size={20} /> : <Plus size={20} />}
              <span>{editingBadge ? 'تعديل بيانات القلادة الحالية' : 'إضافة قلادة أو رتبة جديدة'}</span>
            </h2>

            <form onSubmit={handleSaveBadge} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div>
                <label className="form-label">اسم القلادة / الرتبة:</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="قلادة الوكالة الذهبية"
                  value={badgeForm.title}
                  onChange={(e) => setBadgeForm({ ...badgeForm, title: e.target.value })}
                />
              </div>

              <div>
                <label className="form-label">نوع الشارة (Badge Type):</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="الأساسية / المشرف المساعد"
                  value={badgeForm.badgeType}
                  onChange={(e) => setBadgeForm({ ...badgeForm, badgeType: e.target.value })}
                />
              </div>

              <div>
                <label className="form-label">نوع اللون (Color Style):</label>
                <select
                  className="form-select"
                  value={badgeForm.color}
                  onChange={(e) => setBadgeForm({ ...badgeForm, color: e.target.value })}
                >
                  <option value="gold">ذهبي (Gold)</option>
                  <option value="silver">فضي (Silver)</option>
                  <option value="bronze">برونزي / خاص (Bronze)</option>
                </select>
              </div>

              <div>
                <label className="form-label">رابط صورة القلادة (Image URL):</label>
                <input
                  type="text"
                  className="form-input"
                  value={badgeForm.image}
                  onChange={(e) => setBadgeForm({ ...badgeForm, image: e.target.value })}
                />
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">الوصف والتعريف بالقلادة:</label>
                <textarea
                  required
                  className="form-input"
                  rows={2}
                  value={badgeForm.description}
                  onChange={(e) => setBadgeForm({ ...badgeForm, description: e.target.value })}
                />
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">المميزات والصلاحيات (سطر مستقل لكل ميزة):</label>
                <textarea
                  className="form-input"
                  rows={3}
                  placeholder="تثبيت الشعار الذهبي&#10;صلاحية كاملة لإدارة المذيعين..."
                  value={badgeForm.featuresText}
                  onChange={(e) => setBadgeForm({ ...badgeForm, featuresText: e.target.value })}
                />
              </div>

              <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '12px' }}>
                <button type="submit" className="action-btn-primary">
                  <Check size={18} />
                  <span>{editingBadge ? 'حفظ تعديلات القلادة' : 'إضافة القلادة الجديدة'}</span>
                </button>

                {editingBadge && (
                  <button
                    type="button"
                    className="action-btn-secondary"
                    onClick={() => {
                      setEditingBadge(null);
                      setBadgeForm({ title: '', badgeType: 'رتبة معتمدة', color: 'gold', description: '', image: '/images/image_7.png', featuresText: '' });
                    }}
                  >
                    إلغاء
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="glass-card" style={{ padding: '28px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '16px' }}>
              القلادات المعروضة حالياً:
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {badgesData.map((badge) => (
                <div
                  key={badge.id}
                  style={{
                    padding: '20px',
                    borderRadius: '14px',
                    background: 'rgba(15,23,42,0.8)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', color: '#f59e0b', fontWeight: '800' }}>{badge.badgeType}</span>
                    <img src={badge.image} alt={badge.title} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                  </div>
                  <h4 style={{ fontSize: '17px', fontWeight: '800', color: '#fff' }}>{badge.title}</h4>
                  <p style={{ fontSize: '13px', color: '#94a3b8' }}>{badge.description}</p>

                  <div style={{ display: 'flex', gap: '8px', marginTop: 'auto', paddingTop: '10px' }}>
                    <button
                      type="button"
                      className="action-btn-secondary"
                      style={{ padding: '6px 12px', fontSize: '12px', width: '100%' }}
                      onClick={() => handleEditBadgeClick(badge)}
                    >
                      <Edit3 size={14} />
                      <span>تعديل</span>
                    </button>
                    <button
                      type="button"
                      className="action-btn-secondary"
                      style={{ padding: '6px 12px', fontSize: '12px', color: '#ef4444', borderColor: 'rgba(239,68,68,0.3)' }}
                      onClick={() => handleDeleteBadge(badge.id)}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ---------------- TAB 4: CUSTOM BLOCKS CRUD ("إضافة أو مسح مربعات") ---------------- */}
      {adminTab === 'blocks' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div className="glass-card" style={{ padding: '28px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '20px', color: '#ec4899', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {editingBlock ? <Edit3 size={20} /> : <Plus size={20} />}
              <span>{editingBlock ? 'تعديل بيانات المربع الحالي' : 'إضافة مربع جديد (قسم / بطاقة مخصصة)'}</span>
            </h2>

            <form onSubmit={handleSaveBlock} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div>
                <label className="form-label">عنوان المربع (Card Title):</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="عنوان المربع الجديد"
                  value={blockForm.title}
                  onChange={(e) => setBlockForm({ ...blockForm, title: e.target.value })}
                />
              </div>

              <div>
                <label className="form-label">الوصف الفرعي (Subtitle):</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="شرح موجز لمحتوى المربع..."
                  value={blockForm.subtitle}
                  onChange={(e) => setBlockForm({ ...blockForm, subtitle: e.target.value })}
                />
              </div>

              <div>
                <label className="form-label">التصنيف أو التاج:</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="قسم مميز / إعلان / تنبيه"
                  value={blockForm.category}
                  onChange={(e) => setBlockForm({ ...blockForm, category: e.target.value })}
                />
              </div>

              <div>
                <label className="form-label">رمز الأيقونة (Icon):</label>
                <select
                  className="form-select"
                  value={blockForm.icon}
                  onChange={(e) => setBlockForm({ ...blockForm, icon: e.target.value })}
                >
                  <option value="Headphones">Headphones (سماعات دعم)</option>
                  <option value="ShieldAlert">ShieldAlert (أمان وتنبيه)</option>
                  <option value="Zap">Zap (بونص وسرعة)</option>
                  <option value="Star">Star (نجمة تميز)</option>
                  <option value="Sparkles">Sparkles (بريق وتكريم)</option>
                  <option value="Layers">Layers (طبقات وإدارة)</option>
                </select>
              </div>

              <div>
                <label className="form-label">لون الإطار والإضاءة:</label>
                <input
                  type="color"
                  className="form-input"
                  style={{ height: '48px', padding: '4px', cursor: 'pointer' }}
                  value={blockForm.color}
                  onChange={(e) => setBlockForm({ ...blockForm, color: e.target.value })}
                />
              </div>

              <div>
                <label className="form-label">رابط صورة داخلية (اختياري):</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="/images/image_1.png"
                  value={blockForm.image}
                  onChange={(e) => setBlockForm({ ...blockForm, image: e.target.value })}
                />
              </div>

              <div>
                <label className="form-label">نص زر الإجراء (Button Text):</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="مثال: تواصل معنا أو استعراض التفاصيل"
                  value={blockForm.buttonText}
                  onChange={(e) => setBlockForm({ ...blockForm, buttonText: e.target.value })}
                />
              </div>

              <div>
                <label className="form-label">رابط الزر (URL أو #tab):</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="https://wa.me/ أو #points"
                  value={blockForm.buttonLink}
                  onChange={(e) => setBlockForm({ ...blockForm, buttonLink: e.target.value })}
                />
              </div>

              <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '12px' }}>
                <button type="submit" className="action-btn-primary">
                  <Check size={18} />
                  <span>{editingBlock ? 'حفظ تعديلات المربع' : 'إضافة المربع الآن إلى الصفحة'}</span>
                </button>

                {editingBlock && (
                  <button
                    type="button"
                    className="action-btn-secondary"
                    onClick={() => {
                      setEditingBlock(null);
                      setBlockForm({ title: '', subtitle: '', category: 'قسم مميز', icon: 'Sparkles', color: '#f59e0b', image: '/images/image_1.png', buttonText: 'عرض التفاصيل', buttonLink: '#home' });
                    }}
                  >
                    إلغاء
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Custom Blocks List */}
          <div className="glass-card" style={{ padding: '28px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '16px' }}>
              المربعات المسجلة حالياً على الداشبورد / الصفحة الرئيسية:
            </h3>

            {customBlocks.length === 0 ? (
              <p style={{ color: '#94a3b8', fontSize: '14px' }}>لا توجد مربعات مخصصة حالياً. قم بإضافة مربع جديد من النموذج أعلاه.</p>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
                {customBlocks.map((blk) => (
                  <div
                    key={blk.id}
                    style={{
                      padding: '20px',
                      borderRadius: '14px',
                      background: 'rgba(15,23,42,0.8)',
                      border: `1px solid ${blk.color || '#f59e0b'}88`,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '12px', fontWeight: '700', color: blk.color }}>{blk.category}</span>
                      <button
                        type="button"
                        onClick={() => handleToggleBlock(blk.id)}
                        style={{
                          padding: '4px 10px',
                          borderRadius: '9999px',
                          border: 'none',
                          background: blk.enabled !== false ? 'rgba(16,185,129,0.2)' : 'rgba(239,68,68,0.2)',
                          color: blk.enabled !== false ? '#10b981' : '#ef4444',
                          fontSize: '12px',
                          fontWeight: '700',
                          cursor: 'pointer'
                        }}
                      >
                        {blk.enabled !== false ? 'مفعل وراهر' : 'مخفي'}
                      </button>
                    </div>

                    <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#fff' }}>{blk.title}</h4>
                    <p style={{ fontSize: '13px', color: '#94a3b8' }}>{blk.subtitle}</p>

                    <div style={{ display: 'flex', gap: '8px', marginTop: 'auto', paddingTop: '10px' }}>
                      <button
                        type="button"
                        className="action-btn-secondary"
                        style={{ padding: '6px 12px', fontSize: '12px', width: '100%' }}
                        onClick={() => handleEditBlockClick(blk)}
                      >
                        <Edit3 size={14} />
                        <span>تعديل</span>
                      </button>
                      <button
                        type="button"
                        className="action-btn-secondary"
                        style={{ padding: '6px 12px', fontSize: '12px', color: '#ef4444', borderColor: 'rgba(239,68,68,0.3)' }}
                        onClick={() => handleDeleteBlock(blk.id)}
                        title="امسح مربع"
                      >
                        <Trash2 size={14} />
                        <span>حذف المربع</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ---------------- TAB 5: ACCOUNTS & SUBSCRIPTIONS MANAGER ---------------- */}
      {adminTab === 'accounts' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Summary Stat Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(245,158,11,0.4)' }}>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>إجمالي الحسابات المسجلة</span>
              <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#f59e0b', marginTop: '6px' }}>{accountsData.length} حساب</h3>
            </div>
            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(6,182,212,0.4)' }}>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>مدراء الوكالات</span>
              <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#06b6d4', marginTop: '6px' }}>{accountsData.filter(a => a.role === 'manager').length} مدير</h3>
            </div>
            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(139,92,246,0.4)' }}>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>المذيعون والصناع</span>
              <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#8b5cf6', marginTop: '6px' }}>{accountsData.filter(a => a.role === 'streamer').length} مذيع</h3>
            </div>
            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(16,185,129,0.4)' }}>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>المشرفون وحسابات الأدمن</span>
              <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#10b981', marginTop: '6px' }}>{accountsData.filter(a => a.role === 'supervisor' || a.role === 'admin').length} حساب</h3>
            </div>
          </div>

          {/* Account Form (Create / Edit) */}
          <div className="glass-card" style={{ padding: '28px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '20px', color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <UserPlus size={22} />
              <span>{editingAccount ? 'تعديل بيانات الحساب والاشتراك' : 'إضافة حساب / مشترك جديد إلى النظام'}</span>
            </h2>

            <form onSubmit={handleSaveAccount} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div>
                <label className="form-label">الاسم الكامل / اسم الوكالة:</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="مثال: وكالة الفرسان المعتمدة"
                  value={accountForm.name}
                  onChange={(e) => setAccountForm({ ...accountForm, name: e.target.value })}
                />
              </div>

              <div>
                <label className="form-label">البريد الإلكتروني / الهاتف:</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="example@bigo.tv أو 0500000000"
                  value={accountForm.email}
                  onChange={(e) => setAccountForm({ ...accountForm, email: e.target.value })}
                />
              </div>

              <div>
                <label className="form-label">آيدي بيجو (Bigo ID):</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="مثال: 908765432"
                  value={accountForm.bigoId}
                  onChange={(e) => setAccountForm({ ...accountForm, bigoId: e.target.value })}
                />
              </div>

              <div>
                <label className="form-label">صفة الحساب / نوع الاشتراك:</label>
                <select
                  className="form-select"
                  value={accountForm.role}
                  onChange={(e) => setAccountForm({ ...accountForm, role: e.target.value })}
                >
                  <option value="manager">مدير وكالة (Manager)</option>
                  <option value="streamer">مذيع / صانع محتوى (Streamer)</option>
                  <option value="supervisor">مشرف مساعد (Supervisor)</option>
                  <option value="admin">مسؤول نظام (Admin)</option>
                </select>
              </div>

              <div>
                <label className="form-label">القلادة / الرتبة الممنوحة:</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="القلادة الذهبية / الفضية / البرونزية"
                  value={accountForm.badge}
                  onChange={(e) => setAccountForm({ ...accountForm, badge: e.target.value })}
                />
              </div>

              <div>
                <label className="form-label">مجموع الفاصوليا:</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="مثال: 1,450,000"
                  value={accountForm.beans}
                  onChange={(e) => setAccountForm({ ...accountForm, beans: e.target.value })}
                />
              </div>

              <div>
                <label className="form-label">الراتب / العمولة الشهري:</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="مثال: $11,600 USD"
                  value={accountForm.monthlySalary}
                  onChange={(e) => setAccountForm({ ...accountForm, monthlySalary: e.target.value })}
                />
              </div>

              <div>
                <label className="form-label">حالة الاشتراك والحساب:</label>
                <select
                  className="form-select"
                  value={accountForm.status}
                  onChange={(e) => setAccountForm({ ...accountForm, status: e.target.value })}
                >
                  <option value="active">نشط ومفعل (Active)</option>
                  <option value="suspended">معلق / موقوف (Suspended)</option>
                  <option value="pending">قيد المراجعه (Pending)</option>
                </select>
              </div>

              <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '12px', marginTop: '10px' }}>
                <button type="submit" className="action-btn-primary">
                  <Save size={18} />
                  <span>{editingAccount ? 'حفظ التعديلات' : 'إضافة الحساب والاشتراك'}</span>
                </button>
                {editingAccount && (
                  <button
                    type="button"
                    className="action-btn-secondary"
                    onClick={() => {
                      setEditingAccount(null);
                      setAccountForm({
                        name: '',
                        email: '',
                        bigoId: '',
                        role: 'manager',
                        badge: 'القلادة الذهبية',
                        beans: '100,000',
                        monthlySalary: '$800 USD',
                        status: 'active',
                        joinDate: 'أغسطس 2026'
                      });
                    }}
                  >
                    إلغاء التعديل
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Accounts List & Table */}
          <div className="glass-card" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Users size={20} color="#f59e0b" />
                <span>قائمة حسابات المشتركين والوكلاء والآدمن ({filteredAccounts.length})</span>
              </h3>

              {/* Role Filter Tabs */}
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {['all', 'manager', 'streamer', 'supervisor', 'admin'].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setAccountRoleFilter(r)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: '700',
                      border: accountRoleFilter === r ? '1px solid #f59e0b' : '1px solid var(--glass-border)',
                      background: accountRoleFilter === r ? 'rgba(245,158,11,0.2)' : 'transparent',
                      color: accountRoleFilter === r ? '#f59e0b' : 'var(--text-muted)',
                      cursor: 'pointer',
                      fontFamily: 'inherit'
                    }}
                  >
                    {r === 'all' && 'الكل'}
                    {r === 'manager' && 'المدراء'}
                    {r === 'streamer' && 'المذيعون'}
                    {r === 'supervisor' && 'المشرفون'}
                    {r === 'admin' && 'الآدمن'}
                  </button>
                ))}
              </div>
            </div>

            <div className="table-responsive">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>الاسم / الوكالة</th>
                    <th>البريد / الهاتف</th>
                    <th>Bigo ID</th>
                    <th>الصفة والنوع</th>
                    <th>الرتبة / القلادة</th>
                    <th>الفاصوليا والعمولة</th>
                    <th>الحالة</th>
                    <th>الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAccounts.map((acc) => (
                    <tr key={acc.id}>
                      <td style={{ fontWeight: '800' }}>{acc.name}</td>
                      <td>{acc.email}</td>
                      <td style={{ color: '#06b6d4', fontWeight: '700' }}>{acc.bigoId}</td>
                      <td>
                        <span style={{
                          padding: '4px 10px',
                          borderRadius: '9999px',
                          fontSize: '12px',
                          fontWeight: '700',
                          background: acc.role === 'manager' ? 'rgba(245,158,11,0.15)' : acc.role === 'admin' ? 'rgba(239,68,68,0.15)' : acc.role === 'streamer' ? 'rgba(6,182,212,0.15)' : 'rgba(139,92,246,0.15)',
                          color: acc.role === 'manager' ? '#f59e0b' : acc.role === 'admin' ? '#ef4444' : acc.role === 'streamer' ? '#06b6d4' : '#8b5cf6'
                        }}>
                          {acc.role === 'manager' ? 'مدير وكالة' : acc.role === 'admin' ? 'مسؤول نظام (Admin)' : acc.role === 'streamer' ? 'مذيع / صانع' : 'مشرف مساعد'}
                        </span>
                      </td>
                      <td>{acc.badge}</td>
                      <td style={{ fontSize: '13px' }}>
                        <div>{acc.beans} 💎</div>
                        <div style={{ color: '#f59e0b', fontWeight: '700' }}>{acc.monthlySalary}</div>
                      </td>
                      <td>
                        <button
                          type="button"
                          onClick={() => handleToggleAccountStatus(acc.id)}
                          style={{
                            padding: '4px 10px',
                            borderRadius: '9999px',
                            border: 'none',
                            fontSize: '12px',
                            fontWeight: '700',
                            cursor: 'pointer',
                            background: acc.status === 'active' ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)',
                            color: acc.status === 'active' ? '#10b981' : '#ef4444',
                            fontFamily: 'inherit'
                          }}
                        >
                          {acc.status === 'active' ? 'مفعل ✓' : 'معلق ✗'}
                        </button>
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <button
                            type="button"
                            className="action-btn-secondary"
                            style={{ padding: '6px 10px', fontSize: '12px' }}
                            onClick={() => handleEditAccountClick(acc)}
                          >
                            <Edit3 size={14} />
                          </button>
                          <button
                            type="button"
                            className="action-btn-secondary"
                            style={{ padding: '6px 10px', fontSize: '12px', color: '#ef4444', borderColor: 'rgba(239,68,68,0.3)' }}
                            onClick={() => handleDeleteAccount(acc.id)}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- TAB 6: RESET & BACKUP ---------------- */}
      {adminTab === 'system' && (
        <div className="glass-card" style={{ padding: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '16px', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <RotateCcw size={22} />
            <span>إعادة الضبط وتصدير بيانات الموقع</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '24px' }}>
            يمكنك استعادة البيانات والخطوط والألوان الأصلية للموقع أو تصدير نسخة احتياطية من التعديلات.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button
              className="action-btn-secondary"
              style={{ color: '#ef4444', borderColor: '#ef4444' }}
              onClick={() => {
                if (confirm('هل أنت تأكد من إعادة ضبط كافة إعدادات ومحتويات الموقع للوضع الافتراضي؟')) {
                  onResetDefaults();
                }
              }}
            >
              <RotateCcw size={18} />
              <span>إعادة ضبط الموقع بالكامل للوضع الافتراضي</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

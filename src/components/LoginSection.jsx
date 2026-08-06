import React, { useState } from 'react';
import {
  UserCheck,
  UserPlus,
  Lock,
  Mail,
  Eye,
  EyeOff,
  Shield,
  Award,
  Star,
  LogOut,
  ArrowLeft,
  KeyRound,
  Users,
  BarChart3,
  Clock,
  DollarSign,
  User,
  CheckCircle2
} from 'lucide-react';

export default function LoginSection({ user, setUser, setActiveTab, isRegisterMode: initialRegisterMode }) {
  const [isRegisterMode, setIsRegisterMode] = useState(initialRegisterMode || false);
  const [role, setRole] = useState('manager'); // 'manager', 'streamer', 'supervisor'
  const [showPassword, setShowPassword] = useState(false);

  // Login Form State
  const [identifier, setIdentifier] = useState('');
  const [bigoId, setBigoId] = useState('');
  const [password, setPassword] = useState('');

  // Register Form State
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!identifier || !password) {
      setErrorMessage('يرجى ملء كافة الحقول المطلوبة لتنفيذ عملية الدخول');
      return;
    }
    setErrorMessage('');
    setSuccessMessage('');

    // Simulate Login Success
    setUser({
      name: role === 'manager' ? 'وكالة الفرسان المعتمدة' : role === 'streamer' ? 'المذيعة سارة خالد' : 'المشرف أحمد علي',
      role: role,
      bigoId: bigoId || '908765432',
      email: identifier.includes('@') ? identifier : `${identifier}@bigo.tv`,
      badge: role === 'manager' ? 'ذهبية' : role === 'supervisor' ? 'فضية' : 'مذيع مميز',
      totalBeans: role === 'manager' ? '1,450,000' : '180,000',
      monthlySalary: role === 'manager' ? '$11,600 USD' : '$1,440 USD',
      activeStreamers: role === 'manager' ? 24 : 1,
      targetProgress: 85,
      cityCountry: 'الرياض، السعودية'
    });
    if (setActiveTab) setActiveTab('home');
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !identifier || !password) {
      setErrorMessage('يرجى كتابة الاسم والبريد/الهاتف وكلمة المرور');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('كلمة المرور وتأكيد كلمة المرور غير متطابقين');
      return;
    }

    if (!agreeTerms) {
      setErrorMessage('يرجى الموافقة على الشروط والسياسات للمتابعة');
      return;
    }

    setErrorMessage('');
    setSuccessMessage('تم إنشاء حسابك الجديد بنجاح! مرحباً بك في الدليل الرسمي.');

    // Auto login created user
    setUser({
      name: fullName,
      role: role,
      bigoId: bigoId || '987654321',
      email: identifier.includes('@') ? identifier : `${identifier}@bigo.tv`,
      badge: role === 'manager' ? 'ذهبية (جديدة)' : role === 'supervisor' ? 'فضية' : 'مذيع متميز',
      totalBeans: '0',
      monthlySalary: '$0 USD',
      activeStreamers: 0,
      targetProgress: 0,
      cityCountry: 'الرياض، السعودية'
    });

    setTimeout(() => {
      if (setActiveTab) setActiveTab('home');
    }, 1200);
  };

  const handleLogout = () => {
    setUser(null);
    setIdentifier('');
    setPassword('');
    setFullName('');
    setConfirmPassword('');
  };

  // If user is already logged in, display the User Dashboard Panel
  if (user) {
    return (
      <section>
        <div className="section-title-wrap">
          <h2 className="section-title">
            <UserCheck className="section-title-icon" size={28} />
            <span>لوحة تحكم الحساب والوكالة - {user.name}</span>
          </h2>
          <button className="action-btn-secondary" onClick={handleLogout} style={{ color: '#ef4444', borderColor: 'rgba(239,68,68,0.3)' }}>
            <LogOut size={16} />
            <span>تسجيل الخروج</span>
          </button>
        </div>

        {/* Dashboard Profile Card */}
        <div className="glass-card" style={{ padding: '32px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '24px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #f59e0b, #d97706)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: '900', color: '#0b0f19', boxShadow: '0 0 20px rgba(245,158,11,0.4)' }}>
                {user.name.charAt(0)}
              </div>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: '800' }}>{user.name}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                  آيدي بيجو (Bigo ID): <span style={{ color: '#06b6d4', fontWeight: '700' }}>{user.bigoId}</span> | الصفة: <span style={{ color: '#f59e0b', fontWeight: '700' }}>{user.role === 'manager' ? 'صاحب وكالة معتمدة' : user.role === 'supervisor' ? 'مشرف مساعد' : 'مذيع رسمى'}</span>
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(245,158,11,0.15)', padding: '10px 18px', borderRadius: '9999px', border: '1px solid #f59e0b' }}>
              <Award size={20} color="#f59e0b" />
              <span style={{ fontWeight: '800', color: '#f59e0b', fontSize: '14px' }}>حساب مفعل - القلادة {user.badge}</span>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '28px' }}>
            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(6,182,212,0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>مجموع الفاصوليا هذا الشهر</span>
                <BarChart3 size={18} color="#06b6d4" />
              </div>
              <span style={{ fontSize: '24px', fontWeight: '900', color: '#06b6d4' }}>{user.totalBeans} 💎</span>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(245,158,11,0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>الأرباح والعمولة التقديرية</span>
                <DollarSign size={18} color="#f59e0b" />
              </div>
              <span style={{ fontSize: '24px', fontWeight: '900', color: '#f59e0b' }}>{user.monthlySalary}</span>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(139,92,246,0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>المذيعون النشطون بالوكالة</span>
                <Users size={18} color="#8b5cf6" />
              </div>
              <span style={{ fontSize: '24px', fontWeight: '900', color: '#8b5cf6' }}>{user.activeStreamers} مذيع</span>
            </div>

            <div className="glass-card" style={{ padding: '20px', border: '1px solid rgba(236,72,153,0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>نسبة إنجاز التارجت</span>
                <Clock size={18} color="#ec4899" />
              </div>
              <span style={{ fontSize: '24px', fontWeight: '900', color: '#ec4899' }}>{user.targetProgress}%</span>
            </div>
          </div>

          {/* Action Links */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button className="action-btn-primary" onClick={() => setActiveTab('points')}>
              <span>حاسبة العمولات وتفاصيل التارجت</span>
              <ArrowLeft size={16} />
            </button>
            <button className="action-btn-secondary" onClick={() => setActiveTab('badges')}>
              <span>استعراض القلادات الممنوحة</span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ maxWidth: '540px', margin: '0 auto' }}>
      <div className="glass-card" style={{ padding: '36px', border: '1px solid rgba(245,158,11,0.4)' }}>
        {/* Toggle Mode Tabs: Login vs Register */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px', background: 'rgba(0,0,0,0.1)', padding: '6px', borderRadius: '14px' }}>
          <button
            type="button"
            onClick={() => { setIsRegisterMode(false); setErrorMessage(''); setSuccessMessage(''); }}
            style={{
              padding: '10px',
              borderRadius: '10px',
              border: 'none',
              background: !isRegisterMode ? 'linear-gradient(135deg, #f59e0b, #d97706)' : 'transparent',
              color: !isRegisterMode ? '#0b0f19' : 'var(--text-muted)',
              fontWeight: '800',
              fontSize: '14px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            <UserCheck size={18} />
            <span>تسجيل الدخول</span>
          </button>

          <button
            type="button"
            onClick={() => { setIsRegisterMode(true); setErrorMessage(''); setSuccessMessage(''); }}
            style={{
              padding: '10px',
              borderRadius: '10px',
              border: 'none',
              background: isRegisterMode ? 'linear-gradient(135deg, #06b6d4, #0891b2)' : 'transparent',
              color: isRegisterMode ? '#fff' : 'var(--text-muted)',
              fontWeight: '800',
              fontSize: '14px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            <UserPlus size={18} />
            <span>إنشاء حساب جديد</span>
          </button>
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: '900', textAlign: 'center', marginBottom: '6px' }}>
          {!isRegisterMode ? 'تسجيل الدخول إلى حسابك' : 'إنشاء حساب مشترك جديد'}
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '24px' }}>
          {!isRegisterMode
            ? 'أدخل بيانات الحساب المسجل مسبقاً للدخول إلى الدليل'
            : 'سجل بياناتك للانضمام إلى شبكة وكالات ومذيعي Bigo Live'}
        </p>

        {errorMessage && (
          <div style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid #ef4444', color: '#fca5a5', padding: '10px 14px', borderRadius: '10px', fontSize: '13px', marginBottom: '16px' }}>
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid #10b981', color: '#6ee7b7', padding: '10px 14px', borderRadius: '10px', fontSize: '13px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={18} color="#10b981" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* ---------------- LOGIN FORM ---------------- */}
        {!isRegisterMode ? (
          <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label className="form-label">البريد الإلكتروني أو رقم الهاتف:</label>
              <div style={{ position: 'relative' }}>
                <Mail size={18} style={{ position: 'absolute', right: '14px', top: '16px', color: '#64748b' }} />
                <input
                  type="text"
                  required
                  className="form-input"
                  style={{ paddingRight: '44px' }}
                  placeholder="name@example.com أو 0500000000"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="form-label">آيدي بيجو المعتمد (Bigo ID):</label>
              <div style={{ position: 'relative' }}>
                <KeyRound size={18} style={{ position: 'absolute', right: '14px', top: '16px', color: '#64748b' }} />
                <input
                  type="text"
                  className="form-input"
                  style={{ paddingRight: '44px' }}
                  placeholder="مثال: 908765432 (اختياري)"
                  value={bigoId}
                  onChange={(e) => setBigoId(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="form-label">كلمة المرور:</label>
              <div style={{ position: 'relative' }}>
                <Lock size={18} style={{ position: 'absolute', right: '14px', top: '16px', color: '#64748b' }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="form-input"
                  style={{ paddingRight: '44px', paddingLeft: '44px' }}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', left: '14px', top: '14px', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', cursor: 'pointer' }}>
                <input type="checkbox" style={{ accentColor: '#f59e0b' }} defaultChecked />
                <span>تذكر بيانات الدخول</span>
              </label>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('يرجى التواصل مع الدعم الفني عبر الواتساب لاستعادة كلمة المرور.'); }} style={{ color: '#06b6d4', textDecoration: 'none' }}>
                نسيت كلمة المرور؟
              </a>
            </div>

            <button type="submit" className="action-btn-primary" style={{ width: '100%', marginTop: '10px' }}>
              <UserCheck size={18} />
              <span>تسجيل الدخول الآن</span>
            </button>

            <div style={{ textAlign: 'center', marginTop: '14px', fontSize: '14px', color: 'var(--text-muted)' }}>
              ليس لديك حساب بعد؟{' '}
              <button
                type="button"
                onClick={() => setIsRegisterMode(true)}
                style={{ background: 'none', border: 'none', color: '#06b6d4', fontWeight: '800', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                إنشاء حساب مشترك جديد
              </button>
            </div>
          </form>
        ) : (
          /* ---------------- REGISTER FORM ---------------- */
          <form onSubmit={handleRegisterSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label className="form-label">الاسم الكامل أو اسم الوكالة:</label>
              <div style={{ position: 'relative' }}>
                <User size={18} style={{ position: 'absolute', right: '14px', top: '16px', color: '#64748b' }} />
                <input
                  type="text"
                  required
                  className="form-input"
                  style={{ paddingRight: '44px' }}
                  placeholder="أدخل اسمك أو اسم وكالتك"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="form-label">البريد الإلكتروني أو رقم الهاتف:</label>
              <div style={{ position: 'relative' }}>
                <Mail size={18} style={{ position: 'absolute', right: '14px', top: '16px', color: '#64748b' }} />
                <input
                  type="text"
                  required
                  className="form-input"
                  style={{ paddingRight: '44px' }}
                  placeholder="name@example.com أو 0500000000"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="form-label">آيدي بيجو (Bigo ID):</label>
              <div style={{ position: 'relative' }}>
                <KeyRound size={18} style={{ position: 'absolute', right: '14px', top: '16px', color: '#64748b' }} />
                <input
                  type="text"
                  className="form-input"
                  style={{ paddingRight: '44px' }}
                  placeholder="مثال: 908765432"
                  value={bigoId}
                  onChange={(e) => setBigoId(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="form-label">كلمة المرور الجديدة:</label>
              <div style={{ position: 'relative' }}>
                <Lock size={18} style={{ position: 'absolute', right: '14px', top: '16px', color: '#64748b' }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="form-input"
                  style={{ paddingRight: '44px', paddingLeft: '44px' }}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', left: '14px', top: '14px', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label className="form-label">تأكيد كلمة المرور:</label>
              <div style={{ position: 'relative' }}>
                <Lock size={18} style={{ position: 'absolute', right: '14px', top: '16px', color: '#64748b' }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="form-input"
                  style={{ paddingRight: '44px' }}
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <div style={{ fontSize: '13px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  style={{ accentColor: '#06b6d4' }}
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                />
                <span>أوافق على الشروط والسياسات العامة للوكالات</span>
              </label>
            </div>

            <button
              type="submit"
              className="action-btn-primary"
              style={{
                width: '100%',
                marginTop: '10px',
                background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                color: '#fff'
              }}
            >
              <UserPlus size={18} />
              <span>إنشاء حساب جديد الآن</span>
            </button>

            <div style={{ textAlign: 'center', marginTop: '14px', fontSize: '14px', color: 'var(--text-muted)' }}>
              لديك حساب بالفعل؟{' '}
              <button
                type="button"
                onClick={() => setIsRegisterMode(false)}
                style={{ background: 'none', border: 'none', color: '#f59e0b', fontWeight: '800', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                تسجيل الدخول
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

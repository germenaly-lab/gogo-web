import React, { useState, useEffect } from 'react';
import { UserCheck, Lock, Mail, Eye, EyeOff, Shield, Award, Star, LogOut, CheckCircle, ArrowLeft, KeyRound, Phone, Users, BarChart3, Clock, DollarSign, AlertCircle } from 'lucide-react';

export default function LoginSection({ user, setUser, setActiveTab, isRegisterMode, setIsRegisterMode }) {
  const [isRegister, setIsRegister] = useState(isRegisterMode || false);
  const [role, setRole] = useState('manager'); // 'manager', 'streamer', 'supervisor'
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isRegisterMode) {
      setIsRegister(true);
      setRole('manager');
    }
  }, [isRegisterMode]);

  // Form State
  const [identifier, setIdentifier] = useState('');
  const [bigoId, setBigoId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agencyName, setAgencyName] = useState('');
  const [cityCountry, setCityCountry] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!identifier || !password || (isRegister && !bigoId)) {
      setErrorMessage('يرجى ملء كافة الحقول المطلوبة لتنفيذ العملية');
      return;
    }
    setErrorMessage('');
    
    // Simulate Login / Registration Success
    setUser({
      name: isRegister && agencyName ? agencyName : (role === 'manager' ? 'وكالة الفرسان المعتمدة' : role === 'streamer' ? 'المذيعة سارة خالد' : 'المشرف أحمد علي'),
      role: role,
      bigoId: bigoId || '908765432',
      email: identifier.includes('@') ? identifier : `${identifier}@bigo.tv`,
      badge: role === 'manager' ? 'ذهبية' : role === 'supervisor' ? 'فضية' : 'مذيع مميز',
      totalBeans: role === 'manager' ? '1,450,000' : '180,000',
      monthlySalary: role === 'manager' ? '$11,600 USD' : '$1,440 USD',
      activeStreamers: role === 'manager' ? 24 : 1,
      targetProgress: 85,
      cityCountry: cityCountry || 'الرياض، السعودية'
    });
  };

  const handleLogout = () => {
    setUser(null);
    setIdentifier('');
    setPassword('');
    if (setIsRegisterMode) setIsRegisterMode(false);
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
        <div className="glass-card" style={{ padding: '32px', marginBottom: '32px', background: 'linear-gradient(135deg, rgba(22, 30, 49, 0.9), rgba(15, 23, 42, 0.95))' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '24px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #f59e0b, #d97706)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: '900', color: '#0b0f19', boxShadow: '0 0 20px rgba(245,158,11,0.4)' }}>
                {user.name.charAt(0)}
              </div>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#fff' }}>{user.name}</h3>
                <p style={{ fontSize: '14px', color: '#94a3b8' }}>
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
            <div className="glass-card" style={{ padding: '20px', background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(6,182,212,0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', color: '#94a3b8' }}>مجموع الفاصوليا هذا الشهر</span>
                <BarChart3 size={18} color="#06b6d4" />
              </div>
              <span style={{ fontSize: '24px', fontWeight: '900', color: '#06b6d4' }}>{user.totalBeans} 💎</span>
            </div>

            <div className="glass-card" style={{ padding: '20px', background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(245,158,11,0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', color: '#94a3b8' }}>الأرباح والعمولة التقديرية</span>
                <DollarSign size={18} color="#f59e0b" />
              </div>
              <span style={{ fontSize: '24px', fontWeight: '900', color: '#f59e0b' }}>{user.monthlySalary}</span>
            </div>

            <div className="glass-card" style={{ padding: '20px', background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(139,92,246,0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', color: '#94a3b8' }}>المذيعون النشطون بالوكالة</span>
                <Users size={18} color="#8b5cf6" />
              </div>
              <span style={{ fontSize: '24px', fontWeight: '900', color: '#8b5cf6' }}>{user.activeStreamers} مذيع</span>
            </div>

            <div className="glass-card" style={{ padding: '20px', background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(236,72,153,0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', color: '#94a3b8' }}>نسبة إنجاز التارجت</span>
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
      <div className="glass-card" style={{ padding: '36px', background: 'linear-gradient(145deg, rgba(22, 30, 49, 0.95), rgba(15, 23, 42, 0.98))', border: '1px solid rgba(245,158,11,0.4)' }}>
        
        {/* Important Policy Alert */}
        {isRegister && (
          <div style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid #f59e0b', padding: '12px 16px', borderRadius: '12px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#fef08a' }}>
            <AlertCircle size={20} color="#f59e0b" style={{ flexShrink: 0 }} />
            <span>تنبيه هام: يتطلب إنشاء الوكالة التوثيق الرسمي وتسجيل الدخول عبر المنصة.</span>
          </div>
        )}

        {/* Toggle Login vs Register */}
        <div style={{ display: 'flex', background: 'rgba(11,15,25,0.8)', padding: '4px', borderRadius: '9999px', marginBottom: '28px', border: '1px solid rgba(255,255,255,0.08)' }}>
          <button
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '9999px',
              border: 'none',
              background: !isRegister ? 'linear-gradient(135deg, #f59e0b, #d97706)' : 'transparent',
              color: !isRegister ? '#0b0f19' : '#94a3b8',
              fontWeight: '800',
              fontSize: '14px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.2s ease'
            }}
            onClick={() => {
              setIsRegister(false);
              if (setIsRegisterMode) setIsRegisterMode(false);
              setErrorMessage('');
            }}
          >
            تسجيل الدخول
          </button>
          <button
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '9999px',
              border: 'none',
              background: isRegister ? 'linear-gradient(135deg, #f59e0b, #d97706)' : 'transparent',
              color: isRegister ? '#0b0f19' : '#94a3b8',
              fontWeight: '800',
              fontSize: '14px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.2s ease'
            }}
            onClick={() => {
              setIsRegister(true);
              if (setIsRegisterMode) setIsRegisterMode(true);
              setErrorMessage('');
            }}
          >
            إنشاء حساب وطلب وكالة
          </button>
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: '900', textAlign: 'center', marginBottom: '8px', color: '#fff' }}>
          {isRegister ? 'تسجيل حساب وتفعيل طلب الوكالة' : 'تسجيل الدخول إلى حسابك'}
        </h2>
        <p style={{ fontSize: '14px', color: '#94a3b8', textAlign: 'center', marginBottom: '24px' }}>
          {isRegister ? 'قم بإنشاء حسابك الرسمي وتعبئة بيانات الاعتماد لإنشاء الوكالة' : 'أدخل بيانات الاعتماد الخاصة بك للدخول إلى لوحة التحكم'}
        </p>

        {/* Role Selector */}
        <div style={{ marginBottom: '24px' }}>
          <label className="form-label" style={{ marginBottom: '10px', display: 'block' }}>اختر صفة الحساب:</label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            <button
              type="button"
              onClick={() => setRole('manager')}
              style={{
                padding: '10px 8px',
                borderRadius: '12px',
                border: role === 'manager' ? '1px solid #f59e0b' : '1px solid rgba(255,255,255,0.08)',
                background: role === 'manager' ? 'rgba(245,158,11,0.15)' : 'rgba(15,23,42,0.6)',
                color: role === 'manager' ? '#f59e0b' : '#94a3b8',
                fontWeight: '700',
                fontSize: '13px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Shield size={20} color={role === 'manager' ? '#f59e0b' : '#94a3b8'} />
              <span>مدير وكالة</span>
            </button>

            <button
              type="button"
              onClick={() => setRole('streamer')}
              style={{
                padding: '10px 8px',
                borderRadius: '12px',
                border: role === 'streamer' ? '1px solid #06b6d4' : '1px solid rgba(255,255,255,0.08)',
                background: role === 'streamer' ? 'rgba(6,182,212,0.15)' : 'rgba(15,23,42,0.6)',
                color: role === 'streamer' ? '#06b6d4' : '#94a3b8',
                fontWeight: '700',
                fontSize: '13px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Star size={20} color={role === 'streamer' ? '#06b6d4' : '#94a3b8'} />
              <span>مذيع / صانع</span>
            </button>

            <button
              type="button"
              onClick={() => setRole('supervisor')}
              style={{
                padding: '10px 8px',
                borderRadius: '12px',
                border: role === 'supervisor' ? '1px solid #8b5cf6' : '1px solid rgba(255,255,255,0.08)',
                background: role === 'supervisor' ? 'rgba(139,92,246,0.15)' : 'rgba(15,23,42,0.6)',
                color: role === 'supervisor' ? '#8b5cf6' : '#94a3b8',
                fontWeight: '700',
                fontSize: '13px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Award size={20} color={role === 'supervisor' ? '#8b5cf6' : '#94a3b8'} />
              <span>مشرف مساعد</span>
            </button>
          </div>
        </div>

        {errorMessage && (
          <div style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid #ef4444', color: '#fca5a5', padding: '10px 14px', borderRadius: '10px', fontSize: '13px', marginBottom: '16px' }}>
            {errorMessage}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {isRegister && role === 'manager' && (
            <div>
              <label className="form-label">اسم الوكالة المراد تفعيلها:</label>
              <input
                type="text"
                required
                className="form-input"
                placeholder="مثال: وكالة النجوم المعتمدة"
                value={agencyName}
                onChange={(e) => setAgencyName(e.target.value)}
              />
            </div>
          )}

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
                required
                className="form-input"
                style={{ paddingRight: '44px' }}
                placeholder="مثال: 908765432"
                value={bigoId}
                onChange={(e) => setBigoId(e.target.value)}
              />
            </div>
          </div>

          {isRegister && (
            <div>
              <label className="form-label">المدينة والدولة:</label>
              <input
                type="text"
                required
                className="form-input"
                placeholder="مثال: الرياض، السعودية"
                value={cityCountry}
                onChange={(e) => setCityCountry(e.target.value)}
              />
            </div>
          )}

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

          {isRegister && (
            <div>
              <label className="form-label">تأكيد كلمة المرور:</label>
              <input
                type="password"
                required
                className="form-input"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          )}

          {!isRegister && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94a3b8', cursor: 'pointer' }}>
                <input type="checkbox" style={{ accentColor: '#f59e0b' }} defaultChecked />
                <span>تذكر بيانات الدخول</span>
              </label>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('يرجى التواصل مع الدعم الفني عبر الواتساب لاستعادة كلمة المرور.'); }} style={{ color: '#06b6d4', textDecoration: 'none' }}>
                نسيت كلمة المرور؟
              </a>
            </div>
          )}

          <button type="submit" className="action-btn-primary" style={{ width: '100%', marginTop: '10px' }}>
            <UserCheck size={18} />
            <span>{isRegister ? 'تسجيل الحساب وإنشاء الوكالة' : 'تسجيل الدخول الآن'}</span>
          </button>
        </form>

        <div style={{ marginTop: '24px', textAlign: 'center', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '13px', color: '#94a3b8' }}>
          {isRegister ? (
            <span>لديك حساب بالفعل؟ <a href="#" onClick={(e) => { e.preventDefault(); setIsRegister(false); if (setIsRegisterMode) setIsRegisterMode(false); }} style={{ color: '#f59e0b', fontWeight: '700', textDecoration: 'none' }}>تسجيل الدخول</a></span>
          ) : (
            <span>ليس لديك حساب؟ <a href="#" onClick={(e) => { e.preventDefault(); setIsRegister(true); if (setIsRegisterMode) setIsRegisterMode(true); }} style={{ color: '#f59e0b', fontWeight: '700', textDecoration: 'none' }}>إنشاء وكالة / حساب جديد</a></span>
          )}
        </div>
      </div>
    </section>
  );
}

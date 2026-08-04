import React, { useState } from 'react';
import { X, Send, CheckCircle, UserCheck } from 'lucide-react';

export default function ApplyModal({ isOpen, onClose, onGoToLogin }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    agencyName: '',
    ownerName: '',
    phone: '',
    bigoId: '',
    cityCountry: '',
    streamersCount: '5-10',
    experience: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={onClose}>
          <X size={24} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <CheckCircle size={64} color="#f59e0b" style={{ margin: '0 auto 16px auto' }} />
            <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#fff', marginBottom: '12px' }}>
              تم إرسال طلب الوكالة بنجاح!
            </h3>
            <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: '1.6', marginBottom: '24px' }}>
              شكراً لتواصلك معنا. سيقوم فريق إدارة Bigo Live بمراجعة بياناتك والتواصل معك عبر الواتساب/الهاتف خلال 24 ساعة لإكمال التوثيق ومنحك القلادة الذهبية.
            </p>
            <button className="action-btn-primary" onClick={() => { setSubmitted(false); onClose(); }}>
              إغلاق النافذة
            </button>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{ padding: '3px 10px', borderRadius: '9999px', background: 'rgba(245,158,11,0.15)', color: '#f59e0b', fontSize: '12px', fontWeight: '800' }}>
                تقديم مباشر بدون تسجيل دخول
              </span>
            </div>

            <h3 style={{ fontSize: '22px', fontWeight: '900', color: '#fff', marginBottom: '6px' }}>
              طلب إنشاء وكالة Bigo Live معتمدة
            </h3>
            <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '20px' }}>
              أدخل بياناتك مباشرة ليتم التواصل معك رسمياً ومعالجة التوثيق.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label className="form-label">اسم الوكالة المقترح:</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="مثال: وكالة النجوم المعتمدة"
                  value={formData.agencyName}
                  onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label className="form-label">اسم صاحب الوكالة:</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="الاسم الثلاثي"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="form-label">رقم الهاتف / الواتساب:</label>
                  <input
                    type="tel"
                    required
                    className="form-input"
                    placeholder="+966 500000000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label className="form-label">آيدي بيجو (Bigo ID):</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="مثال: 908123456"
                    value={formData.bigoId}
                    onChange={(e) => setFormData({ ...formData, bigoId: e.target.value })}
                  />
                </div>
                <div>
                  <label className="form-label">الدولة والمدينة:</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="مثال: الرياض، السعودية"
                    value={formData.cityCountry}
                    onChange={(e) => setFormData({ ...formData, cityCountry: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="form-label">عدد المذيعين المتوقع جلبهم شهرياً:</label>
                <select
                  className="form-select"
                  value={formData.streamersCount}
                  onChange={(e) => setFormData({ ...formData, streamersCount: e.target.value })}
                >
                  <option value="5-10">5 إلى 10 مذيعين</option>
                  <option value="10-25">10 إلى 25 مذيعاً</option>
                  <option value="25-50">25 إلى 50 مذيعاً</option>
                  <option value="50+">أكثر من 50 مذيعاً (وكالة كبرى)</option>
                </select>
              </div>

              <button type="submit" className="action-btn-primary" style={{ marginTop: '10px', width: '100%' }}>
                <Send size={18} />
                <span>إرسال طلب التوثيق الآن</span>
              </button>
            </form>

            <div style={{ marginTop: '16px', textAlign: 'center', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '13px', color: '#94a3b8' }}>
              هل ترغب بإنشاء حساب أو لديك حساب بالفعل؟{' '}
              <button
                type="button"
                onClick={onGoToLogin}
                style={{ background: 'none', border: 'none', color: '#06b6d4', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                الانتقال لتسجيل الدخول / الحسابات
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

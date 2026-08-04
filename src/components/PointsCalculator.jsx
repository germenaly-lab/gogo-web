import React, { useState } from 'react';
import { Calculator, DollarSign, Award, Info } from 'lucide-react';
import { targetTiers } from '../data/siteData';

export default function PointsCalculator() {
  const [selectedTier, setSelectedTier] = useState(targetTiers[0].target);
  const [customBeans, setCustomBeans] = useState('');

  const currentTierObj = targetTiers.find((t) => t.target === selectedTier) || targetTiers[0];

  // Calculate customized values if user inputs custom beans
  let displayBeans = currentTierObj.beans;
  let displayHostSalary = currentTierObj.hostSalaryUSD;
  let displayAgencyBonus = currentTierObj.agencyBonusUSD;

  if (customBeans && !isNaN(customBeans) && Number(customBeans) > 0) {
    const num = Number(customBeans);
    displayBeans = num;
    // Bigo beans to USD conversion estimate (210 beans ~ $1 USD gross)
    displayHostSalary = Math.round((num / 210) * 0.8);
    displayAgencyBonus = Math.round(displayHostSalary * 0.2);
  }

  return (
    <section>
      <div className="section-title-wrap">
        <h2 className="section-title">
          <Calculator className="section-title-icon" size={28} />
          <span>جدول العمولات وحاسبة الأرباح الفورية</span>
        </h2>
      </div>

      {/* Interactive Calculator Widget */}
      <div className="glass-card calc-card">
        <div className="calc-grid">
          <div>
            <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '8px', color: '#06b6d4' }}>
              حاسبة أرباح المذيع والوكالة
            </h3>
            <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '24px' }}>
              اختر مستوى التارجت أو أدخل كمية الفاصوليا لمعرفة الراتب المستحق للمذيع والعمولة المباشرة للوكالة.
            </p>

            <div className="form-group">
              <label className="form-label">مستوى التارجت المعياري:</label>
              <select
                className="form-select"
                value={selectedTier}
                onChange={(e) => {
                  setSelectedTier(e.target.value);
                  setCustomBeans('');
                }}
              >
                {targetTiers.map((t) => (
                  <option key={t.target} value={t.target}>
                    تارجت {t.target} - ({t.beans.toLocaleString()} فاصوليا)
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">أو أدخل كمية الفاصوليا خصيصاً:</label>
              <input
                type="number"
                className="form-input"
                placeholder="مثال: 150000"
                value={customBeans}
                onChange={(e) => setCustomBeans(e.target.value)}
              />
            </div>
          </div>

          <div className="calc-result-box">
            <h4 style={{ fontSize: '16px', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
              نتائج الأرباح المتوقعة
            </h4>

            <div className="result-row">
              <span style={{ fontSize: '15px', color: '#cbd5e1' }}>مجموع الفاصوليا:</span>
              <span className="result-val-cyan">{displayBeans.toLocaleString()} 💎</span>
            </div>

            <div className="result-row">
              <span style={{ fontSize: '15px', color: '#cbd5e1' }}>راتب المذيع المتوقع:</span>
              <span className="result-val-gold">${displayHostSalary.toLocaleString()} USD</span>
            </div>

            <div className="result-row">
              <span style={{ fontSize: '15px', color: '#cbd5e1' }}>عمولة الوكالة (Bonus):</span>
              <span style={{ fontSize: '22px', fontWeight: '800', color: '#ec4899' }}>
                ${displayAgencyBonus.toLocaleString()} USD
              </span>
            </div>

            <div style={{ background: 'rgba(245,158,11,0.1)', padding: '10px 14px', borderRadius: '8px', display: 'flex', gap: '8px', fontSize: '12px', color: '#fef08a' }}>
              <Info size={16} style={{ flexShrink: 0 }} />
              <span>يشترط تحقيق 30 ساعة بث مباشر و 15 يوماً معتمداً شهرياً لاستحقاق التارجت.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Target Tiers Table */}
      <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '16px', color: '#fff' }}>
        جدول مستويات التارجت الرسمية لدى Bigo Live
      </h3>

      <div className="table-responsive">
        <table className="custom-table">
          <thead>
            <tr>
              <th>المستوى</th>
              <th>التارجت (فاصوليا)</th>
              <th>ساعات البث</th>
              <th>أيام البث</th>
              <th>راتب المذيع (تقديري)</th>
              <th>عمولة الوكالة</th>
            </tr>
          </thead>
          <tbody>
            {targetTiers.map((tier) => (
              <tr key={tier.target}>
                <td style={{ fontWeight: '800', color: '#f59e0b' }}>تارجت {tier.target}</td>
                <td>{tier.beans.toLocaleString()} فاصوليا</td>
                <td>{tier.hours} ساعة</td>
                <td>{tier.days} يوم</td>
                <td style={{ fontWeight: '700', color: '#fff' }}>${tier.hostSalaryUSD} USD</td>
                <td style={{ color: '#06b6d4', fontWeight: '700' }}>${tier.agencyBonusUSD} USD</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { InquiryFormData } from '../types';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultHeadcount: number;
  calculatedBudget: number;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultHeadcount,
  calculatedBudget
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    headcount: defaultHeadcount,
    dietaryNotes: '',
    preferredDate: '2024-10-15',
    needInvoice: true,
    taxId: '',
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `XL-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceCode(code);
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden border border-outline-variant/30 max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-primary text-on-primary px-space-lg py-space-md flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary-fixed text-[24px]">
              calendar_month
            </span>
            <div>
              <h3 className="font-title-md text-title-md text-on-primary">
                新龍社區企業員工旅遊 ‧ 預約與檔期確認
              </h3>
              <p className="text-xs text-primary-fixed">
                目標檔期：10/15 (週二) ｜ 金牌漁村深度體驗
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={resetAndClose}
            className="w-8 h-8 rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 flex items-center justify-center text-on-primary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-space-lg overflow-y-auto flex-1">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-space-lg gap-space-md">
              <div className="w-16 h-16 rounded-full bg-secondary/15 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[36px]">check_circle</span>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-headline-sm text-headline-sm text-primary">
                  預約確認已受理！
                </h4>
                <p className="font-body-md text-on-surface-variant max-w-md">
                  感謝貴公司諮詢「新龍社區金牌農村 企業員工旅遊企劃」，專屬預約單號：
                </p>
                <div className="my-2 px-4 py-2 bg-surface-container rounded-lg font-mono text-xl font-bold text-primary tracking-wider">
                  {referenceCode}
                </div>
              </div>

              <div className="p-space-md bg-surface-container-low rounded-xl text-left w-full text-body-md text-on-surface-variant flex flex-col gap-2 border border-outline-variant/30">
                <div className="flex justify-between">
                  <span className="font-medium text-on-surface">預約公司：</span>
                  <span>{formData.companyName || '企業貴賓'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-on-surface">聯絡窗口：</span>
                  <span>{formData.contactPerson} ({formData.phone})</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-on-surface">預約人數：</span>
                  <span>{formData.headcount} 位同仁</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-on-surface">預估總預算：</span>
                  <span className="font-bold text-primary">NT$ {calculatedBudget.toLocaleString()}</span>
                </div>
              </div>

              <p className="text-xs text-on-surface-variant max-w-md">
                社區專案經理（林執行秘書）將於 24 小時內致電與您確認活動流程細節與遊覽車動線，並發送正式用印確認單。
              </p>

              <button
                type="button"
                onClick={resetAndClose}
                className="mt-space-xs px-space-xl py-space-xs rounded-lg bg-primary text-on-primary font-title-md hover:bg-primary-container transition-colors cursor-pointer"
              >
                完成並關閉
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-space-md">
              <div className="p-space-sm rounded-lg bg-surface-container-low border border-outline-variant/30 text-body-md text-on-surface-variant flex items-center justify-between">
                <div>
                  <span className="font-semibold text-primary">目前試算預算：</span>
                  <span>{formData.headcount} 人 ｜ 總計 NT$ {calculatedBudget.toLocaleString()}</span>
                </div>
                <span className="text-xs text-secondary font-bold">含 15% 社區服務費</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-on-surface-variant">
                    公司/組織全銜 <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="例：台灣精準科技有限公司"
                    value={formData.companyName}
                    onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3 py-2 border border-outline-variant rounded-lg text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-on-surface-variant">
                    福委/主辦窗口姓名 <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="例：陳主任 / 李專員"
                    value={formData.contactPerson}
                    onChange={e => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-3 py-2 border border-outline-variant rounded-lg text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-on-surface-variant">
                    聯絡電話 / 手機 <span className="text-error">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="例：0912-345-678"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-outline-variant rounded-lg text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-on-surface-variant">
                    公務電子郵件 <span className="text-error">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="例：hr@company.com.tw"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-outline-variant rounded-lg text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-on-surface-variant">
                    預估參與總人數 <span className="text-error">*</span>
                  </label>
                  <input
                    type="number"
                    min="10"
                    max="200"
                    required
                    value={formData.headcount}
                    onChange={e =>
                      setFormData({ ...formData, headcount: parseInt(e.target.value) || 20 })
                    }
                    className="w-full px-3 py-2 border border-outline-variant rounded-lg text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-on-surface-variant">
                    預約日期
                  </label>
                  <input
                    type="text"
                    readOnly
                    value="2024-10-15 (專屬保留檔期)"
                    className="w-full px-3 py-2 bg-surface-container border border-outline-variant rounded-lg text-body-md text-on-surface-variant cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Special dietary & requests */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-on-surface-variant">
                  特殊飲食需求 (素食人數 / 海鮮過敏)
                </label>
                <input
                  type="text"
                  placeholder="例：蛋奶素 2 位、全素 1 位、無甲殼類過敏"
                  value={formData.dietaryNotes}
                  onChange={e => setFormData({ ...formData, dietaryNotes: e.target.value })}
                  className="w-full px-3 py-2 border border-outline-variant rounded-lg text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-on-surface-variant">
                  發票統編需求
                </label>
                <div className="flex items-center gap-3">
                  <label className="inline-flex items-center gap-1.5 text-body-md cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.needInvoice}
                      onChange={e => setFormData({ ...formData, needInvoice: e.target.checked })}
                      className="rounded text-primary focus:ring-primary"
                    />
                    <span>需開立統一編號報帳收據</span>
                  </label>
                  {formData.needInvoice && (
                    <input
                      type="text"
                      placeholder="公司統編 8 碼"
                      maxLength={8}
                      value={formData.taxId}
                      onChange={e => setFormData({ ...formData, taxId: e.target.value })}
                      className="flex-1 px-3 py-1.5 border border-outline-variant rounded-lg text-body-md focus:border-secondary outline-none"
                    />
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-on-surface-variant">
                  福委會備註與特殊客製需求
                </label>
                <textarea
                  rows={2}
                  placeholder="若需提早寄發遊覽車路線圖或需申請 ESG 減碳成果證明，請在此備註"
                  value={formData.specialRequests}
                  onChange={e => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full px-3 py-2 border border-outline-variant rounded-lg text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-space-xs pt-space-xs border-t border-outline-variant/30">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-space-md py-space-xs rounded-lg text-body-md text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="px-space-lg py-space-xs rounded-lg bg-secondary text-on-secondary font-title-md text-title-md hover:bg-secondary/90 transition-colors shadow-sm cursor-pointer"
                >
                  確認送出預約申請
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

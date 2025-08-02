import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Receipt, TrendingUp, Clock, Calendar } from 'lucide-react';
interface EstimateSummaryProps {
  subtotal: number;
  taxRate: number;
  taxAmount: number;
  grandTotal: number;
  totalLeadTime?: number;
  totalInstallationTime?: number;
  mpid?: string;
}
const EstimateSummary: React.FC<EstimateSummaryProps> = ({
  subtotal,
  taxRate,
  taxAmount,
  grandTotal,
  totalLeadTime,
  totalInstallationTime
}) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };
  const formatPercentage = (rate: number) => {
    return `${(rate * 100).toFixed(2)}%`;
  };
  return <footer className="bg-gradient-to-r from-slate-800 to-blue-900 text-white px-8 py-8" data-magicpath-id="0" data-magicpath-path="EstimateSummary.tsx">
      <div className="max-w-4xl ml-auto" data-magicpath-id="1" data-magicpath-path="EstimateSummary.tsx">
        <div className="flex items-center gap-3 mb-6" data-magicpath-id="2" data-magicpath-path="EstimateSummary.tsx">
          <Calculator className="w-6 h-6 text-blue-300" data-magicpath-id="3" data-magicpath-path="EstimateSummary.tsx" />
          <h3 className="text-2xl font-bold" data-magicpath-id="4" data-magicpath-path="EstimateSummary.tsx">Estimate Summary</h3>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8" data-magicpath-id="5" data-magicpath-path="EstimateSummary.tsx">
          {/* Financial Summary */}
          <div className="space-y-4" data-magicpath-id="6" data-magicpath-path="EstimateSummary.tsx">
            <h4 className="text-lg font-semibold text-blue-200 mb-4" data-magicpath-id="7" data-magicpath-path="EstimateSummary.tsx">Financial Breakdown</h4>
            
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.4
          }} className="flex items-center justify-between py-3 border-b border-slate-600" data-magicpath-id="8" data-magicpath-path="EstimateSummary.tsx">
              <div className="flex items-center gap-2" data-magicpath-id="9" data-magicpath-path="EstimateSummary.tsx">
                <Receipt className="w-5 h-5 text-blue-300" data-magicpath-id="10" data-magicpath-path="EstimateSummary.tsx" />
                <span className="text-lg" data-magicpath-id="11" data-magicpath-path="EstimateSummary.tsx">Subtotal</span>
              </div>
              <span className="text-xl font-semibold" data-magicpath-id="12" data-magicpath-path="EstimateSummary.tsx">{formatCurrency(subtotal)}</span>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.4,
            delay: 0.1
          }} className="flex items-center justify-between py-3 border-b border-slate-600" data-magicpath-id="13" data-magicpath-path="EstimateSummary.tsx">
              <div className="flex items-center gap-2" data-magicpath-id="14" data-magicpath-path="EstimateSummary.tsx">
                <TrendingUp className="w-5 h-5 text-blue-300" data-magicpath-id="15" data-magicpath-path="EstimateSummary.tsx" />
                <span className="text-lg" data-magicpath-id="16" data-magicpath-path="EstimateSummary.tsx">Tax ({formatPercentage(taxRate)})</span>
              </div>
              <span className="text-xl font-semibold" data-magicpath-id="17" data-magicpath-path="EstimateSummary.tsx">{formatCurrency(taxAmount)}</span>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.4,
            delay: 0.2
          }} className="flex items-center justify-between py-4 bg-blue-800 rounded-lg px-4 mt-6" data-magicpath-id="18" data-magicpath-path="EstimateSummary.tsx">
              <div className="flex items-center gap-2" data-magicpath-id="19" data-magicpath-path="EstimateSummary.tsx">
                <DollarSign className="w-6 h-6 text-green-300" data-magicpath-id="20" data-magicpath-path="EstimateSummary.tsx" />
                <span className="text-2xl font-bold" data-magicpath-id="21" data-magicpath-path="EstimateSummary.tsx">Grand Total</span>
              </div>
              <span className="text-3xl font-bold text-green-300" data-magicpath-id="22" data-magicpath-path="EstimateSummary.tsx">
                {formatCurrency(grandTotal)}
              </span>
            </motion.div>
          </div>

          {/* Schedule Summary */}
          {(totalLeadTime || totalInstallationTime) && <div className="space-y-4" data-magicpath-id="23" data-magicpath-path="EstimateSummary.tsx">
              <h4 className="text-lg font-semibold text-blue-200 mb-4" data-magicpath-id="24" data-magicpath-path="EstimateSummary.tsx">Project Timeline</h4>
              
              {totalLeadTime && <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.4,
            delay: 0.3
          }} className="flex items-center justify-between py-3 border-b border-slate-600" data-magicpath-id="25" data-magicpath-path="EstimateSummary.tsx">
                  <div className="flex items-center gap-2" data-magicpath-id="26" data-magicpath-path="EstimateSummary.tsx">
                    <Calendar className="w-5 h-5 text-blue-300" data-magicpath-id="27" data-magicpath-path="EstimateSummary.tsx" />
                    <span className="text-lg" data-magicpath-id="28" data-magicpath-path="EstimateSummary.tsx">Maximum Lead Time</span>
                  </div>
                  <span className="text-xl font-semibold" data-magicpath-id="29" data-magicpath-path="EstimateSummary.tsx">{totalLeadTime} weeks</span>
                </motion.div>}
              
              {totalInstallationTime && <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.4,
            delay: 0.4
          }} className="flex items-center justify-between py-3 border-b border-slate-600" data-magicpath-id="30" data-magicpath-path="EstimateSummary.tsx">
                  <div className="flex items-center gap-2" data-magicpath-id="31" data-magicpath-path="EstimateSummary.tsx">
                    <Clock className="w-5 h-5 text-blue-300" data-magicpath-id="32" data-magicpath-path="EstimateSummary.tsx" />
                    <span className="text-lg" data-magicpath-id="33" data-magicpath-path="EstimateSummary.tsx">Total Installation Time</span>
                  </div>
                  <span className="text-xl font-semibold" data-magicpath-id="34" data-magicpath-path="EstimateSummary.tsx">{totalInstallationTime} weeks</span>
                </motion.div>}
              
              {totalLeadTime && totalInstallationTime && <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.4,
            delay: 0.5
          }} className="flex items-center justify-between py-4 bg-purple-800 rounded-lg px-4 mt-6" data-magicpath-id="35" data-magicpath-path="EstimateSummary.tsx">
                  <div className="flex items-center gap-2" data-magicpath-id="36" data-magicpath-path="EstimateSummary.tsx">
                    <Calendar className="w-6 h-6 text-purple-300" data-magicpath-id="37" data-magicpath-path="EstimateSummary.tsx" />
                    <span className="text-xl font-bold" data-magicpath-id="38" data-magicpath-path="EstimateSummary.tsx">Estimated Project Duration</span>
                  </div>
                  <span className="text-2xl font-bold text-purple-300" data-magicpath-id="39" data-magicpath-path="EstimateSummary.tsx">
                    {totalLeadTime + totalInstallationTime} weeks
                  </span>
                </motion.div>}
            </div>}
        </div>
        
        <div className="mt-8 pt-6 border-t border-slate-600" data-magicpath-id="40" data-magicpath-path="EstimateSummary.tsx">
          <p className="text-sm text-blue-200 leading-relaxed" data-magicpath-id="41" data-magicpath-path="EstimateSummary.tsx">
            <strong data-magicpath-id="42" data-magicpath-path="EstimateSummary.tsx">Terms & Conditions:</strong> This estimate is valid for 30 days from the date issued. 
            Final pricing may vary based on material costs, site conditions, and change orders. 
            A 20% deposit is required to commence work. Lead times are estimates and may vary based on supplier availability and project scheduling.
          </p>
          
          <div className="mt-4 text-sm text-blue-200" data-magicpath-id="43" data-magicpath-path="EstimateSummary.tsx">
            <p data-magicpath-id="44" data-magicpath-path="EstimateSummary.tsx"><strong data-magicpath-id="45" data-magicpath-path="EstimateSummary.tsx">Contact:</strong> construction@company.com | (555) 123-4567</p>
            <p data-magicpath-id="46" data-magicpath-path="EstimateSummary.tsx"><strong data-magicpath-id="47" data-magicpath-path="EstimateSummary.tsx">License:</strong> #ABC123456 | <strong data-magicpath-id="48" data-magicpath-path="EstimateSummary.tsx">Bonded & Insured</strong></p>
          </div>
        </div>
      </div>
    </footer>;
};
export default EstimateSummary;
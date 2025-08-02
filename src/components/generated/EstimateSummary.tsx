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
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };
  const formatPercentage = (rate: number) => {
    return `${(rate * 100).toFixed(2)}%`;
  };
  return <footer className="bg-gradient-to-r from-slate-800 to-blue-900 text-white px-4 sm:px-8 py-6 sm:py-8">
      <div className="max-w-4xl ml-auto">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" />
          <h3 className="text-lg sm:text-2xl font-bold">Estimate Summary</h3>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Financial Summary */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-blue-200 mb-3 sm:mb-4">Financial Breakdown</h4>
            
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.4
          }} className="flex items-center justify-between py-2 sm:py-3 border-b border-slate-600">
              <div className="flex items-center gap-2">
                <Receipt className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
                <span className="text-sm sm:text-lg">Subtotal</span>
              </div>
              <span className="text-base sm:text-xl font-semibold">{formatCurrency(subtotal)}</span>
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
          }} className="flex items-center justify-between py-3 border-b border-slate-600">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-300" />
                <span className="text-lg">Tax ({formatPercentage(taxRate)})</span>
              </div>
              <span className="text-xl font-semibold">{formatCurrency(taxAmount)}</span>
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
          }} className="flex items-center justify-between py-4 bg-blue-800 rounded-lg px-4 mt-6">
              <div className="flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-green-300" />
                <span className="text-2xl font-bold">Grand Total</span>
              </div>
              <span className="text-3xl font-bold text-green-300">
                {formatCurrency(grandTotal)}
              </span>
            </motion.div>
          </div>

          {/* Schedule Summary */}
          {(totalLeadTime || totalInstallationTime) && <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-200 mb-4">Project Timeline</h4>
              
              {totalLeadTime && <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.4,
            delay: 0.3
          }} className="flex items-center justify-between py-3 border-b border-slate-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-300" />
                    <span className="text-lg">Maximum Lead Time</span>
                  </div>
                  <span className="text-xl font-semibold">{totalLeadTime} weeks</span>
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
          }} className="flex items-center justify-between py-3 border-b border-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-300" />
                    <span className="text-lg">Total Installation Time</span>
                  </div>
                  <span className="text-xl font-semibold">{totalInstallationTime} weeks</span>
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
          }} className="flex items-center justify-between py-4 bg-purple-800 rounded-lg px-4 mt-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-purple-300" />
                    <span className="text-xl font-bold">Estimated Project Duration</span>
                  </div>
                  <span className="text-2xl font-bold text-purple-300">
                    {totalLeadTime + totalInstallationTime} weeks
                  </span>
                </motion.div>}
            </div>}
        </div>
        
        <div className="mt-8 pt-6 border-t border-slate-600">
          <p className="text-sm text-blue-200 leading-relaxed">
            <strong>Terms & Conditions:</strong> This estimate is valid for 30 days from the date issued. 
            Final pricing may vary based on material costs, site conditions, and change orders. 
            A 20% deposit is required to commence work. Lead times are estimates and may vary based on supplier availability and project scheduling.
          </p>
          
          <div className="mt-4 text-sm text-blue-200">
            <p><strong>Contact:</strong> construction@company.com | (555) 123-4567</p>
            <p><strong>License:</strong> #ABC123456 | <strong>Bonded & Insured</strong></p>
          </div>
        </div>
      </div>
    </footer>;
};
export default EstimateSummary;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DollarSign, Package, Clock, Calendar, AlertTriangle, CheckCircle, FileQuestion, MessageSquare, Users, ChevronDown, ChevronUp } from 'lucide-react';
interface OptionVariant {
  id: string;
  name: string;
  description: string;
  image: string;
  unitCost: number;
  leadTime: number;
  installationTime: number;
  scheduleImpact: 'minimal' | 'moderate' | 'significant';
  hasQuote?: boolean;
  quoteStatus?: 'pending' | 'requested' | 'in-progress';
}
interface LineItem {
  id: string;
  name: string;
  description: string;
  image: string;
  quantity: number;
  unit: string;
  unitCost: number;
  lineTotal: number;
  leadTime?: number;
  installationTime?: number;
  scheduleImpact?: 'minimal' | 'moderate' | 'significant';
  hasOptions?: boolean;
  options?: OptionVariant[];
  selectedOption?: string;
}
interface EstimateSectionProps {
  title: string;
  items: LineItem[];
  subtotal: number;
  hasQuote?: boolean;
  quoteStatus?: 'pending' | 'requested' | 'in-progress';
  expectedQuoteDate?: string;
  workByOthers?: boolean;
  viewMode?: 'compact' | 'detailed';
  onOptionChange?: (itemId: string, optionId: string) => void;
}
const EstimateSection: React.FC<EstimateSectionProps> = ({
  title,
  items,
  subtotal,
  hasQuote = true,
  quoteStatus,
  expectedQuoteDate,
  workByOthers = false,
  viewMode = 'compact',
  onOptionChange
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };
  const getScheduleImpactColor = (impact?: string) => {
    switch (impact) {
      case 'minimal':
        return 'text-green-600 bg-green-50';
      case 'moderate':
        return 'text-yellow-600 bg-yellow-50';
      case 'significant':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };
  const getScheduleImpactIcon = (impact?: string) => {
    switch (impact) {
      case 'minimal':
        return <CheckCircle className="w-4 h-4" />;
      case 'moderate':
        return <Clock className="w-4 h-4" />;
      case 'significant':
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };
  const getQuoteStatusColor = (status?: string) => {
    switch (status) {
      case 'pending':
        return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'requested':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'in-progress':
        return 'text-purple-600 bg-purple-50 border-purple-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };
  const getQuoteStatusIcon = (status?: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'requested':
        return <MessageSquare className="w-4 h-4" />;
      case 'in-progress':
        return <FileQuestion className="w-4 h-4" />;
      default:
        return <FileQuestion className="w-4 h-4" />;
    }
  };
  return <section className="bg-slate-50 rounded-xl p-6">
      <div 
        className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 cursor-pointer hover:bg-slate-50 -mx-6 px-6 py-3 rounded-lg transition-colors gap-3 sm:gap-0"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <Package className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
          <h4 className="text-lg sm:text-xl font-bold text-slate-800">{title}</h4>
          {workByOthers && <div className="flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium text-purple-600 bg-purple-50 border-purple-200">
              <Users className="w-4 h-4" />
              <span>Work by Others</span>
            </div>}
          {!hasQuote && !workByOthers && <div className={`flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium ${getQuoteStatusColor(quoteStatus)}`}>
              {getQuoteStatusIcon(quoteStatus)}
              <span className="capitalize">Quote {quoteStatus}</span>
            </div>}
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="text-right">
            <p className="text-xs sm:text-sm text-slate-500">Section Total</p>
            {workByOthers ? <div>
                <p className="text-lg sm:text-2xl font-bold text-purple-600">By Others</p>
                <p className="text-xs text-slate-500">Schedule Impact Only</p>
              </div> : hasQuote ? <p className="text-lg sm:text-2xl font-bold text-blue-600">{formatCurrency(subtotal)}</p> : <div>
                <p className="text-lg sm:text-2xl font-bold text-slate-400">TBD</p>
                {expectedQuoteDate && <p className="text-xs text-slate-500">Expected: {expectedQuoteDate}</p>}
              </div>}
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 0 : 180 }}
            transition={{ duration: 0.2 }}
            className="text-slate-400"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-6">
              {items.map((item, index) => <motion.article key={item.id} initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.4,
        delay: index * 0.1
      }} className={`bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow ${viewMode === 'compact' ? 'p-3 sm:p-4' : 'p-4 sm:p-6'}`}>
            <div className={`${viewMode === 'detailed' ? 'space-y-4 lg:grid lg:grid-cols-12 lg:gap-6 lg:space-y-0' : 'space-y-3 lg:grid lg:grid-cols-8 lg:gap-4 lg:space-y-0'} items-start`}>
              {viewMode === 'detailed' && (
                <div className="lg:col-span-3">
                  <figure>
                    <img src={item.image} alt={`${item.name} - construction material or service`} className="w-full h-32 object-cover rounded-lg" />
                  </figure>
                </div>
              )}
              
              <div className={viewMode === 'detailed' ? 'lg:col-span-5' : 'lg:col-span-4'}>
                <h5 className="text-base sm:text-lg font-semibold text-slate-800 mb-2">
                  {item.name}
                </h5>
                <p className="text-slate-600 text-sm leading-relaxed mb-3 sm:mb-4">
                  {item.description}
                </p>
                
                {/* Schedule Information */}
                {(item.leadTime || item.installationTime || item.scheduleImpact) && <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
                    {item.leadTime && <div className="flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                        <Calendar className="w-3 h-3" />
                        <span>Lead: {item.leadTime}w</span>
                      </div>}
                    {item.installationTime && <div className="flex items-center gap-1 text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full">
                        <Clock className="w-3 h-3" />
                        <span>Install: {item.installationTime}w</span>
                      </div>}
                    {item.scheduleImpact && <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${getScheduleImpactColor(item.scheduleImpact)}`}>
                        {getScheduleImpactIcon(item.scheduleImpact)}
                        <span className="capitalize">{item.scheduleImpact} Impact</span>
                      </div>}
                  </div>}

                {/* Options Selection */}
                {item.hasOptions && item.options && onOptionChange && <div className="space-y-3">
                    <h6 className="text-sm font-medium text-slate-700">Available Options:</h6>
                    <div className="grid gap-2">
                      {item.options.map(option => <label key={option.id} className={`flex items-start gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${item.selectedOption === option.id ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-slate-300'}`}>
                          <input type="radio" name={`option-${item.id}`} value={option.id} checked={item.selectedOption === option.id} onChange={() => onOptionChange(item.id, option.id)} className="mt-1 text-blue-600" />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <p className="font-medium text-slate-800 text-sm">{option.name}</p>
                              <p className={`font-semibold text-sm ${!option.hasQuote ? 'text-slate-400' : 'text-blue-600'}`}>
                                {!option.hasQuote ? 'TBD' : formatCurrency(option.unitCost)}
                              </p>
                            </div>
                            <p className="text-xs text-slate-600 mb-2">{option.description}</p>
                            <div className="flex gap-2">
                              <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                                Lead: {option.leadTime}w
                              </span>
                              <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">
                                Install: {option.installationTime}w
                              </span>
                              <span className={`text-xs px-2 py-1 rounded capitalize ${getScheduleImpactColor(option.scheduleImpact)}`}>
                                {option.scheduleImpact}
                              </span>
                            </div>
                          </div>
                        </label>)}
                    </div>
                  </div>}
              </div>
              
              <div className={viewMode === 'detailed' ? 'lg:col-span-4' : 'lg:col-span-4'}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 lg:gap-2">
                  <div className="text-left">
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Quantity</p>
                    <p className="font-semibold text-slate-800 text-sm sm:text-base">
                      {formatNumber(item.quantity)} {item.unit}
                    </p>
                  </div>
                  
                  <div className="text-left">
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Unit Cost</p>
                    <p className="font-semibold text-slate-800 text-sm sm:text-base">
                      {workByOthers ? 'By Others' : hasQuote ? formatCurrency(item.unitCost) : 'TBD'}
                    </p>
                  </div>
                  
                  <div className="col-span-1 sm:col-span-2 lg:col-span-1 text-left">
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Line Total</p>
                    <div className="flex items-center gap-1 justify-start">
                      {workByOthers ? <>
                          <Users className="w-4 h-4 text-purple-600" />
                          <p className="text-lg sm:text-xl font-bold text-purple-600">By Others</p>
                        </> : hasQuote ? <>
                          <DollarSign className="w-4 h-4 text-green-600" />
                          <p className="text-lg sm:text-xl font-bold text-green-600">
                            {formatCurrency(item.lineTotal).replace('$', '')}
                          </p>
                        </> : <>
                          <FileQuestion className="w-4 h-4 text-slate-400" />
                          <p className="text-lg sm:text-xl font-bold text-slate-400">TBD</p>
                        </>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>;
};
export default EstimateSection;
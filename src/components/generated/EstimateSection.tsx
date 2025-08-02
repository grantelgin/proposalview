import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Package, Clock, Calendar, AlertTriangle, CheckCircle } from 'lucide-react';
interface OptionVariant {
  id: string;
  name: string;
  description: string;
  image: string;
  unitCost: number;
  leadTime: number;
  installationTime: number;
  scheduleImpact: 'minimal' | 'moderate' | 'significant';
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
  onOptionChange?: (itemId: string, optionId: string) => void;
}
const EstimateSection: React.FC<EstimateSectionProps> = ({
  title,
  items,
  subtotal,
  onOptionChange
}) => {
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
  return <section className="bg-slate-50 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Package className="w-6 h-6 text-blue-600" />
          <h4 className="text-xl font-bold text-slate-800">{title}</h4>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-500">Section Total</p>
          <p className="text-2xl font-bold text-blue-600">{formatCurrency(subtotal)}</p>
        </div>
      </div>
      
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
      }} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="grid lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-3">
                <figure>
                  <img src={item.image} alt={`${item.name} - construction material or service`} className="w-full h-32 object-cover rounded-lg" />
                </figure>
              </div>
              
              <div className="lg:col-span-5">
                <h5 className="text-lg font-semibold text-slate-800 mb-2">
                  {item.name}
                </h5>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                
                {/* Schedule Information */}
                {(item.leadTime || item.installationTime || item.scheduleImpact) && <div className="flex flex-wrap gap-3 mb-4">
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
                              <p className="font-semibold text-blue-600 text-sm">{formatCurrency(option.unitCost)}</p>
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
              
              <div className="lg:col-span-4">
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-2">
                  <div className="text-center lg:text-left">
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Quantity</p>
                    <p className="font-semibold text-slate-800">
                      {formatNumber(item.quantity)} {item.unit}
                    </p>
                  </div>
                  
                  <div className="text-center lg:text-left">
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Unit Cost</p>
                    <p className="font-semibold text-slate-800">
                      {formatCurrency(item.unitCost)}
                    </p>
                  </div>
                  
                  <div className="col-span-2 lg:col-span-1 text-center lg:text-left">
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Line Total</p>
                    <div className="flex items-center gap-1 justify-center lg:justify-start">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <p className="text-xl font-bold text-green-600">
                        {formatCurrency(item.lineTotal).replace('$', '')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>)}
      </div>
    </section>;
};
export default EstimateSection;
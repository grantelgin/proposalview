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
  mpid?: string;
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
  mpid?: string;
}
interface EstimateSectionProps {
  title: string;
  items: LineItem[];
  subtotal: number;
  onOptionChange?: (itemId: string, optionId: string) => void;
  mpid?: string;
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
        return <CheckCircle className="w-4 h-4" data-magicpath-id="0" data-magicpath-path="EstimateSection.tsx" />;
      case 'moderate':
        return <Clock className="w-4 h-4" data-magicpath-id="1" data-magicpath-path="EstimateSection.tsx" />;
      case 'significant':
        return <AlertTriangle className="w-4 h-4" data-magicpath-id="2" data-magicpath-path="EstimateSection.tsx" />;
      default:
        return <Clock className="w-4 h-4" data-magicpath-id="3" data-magicpath-path="EstimateSection.tsx" />;
    }
  };
  return <section className="bg-slate-50 rounded-xl p-6" data-magicpath-id="4" data-magicpath-path="EstimateSection.tsx">
      <div className="flex items-center justify-between mb-6" data-magicpath-id="5" data-magicpath-path="EstimateSection.tsx">
        <div className="flex items-center gap-3" data-magicpath-id="6" data-magicpath-path="EstimateSection.tsx">
          <Package className="w-6 h-6 text-blue-600" data-magicpath-id="7" data-magicpath-path="EstimateSection.tsx" />
          <h4 className="text-xl font-bold text-slate-800" data-magicpath-id="8" data-magicpath-path="EstimateSection.tsx">{title}</h4>
        </div>
        <div className="text-right" data-magicpath-id="9" data-magicpath-path="EstimateSection.tsx">
          <p className="text-sm text-slate-500" data-magicpath-id="10" data-magicpath-path="EstimateSection.tsx">Section Total</p>
          <p className="text-2xl font-bold text-blue-600" data-magicpath-id="11" data-magicpath-path="EstimateSection.tsx">{formatCurrency(subtotal)}</p>
        </div>
      </div>
      
      <div className="space-y-6" data-magicpath-id="12" data-magicpath-path="EstimateSection.tsx">
        {items.map((item, index) => <motion.article key={item.id} initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.4,
        delay: index * 0.1
      }} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="EstimateSection.tsx">
            <div className="grid lg:grid-cols-12 gap-6 items-start" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="EstimateSection.tsx">
              <div className="lg:col-span-3" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="15" data-magicpath-path="EstimateSection.tsx">
                <figure data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="16" data-magicpath-path="EstimateSection.tsx">
                  <img src={item.image} alt={`${item.name} - construction material or service`} className="w-full h-32 object-cover rounded-lg" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="17" data-magicpath-path="EstimateSection.tsx" />
                </figure>
              </div>
              
              <div className="lg:col-span-5" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="18" data-magicpath-path="EstimateSection.tsx">
                <h5 className="text-lg font-semibold text-slate-800 mb-2" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="19" data-magicpath-path="EstimateSection.tsx">
                  {item.name}
                </h5>
                <p className="text-slate-600 text-sm leading-relaxed mb-4" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="20" data-magicpath-path="EstimateSection.tsx">
                  {item.description}
                </p>
                
                {/* Schedule Information */}
                {(item.leadTime || item.installationTime || item.scheduleImpact) && <div className="flex flex-wrap gap-3 mb-4" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="EstimateSection.tsx">
                    {item.leadTime && <div className="flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="EstimateSection.tsx">
                        <Calendar className="w-3 h-3" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="EstimateSection.tsx" />
                        <span data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="leadTime:unknown" data-magicpath-id="24" data-magicpath-path="EstimateSection.tsx">Lead: {item.leadTime}w</span>
                      </div>}
                    {item.installationTime && <div className="flex items-center gap-1 text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="25" data-magicpath-path="EstimateSection.tsx">
                        <Clock className="w-3 h-3" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="26" data-magicpath-path="EstimateSection.tsx" />
                        <span data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="installationTime:unknown" data-magicpath-id="27" data-magicpath-path="EstimateSection.tsx">Install: {item.installationTime}w</span>
                      </div>}
                    {item.scheduleImpact && <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${getScheduleImpactColor(item.scheduleImpact)}`} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="scheduleImpact:unknown" data-magicpath-id="28" data-magicpath-path="EstimateSection.tsx">
                        {getScheduleImpactIcon(item.scheduleImpact)}
                        <span className="capitalize" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="scheduleImpact:unknown" data-magicpath-id="29" data-magicpath-path="EstimateSection.tsx">{item.scheduleImpact} Impact</span>
                      </div>}
                  </div>}

                {/* Options Selection */}
                {item.hasOptions && item.options && onOptionChange && <div className="space-y-3" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="30" data-magicpath-path="EstimateSection.tsx">
                    <h6 className="text-sm font-medium text-slate-700" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="31" data-magicpath-path="EstimateSection.tsx">Available Options:</h6>
                    <div className="grid gap-2" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="32" data-magicpath-path="EstimateSection.tsx">
                      {item.options.map(option => <label key={option.id} className={`flex items-start gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${item.selectedOption === option.id ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-slate-300'}`} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="33" data-magicpath-path="EstimateSection.tsx">
                          <input type="radio" name={`option-${item.id}`} value={option.id} checked={item.selectedOption === option.id} onChange={() => onOptionChange(item.id, option.id)} className="mt-1 text-blue-600" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="34" data-magicpath-path="EstimateSection.tsx" />
                          <div className="flex-1 min-w-0" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="35" data-magicpath-path="EstimateSection.tsx">
                            <div className="flex items-center justify-between mb-1" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="36" data-magicpath-path="EstimateSection.tsx">
                              <p className="font-medium text-slate-800 text-sm" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="37" data-magicpath-path="EstimateSection.tsx">{option.name}</p>
                              <p className="font-semibold text-blue-600 text-sm" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="38" data-magicpath-path="EstimateSection.tsx">{formatCurrency(option.unitCost)}</p>
                            </div>
                            <p className="text-xs text-slate-600 mb-2" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="39" data-magicpath-path="EstimateSection.tsx">{option.description}</p>
                            <div className="flex gap-2" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="40" data-magicpath-path="EstimateSection.tsx">
                              <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="41" data-magicpath-path="EstimateSection.tsx">
                                Lead: {option.leadTime}w
                              </span>
                              <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="42" data-magicpath-path="EstimateSection.tsx">
                                Install: {option.installationTime}w
                              </span>
                              <span className={`text-xs px-2 py-1 rounded capitalize ${getScheduleImpactColor(option.scheduleImpact)}`} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="43" data-magicpath-path="EstimateSection.tsx">
                                {option.scheduleImpact}
                              </span>
                            </div>
                          </div>
                        </label>)}
                    </div>
                  </div>}
              </div>
              
              <div className="lg:col-span-4" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="44" data-magicpath-path="EstimateSection.tsx">
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-2" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="45" data-magicpath-path="EstimateSection.tsx">
                  <div className="text-center lg:text-left" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="46" data-magicpath-path="EstimateSection.tsx">
                    <p className="text-xs text-slate-500 uppercase tracking-wide" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="47" data-magicpath-path="EstimateSection.tsx">Quantity</p>
                    <p className="font-semibold text-slate-800" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="quantity:unknown,unit:unknown" data-magicpath-id="48" data-magicpath-path="EstimateSection.tsx">
                      {formatNumber(item.quantity)} {item.unit}
                    </p>
                  </div>
                  
                  <div className="text-center lg:text-left" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="49" data-magicpath-path="EstimateSection.tsx">
                    <p className="text-xs text-slate-500 uppercase tracking-wide" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="50" data-magicpath-path="EstimateSection.tsx">Unit Cost</p>
                    <p className="font-semibold text-slate-800" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="unitCost:unknown" data-magicpath-id="51" data-magicpath-path="EstimateSection.tsx">
                      {formatCurrency(item.unitCost)}
                    </p>
                  </div>
                  
                  <div className="col-span-2 lg:col-span-1 text-center lg:text-left" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="52" data-magicpath-path="EstimateSection.tsx">
                    <p className="text-xs text-slate-500 uppercase tracking-wide" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="53" data-magicpath-path="EstimateSection.tsx">Line Total</p>
                    <div className="flex items-center gap-1 justify-center lg:justify-start" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="54" data-magicpath-path="EstimateSection.tsx">
                      <DollarSign className="w-4 h-4 text-green-600" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="55" data-magicpath-path="EstimateSection.tsx" />
                      <p className="text-xl font-bold text-green-600" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="56" data-magicpath-path="EstimateSection.tsx">
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
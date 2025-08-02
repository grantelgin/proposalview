import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Package } from 'lucide-react';
interface LineItem {
  id: string;
  name: string;
  description: string;
  image: string;
  quantity: number;
  unit: string;
  unitCost: number;
  lineTotal: number;
  mpid?: string;
}
interface EstimateSectionProps {
  title: string;
  items: LineItem[];
  subtotal: number;
  mpid?: string;
}
const EstimateSection: React.FC<EstimateSectionProps> = ({
  title,
  items,
  subtotal
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
  return <section className="bg-slate-50 rounded-xl p-6" data-magicpath-id="0" data-magicpath-path="EstimateSection.tsx">
      <div className="flex items-center justify-between mb-6" data-magicpath-id="1" data-magicpath-path="EstimateSection.tsx">
        <div className="flex items-center gap-3" data-magicpath-id="2" data-magicpath-path="EstimateSection.tsx">
          <Package className="w-6 h-6 text-blue-600" data-magicpath-id="3" data-magicpath-path="EstimateSection.tsx" />
          <h4 className="text-xl font-bold text-slate-800" data-magicpath-id="4" data-magicpath-path="EstimateSection.tsx">{title}</h4>
        </div>
        <div className="text-right" data-magicpath-id="5" data-magicpath-path="EstimateSection.tsx">
          <p className="text-sm text-slate-500" data-magicpath-id="6" data-magicpath-path="EstimateSection.tsx">Section Total</p>
          <p className="text-2xl font-bold text-blue-600" data-magicpath-id="7" data-magicpath-path="EstimateSection.tsx">{formatCurrency(subtotal)}</p>
        </div>
      </div>
      
      <div className="space-y-4" data-magicpath-id="8" data-magicpath-path="EstimateSection.tsx">
        {items.map((item, index) => <motion.article key={item.id} initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.4,
        delay: index * 0.1
      }} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="EstimateSection.tsx">
            <div className="grid lg:grid-cols-12 gap-6 items-center" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="EstimateSection.tsx">
              <div className="lg:col-span-3" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="EstimateSection.tsx">
                <figure data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="EstimateSection.tsx">
                  <img src={item.image} alt={`${item.name} - construction material or service`} className="w-full h-32 object-cover rounded-lg" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="13" data-magicpath-path="EstimateSection.tsx" />
                </figure>
              </div>
              
              <div className="lg:col-span-5" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="EstimateSection.tsx">
                <h5 className="text-lg font-semibold text-slate-800 mb-2" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="15" data-magicpath-path="EstimateSection.tsx">
                  {item.name}
                </h5>
                <p className="text-slate-600 text-sm leading-relaxed" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="16" data-magicpath-path="EstimateSection.tsx">
                  {item.description}
                </p>
              </div>
              
              <div className="lg:col-span-4" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="EstimateSection.tsx">
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-2" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="18" data-magicpath-path="EstimateSection.tsx">
                  <div className="text-center lg:text-left" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="19" data-magicpath-path="EstimateSection.tsx">
                    <p className="text-xs text-slate-500 uppercase tracking-wide" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="20" data-magicpath-path="EstimateSection.tsx">Quantity</p>
                    <p className="font-semibold text-slate-800" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="quantity:unknown,unit:unknown" data-magicpath-id="21" data-magicpath-path="EstimateSection.tsx">
                      {formatNumber(item.quantity)} {item.unit}
                    </p>
                  </div>
                  
                  <div className="text-center lg:text-left" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="EstimateSection.tsx">
                    <p className="text-xs text-slate-500 uppercase tracking-wide" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="EstimateSection.tsx">Unit Cost</p>
                    <p className="font-semibold text-slate-800" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="unitCost:unknown" data-magicpath-id="24" data-magicpath-path="EstimateSection.tsx">
                      {formatCurrency(item.unitCost)}
                    </p>
                  </div>
                  
                  <div className="col-span-2 lg:col-span-1 text-center lg:text-left" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="25" data-magicpath-path="EstimateSection.tsx">
                    <p className="text-xs text-slate-500 uppercase tracking-wide" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="26" data-magicpath-path="EstimateSection.tsx">Line Total</p>
                    <div className="flex items-center gap-1 justify-center lg:justify-start" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="27" data-magicpath-path="EstimateSection.tsx">
                      <DollarSign className="w-4 h-4 text-green-600" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="28" data-magicpath-path="EstimateSection.tsx" />
                      <p className="text-xl font-bold text-green-600" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="29" data-magicpath-path="EstimateSection.tsx">
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
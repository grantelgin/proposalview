import React from 'react';
import { Building2, Calendar, FileText, MapPin } from 'lucide-react';
interface EstimateHeaderProps {
  projectTitle: string;
  clientName: string;
  clientAddress: string;
  estimateId: string;
  estimateDate: string;
  mpid?: string;
}
const EstimateHeader: React.FC<EstimateHeaderProps> = ({
  projectTitle,
  clientName,
  clientAddress,
  estimateId,
  estimateDate
}) => {
  return <header className="bg-gradient-to-r from-blue-900 to-slate-800 text-white px-8 py-10" data-magicpath-id="0" data-magicpath-path="EstimateHeader.tsx">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6" data-magicpath-id="1" data-magicpath-path="EstimateHeader.tsx">
        <div className="flex-1" data-magicpath-id="2" data-magicpath-path="EstimateHeader.tsx">
          <div className="flex items-center gap-3 mb-4" data-magicpath-id="3" data-magicpath-path="EstimateHeader.tsx">
            <Building2 className="w-8 h-8 text-blue-300" data-magicpath-id="4" data-magicpath-path="EstimateHeader.tsx" />
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight" data-magicpath-id="5" data-magicpath-path="EstimateHeader.tsx">
              Construction Estimate
            </h1>
          </div>
          
          <h2 className="text-xl lg:text-2xl font-semibold text-blue-100 mb-4" data-magicpath-id="6" data-magicpath-path="EstimateHeader.tsx">
            {projectTitle}
          </h2>
          
          <div className="space-y-2 text-blue-100" data-magicpath-id="7" data-magicpath-path="EstimateHeader.tsx">
            <div className="flex items-center gap-2" data-magicpath-id="8" data-magicpath-path="EstimateHeader.tsx">
              <Building2 className="w-4 h-4" data-magicpath-id="9" data-magicpath-path="EstimateHeader.tsx" />
              <span className="font-medium" data-magicpath-id="10" data-magicpath-path="EstimateHeader.tsx">{clientName}</span>
            </div>
            <div className="flex items-start gap-2" data-magicpath-id="11" data-magicpath-path="EstimateHeader.tsx">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" data-magicpath-id="12" data-magicpath-path="EstimateHeader.tsx" />
              <address className="not-italic" data-magicpath-id="13" data-magicpath-path="EstimateHeader.tsx">{clientAddress}</address>
            </div>
          </div>
        </div>
        
        <div className="lg:text-right space-y-3" data-magicpath-id="14" data-magicpath-path="EstimateHeader.tsx">
          <div className="flex items-center gap-2 lg:justify-end" data-magicpath-id="15" data-magicpath-path="EstimateHeader.tsx">
            <FileText className="w-5 h-5 text-blue-300" data-magicpath-id="16" data-magicpath-path="EstimateHeader.tsx" />
            <div data-magicpath-id="17" data-magicpath-path="EstimateHeader.tsx">
              <p className="text-sm text-blue-200" data-magicpath-id="18" data-magicpath-path="EstimateHeader.tsx">Estimate ID</p>
              <p className="font-semibold text-lg" data-magicpath-id="19" data-magicpath-path="EstimateHeader.tsx">{estimateId}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 lg:justify-end" data-magicpath-id="20" data-magicpath-path="EstimateHeader.tsx">
            <Calendar className="w-5 h-5 text-blue-300" data-magicpath-id="21" data-magicpath-path="EstimateHeader.tsx" />
            <div data-magicpath-id="22" data-magicpath-path="EstimateHeader.tsx">
              <p className="text-sm text-blue-200" data-magicpath-id="23" data-magicpath-path="EstimateHeader.tsx">Date</p>
              <p className="font-semibold" data-magicpath-id="24" data-magicpath-path="EstimateHeader.tsx">{estimateDate}</p>
            </div>
          </div>
        </div>
      </div>
    </header>;
};
export default EstimateHeader;
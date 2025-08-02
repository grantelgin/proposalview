import React from 'react';
import { Building2, Calendar, FileText, MapPin } from 'lucide-react';
interface EstimateHeaderProps {
  projectTitle: string;
  clientName: string;
  clientAddress: string;
  estimateId: string;
  estimateDate: string;
}
const EstimateHeader: React.FC<EstimateHeaderProps> = ({
  projectTitle,
  clientName,
  clientAddress,
  estimateId,
  estimateDate
}) => {
  return <header className="bg-gradient-to-r from-blue-900 to-slate-800 text-white px-8 py-10">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-8 h-8 text-blue-300" />
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
              Construction Estimate
            </h1>
          </div>
          
          <h2 className="text-xl lg:text-2xl font-semibold text-blue-100 mb-4">
            {projectTitle}
          </h2>
          
          <div className="space-y-2 text-blue-100">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              <span className="font-medium">{clientName}</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <address className="not-italic">{clientAddress}</address>
            </div>
          </div>
        </div>
        
        <div className="lg:text-right space-y-3">
          <div className="flex items-center gap-2 lg:justify-end">
            <FileText className="w-5 h-5 text-blue-300" />
            <div>
              <p className="text-sm text-blue-200">Estimate ID</p>
              <p className="font-semibold text-lg">{estimateId}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 lg:justify-end">
            <Calendar className="w-5 h-5 text-blue-300" />
            <div>
              <p className="text-sm text-blue-200">Date</p>
              <p className="font-semibold">{estimateDate}</p>
            </div>
          </div>
        </div>
      </div>
    </header>;
};
export default EstimateHeader;
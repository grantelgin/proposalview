import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EstimateHeader from './EstimateHeader';
import ProjectOverviewSection from './ProjectOverviewSection';
import EstimateSection from './EstimateSection';
import EstimateSummary from './EstimateSummary';
interface OptionVariant {
  id: string;
  name: string;
  description: string;
  image: string;
  unitCost: number;
  leadTime: number; // in weeks
  installationTime: number; // in weeks
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
interface EstimateSectionData {
  id: string;
  title: string;
  items: LineItem[];
  subtotal: number;
}
interface EstimateData {
  projectTitle: string;
  clientName: string;
  clientAddress: string;
  estimateId: string;
  estimateDate: string;
  projectDescription: string;
  projectImage: string;
  sections: EstimateSectionData[];
  subtotal: number;
  taxRate: number;
  taxAmount: number;
  grandTotal: number;
  totalLeadTime: number;
  totalInstallationTime: number;
}
const mockEstimateData: EstimateData = {
  projectTitle: "Luxury Commercial Office Building",
  clientName: "Metropolitan Development Corp",
  clientAddress: "1234 Business District, Downtown City, ST 12345",
  estimateId: "EST-2024-001",
  estimateDate: "March 15, 2024",
  projectDescription: "Complete construction of a 5-story luxury commercial office building with modern amenities, underground parking, and premium finishes throughout.",
  projectImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop",
  sections: [{
    id: "structural",
    title: "Structural System",
    subtotal: 285000,
    items: [{
      id: "framing-system",
      name: "Building Frame Structure",
      description: "Primary structural system for the 5-story building",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&h=200&fit=crop",
      quantity: 1,
      unit: "complete system",
      unitCost: 285000,
      lineTotal: 285000,
      hasOptions: true,
      selectedOption: "steel-frame",
      options: [{
        id: "wood-truss",
        name: "Wood Truss System",
        description: "Engineered wood trusses with laminated beams and traditional framing",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop",
        unitCost: 245000,
        leadTime: 8,
        installationTime: 6,
        scheduleImpact: 'minimal'
      }, {
        id: "steel-frame",
        name: "Steel Frame System",
        description: "Structural steel framing with beams, columns, and connections",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&h=200&fit=crop",
        unitCost: 285000,
        leadTime: 12,
        installationTime: 4,
        scheduleImpact: 'moderate'
      }]
    }]
  }, {
    id: "exterior",
    title: "Exterior & Envelope",
    subtotal: 195000,
    items: [{
      id: "exterior-siding",
      name: "Exterior Siding System",
      description: "Complete exterior wall cladding system",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=200&fit=crop",
      quantity: 8500,
      unit: "sq ft",
      unitCost: 18,
      lineTotal: 153000,
      hasOptions: true,
      selectedOption: "steel-siding",
      options: [{
        id: "steel-siding",
        name: "Steel Panel Siding",
        description: "Insulated steel panels with weather-resistant coating",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=200&fit=crop",
        unitCost: 18,
        leadTime: 6,
        installationTime: 3,
        scheduleImpact: 'minimal'
      }, {
        id: "hardiboard-siding",
        name: "HardiBoard Fiber Cement",
        description: "Durable fiber cement siding with premium finish options",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
        unitCost: 22,
        leadTime: 4,
        installationTime: 5,
        scheduleImpact: 'moderate'
      }]
    }, {
      id: "roofing-system",
      name: "Premium Roofing System",
      description: "Complete roofing system with color options",
      image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=300&h=200&fit=crop",
      quantity: 12000,
      unit: "sq ft",
      unitCost: 3.5,
      lineTotal: 42000,
      hasOptions: true,
      selectedOption: "charcoal-gray",
      options: [{
        id: "charcoal-gray",
        name: "Charcoal Gray TPO",
        description: "Professional charcoal gray membrane roofing",
        image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=300&h=200&fit=crop",
        unitCost: 3.5,
        leadTime: 3,
        installationTime: 2,
        scheduleImpact: 'minimal'
      }, {
        id: "slate-blue",
        name: "Slate Blue TPO",
        description: "Premium slate blue membrane with enhanced UV protection",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop",
        unitCost: 4.2,
        leadTime: 4,
        installationTime: 2,
        scheduleImpact: 'minimal'
      }, {
        id: "terra-cotta",
        name: "Terra Cotta TPO",
        description: "Warm terra cotta color with superior weather resistance",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=200&fit=crop",
        unitCost: 4.0,
        leadTime: 5,
        installationTime: 2,
        scheduleImpact: 'minimal'
      }]
    }]
  }, {
    id: "site-work",
    title: "Site Work & Preparation",
    subtotal: 125000,
    items: [{
      id: "excavation",
      name: "Site Excavation",
      description: "Complete site excavation including topsoil removal, grading, and preparation for foundation work",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop",
      quantity: 2500,
      unit: "cubic yards",
      unitCost: 35,
      lineTotal: 87500,
      leadTime: 2,
      installationTime: 3,
      scheduleImpact: 'minimal'
    }, {
      id: "utilities",
      name: "Utility Connections",
      description: "Water, sewer, electrical, and gas line connections to municipal services",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&h=200&fit=crop",
      quantity: 1,
      unit: "lot",
      unitCost: 37500,
      lineTotal: 37500,
      leadTime: 6,
      installationTime: 4,
      scheduleImpact: 'moderate'
    }]
  }],
  subtotal: 605000,
  taxRate: 0.0875,
  taxAmount: 52937.50,
  grandTotal: 657937.50,
  totalLeadTime: 12,
  totalInstallationTime: 18
};
const ConstructionEstimate: React.FC = () => {
  const [estimateData, setEstimateData] = useState<EstimateData>(mockEstimateData);
  const handleOptionChange = (sectionId: string, itemId: string, optionId: string) => {
    setEstimateData(prev => {
      const newData = {
        ...prev
      };
      const section = newData.sections.find(s => s.id === sectionId);
      if (section) {
        const item = section.items.find(i => i.id === itemId);
        if (item && item.options) {
          const selectedOption = item.options.find(o => o.id === optionId);
          if (selectedOption) {
            item.selectedOption = optionId;
            item.unitCost = selectedOption.unitCost;
            item.lineTotal = item.quantity * selectedOption.unitCost;
            item.image = selectedOption.image;
            item.description = selectedOption.description;
            item.leadTime = selectedOption.leadTime;
            item.installationTime = selectedOption.installationTime;
            item.scheduleImpact = selectedOption.scheduleImpact;

            // Recalculate section subtotal
            section.subtotal = section.items.reduce((sum, i) => sum + i.lineTotal, 0);
          }
        }
      }

      // Recalculate totals
      newData.subtotal = newData.sections.reduce((sum, s) => sum + s.subtotal, 0);
      newData.taxAmount = newData.subtotal * newData.taxRate;
      newData.grandTotal = newData.subtotal + newData.taxAmount;

      // Recalculate schedule
      const allItems = newData.sections.flatMap(s => s.items);
      newData.totalLeadTime = Math.max(...allItems.map(i => i.leadTime || 0));
      newData.totalInstallationTime = allItems.reduce((sum, i) => sum + (i.installationTime || 0), 0);
      return newData;
    });
  };
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <EstimateHeader projectTitle={estimateData.projectTitle} clientName={estimateData.clientName} clientAddress={estimateData.clientAddress} estimateId={estimateData.estimateId} estimateDate={estimateData.estimateDate} />
          
          <ProjectOverviewSection description={estimateData.projectDescription} image={estimateData.projectImage} />
          
          <div className="px-8 py-6 space-y-8">
            {estimateData.sections.map((section, index) => <motion.div key={section.id} initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }}>
                <EstimateSection title={section.title} items={section.items} subtotal={section.subtotal} onOptionChange={(itemId, optionId) => handleOptionChange(section.id, itemId, optionId)} />
              </motion.div>)}
          </div>
          
          <EstimateSummary subtotal={estimateData.subtotal} taxRate={estimateData.taxRate} taxAmount={estimateData.taxAmount} grandTotal={estimateData.grandTotal} totalLeadTime={estimateData.totalLeadTime} totalInstallationTime={estimateData.totalInstallationTime} />
        </motion.div>
      </div>
    </div>;
};
export default ConstructionEstimate;
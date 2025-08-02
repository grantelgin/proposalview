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
  conditionalPricing?: {
    dependsOnItem: string;
    dependsOnOption: string;
    alternativeCost: number;
    alternativeDescription?: string;
  };
}
interface EstimateSectionData {
  id: string;
  title: string;
  items: LineItem[];
  subtotal: number;
  hasQuote?: boolean;
  quoteStatus?: 'pending' | 'requested' | 'in-progress';
  expectedQuoteDate?: string;
  workByOthers?: boolean;
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
  projectDescription: "Comprehensive construction of a professional recording studio complex featuring a central 70' x 37' live performance and stage area with soaring clear-span ceilings (29'8\" at stage elevation, 35'7\" at live area). The facility includes a mezzanine balcony spanning the 37' width along the rear of the live space. Wing A (60' x 20') houses ground-floor recording booths with second-floor residential quarters including bedrooms and full bathrooms. Wing C (60' x 54') accommodates the control room, recreational amenities including golf simulator and billiard area, ground-floor lounge with powder room, and vertical circulation to the upper level. The second floor of Wing C features a full kitchen/bar facility, upper lounge, and additional bedroom suites with private bathrooms.",
  projectImage: "/iso.png",
  sections: [{
    id: "site-work",
    title: "Site Work & Preparation",
    subtotal: 0,
    workByOthers: true,
    items: [{
      id: "site-preparation",
      name: "Site Preparation & Grading",
      description: "Complete site preparation including clearing, excavation, grading, and foundation preparation for recording studio complex. Includes utility rough-ins and site drainage systems.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop",
      quantity: 1,
      unit: "complete site",
      unitCost: 0,
      lineTotal: 0,
      leadTime: 3,
      installationTime: 4,
      scheduleImpact: 'significant'
    }, {
      id: "utilities-infrastructure",
      name: "Utilities & Infrastructure",
      description: "Primary electrical service, water, sewer, gas connections, and telecommunications infrastructure. Includes specialized power requirements for studio equipment.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&h=200&fit=crop",
      quantity: 1,
      unit: "complete utilities",
      unitCost: 0,
      lineTotal: 0,
      leadTime: 4,
      installationTime: 3,
      scheduleImpact: 'moderate'
    }]
  }, {
    id: "concrete-foundation",
    title: "Concrete Foundation & Slabs",
    subtotal: 0,
    workByOthers: true,
    items: [{
      id: "foundation-system",
      name: "Foundation System",
      description: "Reinforced concrete foundation system with specialized footings for acoustic isolation and heavy equipment loads. Includes basement/lower level construction with proper drainage systems.",
      image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1b?w=300&h=200&fit=crop",
      quantity: 1,
      unit: "complete foundation",
      unitCost: 0,
      lineTotal: 0,
      leadTime: 2,
      installationTime: 6,
      scheduleImpact: 'significant'
    }, {
      id: "concrete-slabs",
      name: "Concrete Floor Slabs",
      description: "Reinforced concrete floor slabs for ground level, basement, and mezzanine areas. Includes vapor barriers, insulation, and provisions for in-floor utilities and acoustic isolation.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
      quantity: 1,
      unit: "complete slab system",
      unitCost: 0,
      lineTotal: 0,
      leadTime: 1,
      installationTime: 4,
      scheduleImpact: 'moderate'
    }]
  }, {
    id: "structural",
    title: "Structural System",
    subtotal: 354430,
    items: [{
      id: "building-frame",
      name: "Building Frame Structure",
      description: "Primary structural framing system for the recording studio complex including steel support columns and beams for clear-span, column-free live/stage area",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&h=200&fit=crop",
      quantity: 1,
      unit: "complete system",
      unitCost: 166550,
      lineTotal: 166550,
      hasOptions: true,
      selectedOption: "wood-truss-wbc",
      options: [{
        id: "wood-truss-wbc",
        name: "Wood Truss System (WBC)",
        description: "Engineered wood truss system with steel support columns and beams. Allows for clear-span, column-free area in the Live/Stage area. Materials provided by WBC.",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop",
        unitCost: 166550,
        leadTime: 8,
        installationTime: 3,
        scheduleImpact: 'moderate'
      }, {
        id: "steel-frame-allied",
        name: "Steel Frame System (Allied Steel)",
        description: "All steel construction system manufactured by Allied Steel. Includes the mezzanine framing with complete structural steel package.",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&h=200&fit=crop",
        unitCost: 575750,
        leadTime: 13,
        installationTime: 4,
        scheduleImpact: 'significant'
      }]
    }, {
      id: "second-floor-framing",
      name: "Second Floor Framing & Staircase",
      description: "Engineered wood mezzanine on steel supports with minimal interior columns. Required when wood truss system is selected.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=200&fit=crop",
      quantity: 1,
      unit: "complete framing",
      unitCost: 102520,
      lineTotal: 102520,
      leadTime: 0,
      installationTime: 2,
      scheduleImpact: 'minimal',
      conditionalPricing: {
        dependsOnItem: "building-frame",
        dependsOnOption: "wood-truss-wbc",
        alternativeCost: 102520,
        alternativeDescription: "Engineered wood mezzanine on steel supports with minimal interior columns. Required when wood truss system is selected."
      }
    }, {
      id: "wall-framing",
      name: "Wall Framing Structure",
      description: "Wood framing system provided by WBC including interior and exterior wall framing, load-bearing walls, partition walls, and specialized acoustic wall construction for recording areas. Includes exterior wall insulation.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      quantity: 1,
      unit: "complete wall system",
      unitCost: 85360,
      lineTotal: 85360,
      leadTime: 0,
      installationTime: 3,
      scheduleImpact: 'moderate'
    }]
  }, {
    id: "exterior",
    title: "Exterior & Envelope",
    subtotal: 270095,
    items: [{
      id: "exterior-siding",
      name: "Exterior Siding System",
      description: "Complete exterior wall cladding system for recording studio complex",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      quantity: 1,
      unit: "complete system",
      unitCost: 151990,
      lineTotal: 151990,
      hasOptions: true,
      selectedOption: "hardiboard-siding",
      options: [{
        id: "hardiboard-siding",
        name: "HardiBoard Fiber Cement System",
        description: "Durable fiber cement siding with premium finish options and weather-resistant properties",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
        unitCost: 151990,
        leadTime: 0,
        installationTime: 2,
        scheduleImpact: 'minimal',
        hasQuote: true
      }, {
        id: "steel-siding",
        name: "Steel Panel Siding System",
        description: "Insulated steel panels with weather-resistant coating. Quote not yet requested.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=200&fit=crop",
        unitCost: 0,
        leadTime: 4,
        installationTime: 0,
        scheduleImpact: 'minimal',
        hasQuote: false,
        quoteStatus: 'pending'
      }]
    }, {
      id: "roofing-system",
      name: "Standing Seam Roof System",
      description: "Standing seam metal roofing system provided by True Metal with R-36 insulation package",
      image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=300&h=200&fit=crop",
      quantity: 1,
      unit: "complete system",
      unitCost: 118105,
      lineTotal: 118105,
      leadTime: 5,
      installationTime: 3,
      scheduleImpact: 'moderate'
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
  }, {
    id: "cabinetry",
    title: "Custom Cabinetry & Millwork",
    subtotal: 0,
    hasQuote: false,
    quoteStatus: 'requested',
    expectedQuoteDate: 'March 25, 2024',
    items: [{
      id: "studio-millwork",
      name: "Recording Studio Millwork",
      description: "Custom hardwood millwork for control room including built-in equipment racks, cable management systems, and acoustically designed cabinetry",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop",
      quantity: 1,
      unit: "complete system",
      unitCost: 0,
      lineTotal: 0,
      leadTime: 10,
      installationTime: 4,
      scheduleImpact: 'moderate'
    }, {
      id: "live-room-treatments",
      name: "Live Room Acoustic Treatments",
      description: "Custom built acoustic panels, sound baffles, and moveable partitions with premium wood finish for the live performance area",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
      quantity: 1,
      unit: "complete installation",
      unitCost: 0,
      lineTotal: 0,
      leadTime: 8,
      installationTime: 3,
      scheduleImpact: 'moderate'
    }, {
      id: "booth-cabinetry",
      name: "Recording Booth Built-ins",
      description: "Custom recording booth interiors including instrument storage, headphone distribution panels, and integrated seating with acoustic considerations",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop",
      quantity: 4,
      unit: "recording booths",
      unitCost: 0,
      lineTotal: 0,
      leadTime: 12,
      installationTime: 2,
      scheduleImpact: 'minimal'
    }]
  }],
  subtotal: 624525,
  taxRate: 0.0875,
  taxAmount: 54645.94,
  grandTotal: 679170.94,
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
            
            // Handle conditional pricing updates
            newData.sections.forEach(sec => {
              sec.items.forEach(conditionalItem => {
                if (conditionalItem.conditionalPricing && 
                    conditionalItem.conditionalPricing.dependsOnItem === itemId &&
                    conditionalItem.conditionalPricing.dependsOnOption === optionId) {
                  // Apply alternative pricing
                  conditionalItem.unitCost = conditionalItem.conditionalPricing.alternativeCost;
                  conditionalItem.lineTotal = conditionalItem.quantity * conditionalItem.conditionalPricing.alternativeCost;
                  conditionalItem.description = conditionalItem.conditionalPricing.alternativeDescription || conditionalItem.description;
                  conditionalItem.installationTime = 2; // Add 2 weeks labor as specified
                } else if (conditionalItem.conditionalPricing && 
                          conditionalItem.conditionalPricing.dependsOnItem === itemId) {
                  // Apply steel frame pricing if steel option selected
                  if (optionId === "steel-frame-allied") {
                    conditionalItem.unitCost = 5400;
                    conditionalItem.lineTotal = conditionalItem.quantity * 5400;
                    conditionalItem.description = "Steel staircase to second floor mezzanine area. Required addition for steel frame system.";
                    conditionalItem.installationTime = 1;
                  } else {
                    // Reset to default for any other option
                    conditionalItem.unitCost = 0;
                    conditionalItem.lineTotal = 0;
                    conditionalItem.description = "Included with other frame systems.";
                    conditionalItem.installationTime = 0;
                  }
                }
              });
            });

            // Recalculate all section subtotals
            newData.sections.forEach(sec => {
              sec.subtotal = sec.items.reduce((sum, i) => sum + i.lineTotal, 0);
            });
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
                <EstimateSection title={section.title} items={section.items} subtotal={section.subtotal} hasQuote={section.hasQuote} quoteStatus={section.quoteStatus} expectedQuoteDate={section.expectedQuoteDate} workByOthers={section.workByOthers} onOptionChange={(itemId, optionId) => handleOptionChange(section.id, itemId, optionId)} />
              </motion.div>)}
          </div>
          
          <EstimateSummary subtotal={estimateData.subtotal} taxRate={estimateData.taxRate} taxAmount={estimateData.taxAmount} grandTotal={estimateData.grandTotal} totalLeadTime={estimateData.totalLeadTime} totalInstallationTime={estimateData.totalInstallationTime} />
        </motion.div>
      </div>
    </div>;
};
export default ConstructionEstimate;
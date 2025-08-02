import React from 'react';
import { motion } from 'framer-motion';
import EstimateHeader from './EstimateHeader';
import ProjectOverviewSection from './ProjectOverviewSection';
import EstimateSection from './EstimateSection';
import EstimateSummary from './EstimateSummary';
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
interface EstimateSectionData {
  id: string;
  title: string;
  items: LineItem[];
  subtotal: number;
  mpid?: string;
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
  mpid?: string;
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
      mpid: "bcb30380-0bec-4731-9863-2a0bd30de746"
    }, {
      id: "utilities",
      name: "Utility Connections",
      description: "Water, sewer, electrical, and gas line connections to municipal services",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&h=200&fit=crop",
      quantity: 1,
      unit: "lot",
      unitCost: 37500,
      lineTotal: 37500,
      mpid: "019b2aec-1a3f-4188-9c25-c63a371823c6"
    }],
    mpid: "766f46d9-39b9-42aa-a03f-077ddd4b3e4f"
  }, {
    id: "foundation",
    title: "Foundation & Structural",
    subtotal: 285000,
    items: [{
      id: "concrete-foundation",
      name: "Concrete Foundation",
      description: "Reinforced concrete foundation with waterproofing and insulation systems",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=200&fit=crop",
      quantity: 450,
      unit: "cubic yards",
      unitCost: 450,
      lineTotal: 202500,
      mpid: "f542cc91-9ee2-4af9-8e71-58eb8984a6c5"
    }, {
      id: "steel-framing",
      name: "Steel Frame Structure",
      description: "Structural steel framing for 5-story building including beams, columns, and connections",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&h=200&fit=crop",
      quantity: 125,
      unit: "tons",
      unitCost: 660,
      lineTotal: 82500,
      mpid: "804255a3-b666-4a0f-a8e4-489584eee192"
    }],
    mpid: "a89cac6d-e542-4c0b-ab5a-6fb3072f24ec"
  }, {
    id: "exterior",
    title: "Exterior & Envelope",
    subtotal: 195000,
    items: [{
      id: "curtain-wall",
      name: "Glass Curtain Wall System",
      description: "High-performance glass curtain wall with thermal breaks and energy-efficient glazing",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=200&fit=crop",
      quantity: 8500,
      unit: "sq ft",
      unitCost: 18,
      lineTotal: 153000,
      mpid: "47211881-8a5c-42a5-8da0-36ef90b0a1a9"
    }, {
      id: "roofing",
      name: "Premium Roofing System",
      description: "TPO membrane roofing with insulation and green roof components",
      image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=300&h=200&fit=crop",
      quantity: 12000,
      unit: "sq ft",
      unitCost: 3.5,
      lineTotal: 42000,
      mpid: "d37be851-ddeb-43ad-b9d4-d18a9864d6cf"
    }],
    mpid: "6b4f7088-343b-46a3-869e-44e709d9af57"
  }],
  subtotal: 605000,
  taxRate: 0.0875,
  taxAmount: 52937.50,
  grandTotal: 657937.50
};
const ConstructionEstimate: React.FC = () => {
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" data-magicpath-id="0" data-magicpath-path="ConstructionEstimate.tsx">
      <div className="max-w-6xl mx-auto px-4 py-8" data-magicpath-id="1" data-magicpath-path="ConstructionEstimate.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="bg-white rounded-2xl shadow-xl overflow-hidden" data-magicpath-id="2" data-magicpath-path="ConstructionEstimate.tsx">
          <EstimateHeader projectTitle={mockEstimateData.projectTitle} clientName={mockEstimateData.clientName} clientAddress={mockEstimateData.clientAddress} estimateId={mockEstimateData.estimateId} estimateDate={mockEstimateData.estimateDate} data-magicpath-id="3" data-magicpath-path="ConstructionEstimate.tsx" />
          
          <ProjectOverviewSection description={mockEstimateData.projectDescription} image={mockEstimateData.projectImage} data-magicpath-id="4" data-magicpath-path="ConstructionEstimate.tsx" />
          
          <div className="px-8 py-6 space-y-8" data-magicpath-id="5" data-magicpath-path="ConstructionEstimate.tsx">
            {mockEstimateData.sections.map((section, index) => <motion.div key={section.id} initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} data-magicpath-id="6" data-magicpath-path="ConstructionEstimate.tsx">
                <EstimateSection title={section.title} items={section.items} subtotal={section.subtotal} data-magicpath-id="7" data-magicpath-path="ConstructionEstimate.tsx" />
              </motion.div>)}
          </div>
          
          <EstimateSummary subtotal={mockEstimateData.subtotal} taxRate={mockEstimateData.taxRate} taxAmount={mockEstimateData.taxAmount} grandTotal={mockEstimateData.grandTotal} data-magicpath-id="8" data-magicpath-path="ConstructionEstimate.tsx" />
        </motion.div>
      </div>
    </div>;
};
export default ConstructionEstimate;
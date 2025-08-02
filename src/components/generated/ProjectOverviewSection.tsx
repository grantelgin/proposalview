import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
interface ProjectOverviewSectionProps {
  description: string;
  image: string;
  mpid?: string;
}
const ProjectOverviewSection: React.FC<ProjectOverviewSectionProps> = ({
  description,
  image
}) => {
  return <section className="px-8 py-8 border-b border-slate-200" data-magicpath-id="0" data-magicpath-path="ProjectOverviewSection.tsx">
      <div className="flex items-center gap-3 mb-6" data-magicpath-id="1" data-magicpath-path="ProjectOverviewSection.tsx">
        <Info className="w-6 h-6 text-blue-600" data-magicpath-id="2" data-magicpath-path="ProjectOverviewSection.tsx" />
        <h3 className="text-2xl font-bold text-slate-800" data-magicpath-id="3" data-magicpath-path="ProjectOverviewSection.tsx">Project Overview</h3>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8 items-center" data-magicpath-id="4" data-magicpath-path="ProjectOverviewSection.tsx">
        <div data-magicpath-id="5" data-magicpath-path="ProjectOverviewSection.tsx">
          <p className="text-slate-600 leading-relaxed text-lg" data-magicpath-id="6" data-magicpath-path="ProjectOverviewSection.tsx">
            {description}
          </p>
        </div>
        
        <motion.figure initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.5
      }} className="relative" data-magicpath-id="7" data-magicpath-path="ProjectOverviewSection.tsx">
          <img src={image} alt="Project visualization showing the planned commercial office building" className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg" data-magicpath-id="8" data-magicpath-path="ProjectOverviewSection.tsx" />
          <figcaption className="sr-only" data-magicpath-id="9" data-magicpath-path="ProjectOverviewSection.tsx">
            Architectural rendering of the luxury commercial office building project
          </figcaption>
        </motion.figure>
      </div>
    </section>;
};
export default ProjectOverviewSection;
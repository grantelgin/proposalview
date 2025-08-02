import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
interface ProjectOverviewSectionProps {
  description: string;
  image: string;
}
const ProjectOverviewSection: React.FC<ProjectOverviewSectionProps> = ({
  description,
  image
}) => {
  return <section className="px-8 py-8 border-b border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <Info className="w-6 h-6 text-blue-600" />
        <h3 className="text-2xl font-bold text-slate-800">Project Overview</h3>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-slate-600 leading-relaxed text-lg">
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
      }} className="relative">
          <img src={image} alt="Project visualization showing the planned commercial office building" className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg" />
          <figcaption className="sr-only">
            Architectural rendering of the luxury commercial office building project
          </figcaption>
        </motion.figure>
      </div>
    </section>;
};
export default ProjectOverviewSection;
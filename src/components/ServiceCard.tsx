import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  delay?: number;
}

export function ServiceCard({ title, description, features, icon: Icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(10, 46, 92, 0.15)" }}
      className="bg-[#F5F5DC] border-2 border-[#D4AF37] rounded-lg p-6 transition-all"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-[#0A2E5C] rounded-full flex items-center justify-center">
          <Icon className="text-[#D4AF37]" size={24} />
        </div>
        <h3 className="text-[#0A2E5C]">{title}</h3>
      </div>
      
      <p className="mb-4 text-[#666666]">{description}</p>
      
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-[#666666]">
            <span className="text-[#D4AF37] mt-1">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

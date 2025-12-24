import { motion } from "motion/react";

interface LucidLifeLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
}

export function LucidLifeLogo({ className = "", size = "lg", showText = true }: LucidLifeLogoProps) {
  const sizeClasses = {
    sm: "h-12",
    md: "h-16",
    lg: "h-20",
    xl: "h-24"
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl"
  };

  return (
    <motion.div 
      className={`flex flex-col items-center ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      {/* Logo Symbol */}
      <svg 
        viewBox="0 0 100 80" 
        className={`${sizeClasses[size]} w-auto`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="30%" stopColor="#C5A028" />
            <stop offset="50%" stopColor="#E8C547" />
            <stop offset="70%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B8973A" />
          </linearGradient>
        </defs>
        
        {/* Left crossed line */}
        <path 
          d="M 30 5 Q 35 15, 50 45" 
          stroke="url(#goldGradient)" 
          strokeWidth="6" 
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Right crossed line */}
        <path 
          d="M 70 5 Q 65 15, 50 45" 
          stroke="url(#goldGradient)" 
          strokeWidth="6" 
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Triangle body - left side */}
        <path 
          d="M 50 45 Q 30 55, 20 70 Q 35 75, 50 72" 
          stroke="url(#goldGradient)" 
          strokeWidth="6" 
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Triangle body - right side */}
        <path 
          d="M 50 45 Q 70 55, 80 70 Q 65 75, 50 72" 
          stroke="url(#goldGradient)" 
          strokeWidth="6" 
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Bottom curve */}
        <path 
          d="M 20 70 Q 50 78, 80 70" 
          stroke="url(#goldGradient)" 
          strokeWidth="6" 
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Inner oval */}
        <ellipse 
          cx="50" 
          cy="58" 
          rx="12" 
          ry="8" 
          stroke="url(#goldGradient)" 
          strokeWidth="4"
          fill="none"
        />
      </svg>
      
      {/* Logo Text */}
      {showText && (
        <div className={`flex ${textSizes[size]} font-semibold tracking-[0.2em] mt-1`}>
          <span style={{ 
            background: 'linear-gradient(135deg, #D4AF37 0%, #C5A028 30%, #E8C547 50%, #D4AF37 70%, #B8973A 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            LUCID
          </span>
          <span style={{ 
            background: 'linear-gradient(135deg, #C5A028 0%, #D4AF37 50%, #B8973A 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            LIFE
          </span>
        </div>
      )}
    </motion.div>
  );
}


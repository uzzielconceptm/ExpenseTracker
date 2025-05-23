import { FC } from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon";
  colorMode?: "light" | "dark";
}

export default function Logo({
  className = "",
  size = "md",
  variant = "full",
  colorMode = "light"
}: LogoProps) {
  // Colors based on the provided image
  const colors = {
    light: {
      primary: "#00AA80", // Teal/green color from the image
      secondary: "#ffffff", // White for icon details
      text: "#18212F" // Dark text color
    },
    dark: {
      primary: "#00AA80", // Same teal/green for dark mode
      secondary: "#ffffff", // White for icon details
      text: "#f8fafc" // Light text color for dark mode
    }
  };
  
  const sizeMap = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10"
  };

  const currentColors = colors[colorMode];

  // Icon-only version
  if (variant === "icon") {
    return (
      <div className="flex items-center">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${sizeMap[size]} ${className}`}
        >
          {/* Green rounded square background */}
          <rect width="36" height="36" rx="8" fill={currentColors.primary} />
          
          {/* Checkmark */}
          <path 
            d="M8 18L14 24L28 10" 
            stroke={currentColors.secondary}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Bar chart */}
          <path 
            d="M16 26H18V30H16V26Z" 
            fill={currentColors.secondary}
          />
          <path 
            d="M20 23H22V30H20V23Z" 
            fill={currentColors.secondary}
          />
          <path 
            d="M24 20H26V30H24V20Z" 
            fill={currentColors.secondary}
          />
        </svg>
      </div>
    );
  }

  // Full logo with icon and text beside it
  return (
    <div className="flex items-center">
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeMap[size]} ${className}`}
      >
        {/* Green rounded square background */}
        <rect width="36" height="36" rx="8" fill={currentColors.primary} />
        
        {/* Checkmark */}
        <path 
          d="M8 18L14 24L28 10" 
          stroke={currentColors.secondary}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Bar chart */}
        <path 
          d="M16 26H18V30H16V26Z" 
          fill={currentColors.secondary}
        />
        <path 
          d="M20 23H22V30H20V23Z" 
          fill={currentColors.secondary}
        />
        <path 
          d="M24 20H26V30H24V20Z" 
          fill={currentColors.secondary}
        />
      </svg>
      <span className="font-bold text-xl ml-2" style={{ color: currentColors.text }}>
        FinMatch
      </span>
    </div>
  );
}
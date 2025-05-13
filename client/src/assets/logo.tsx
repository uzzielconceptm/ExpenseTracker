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
  // New colors based on the provided image
  const colors = {
    light: {
      primary: "#3b9a6d", // Green color from the image
      secondary: "#ffffff", // White for icons
      text: "#1e293b" // Dark text color
    },
    dark: {
      primary: "#3b9a6d", // Green color from the image
      secondary: "#ffffff", // White for icons
      text: "#f8fafc" // Light text color for dark mode
    }
  };
  
  const sizeMap = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10"
  };

  const currentColors = colors[colorMode];

  // Icon-only version - new design with dollar sign, arrow and bar chart
  if (variant === "icon") {
    return (
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
        
        {/* Dollar sign */}
        <path
          d="M14 10C14 9.44772 14.4477 9 15 9H17C17.5523 9 18 9.44772 18 10V12C18 12.5523 17.5523 13 17 13H15C14.4477 13 14 12.5523 14 12V10Z"
          fill={currentColors.secondary}
        />
        <path
          d="M14 14C14 13.4477 14.4477 13 15 13H17C17.5523 13 18 13.4477 18 14V16C18 16.5523 17.5523 17 17 17H15C14.4477 17 14 16.5523 14 16V14Z"
          fill={currentColors.primary}
        />
        <path 
          d="M15 9C13.3431 9 12 10.3431 12 12V16C12 17.6569 13.3431 19 15 19H17C18.6569 19 20 17.6569 20 16V12C20 10.3431 18.6569 9 17 9H15Z" 
          fill="none"
          stroke={currentColors.secondary}
          strokeWidth="2"
        />
        
        {/* Bar chart */}
        <rect x="18" y="26" width="3" height="5" rx="1" fill={currentColors.secondary} />
        <rect x="23" y="23" width="3" height="8" rx="1" fill={currentColors.secondary} />
        <rect x="28" y="20" width="3" height="11" rx="1" fill={currentColors.secondary} />
        
        {/* Arrow */}
        <path 
          d="M10 24L18 16L21 19L28 12" 
          fill="none"
          stroke={currentColors.secondary}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path 
          d="M27 12H28V13" 
          fill="none"
          stroke={currentColors.secondary}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Full logo with icon only, no text
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeMap[size]} ${className}`}
    >
      {/* Green rounded square background */}
      <rect width="50" height="50" rx="10" fill={currentColors.primary} />
      
      {/* Dollar sign */}
      <path
        d="M20 14C20 13.4477 20.4477 13 21 13H24C24.5523 13 25 13.4477 25 14V17C25 17.5523 24.5523 18 24 18H21C20.4477 18 20 17.5523 20 17V14Z"
        fill={currentColors.secondary}
      />
      <path
        d="M20 20C20 19.4477 20.4477 19 21 19H24C24.5523 19 25 19.4477 25 20V23C25 23.5523 24.5523 24 24 24H21C20.4477 24 20 23.5523 20 23V20Z"
        fill={currentColors.primary}
      />
      <path 
        d="M21 13C18.7909 13 17 14.7909 17 17V23C17 25.2091 18.7909 27 21 27H24C26.2091 27 28 25.2091 28 23V17C28 14.7909 26.2091 13 24 13H21Z" 
        fill="none"
        stroke={currentColors.secondary}
        strokeWidth="2.5"
      />
      
      {/* Bar chart */}
      <rect x="24" y="36" width="4" height="7" rx="1" fill={currentColors.secondary} />
      <rect x="32" y="32" width="4" height="11" rx="1" fill={currentColors.secondary} />
      <rect x="40" y="28" width="4" height="15" rx="1" fill={currentColors.secondary} />
      
      {/* Arrow */}
      <path 
        d="M13 34L24 22L29 27L40 16" 
        fill="none"
        stroke={currentColors.secondary}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path 
        d="M38 16H40V18" 
        fill="none"
        stroke={currentColors.secondary}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
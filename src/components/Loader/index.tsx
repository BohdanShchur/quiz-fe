import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { CommonTranslations } from "../../types";

const LoadingPage: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const { t } = useTranslation();
  const pageData = t('common', { returnObjects: true }) as CommonTranslations;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 2 : 100));
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full bg-[#1f002b] bg-opacity-80 flex flex-col justify-center items-center z-50">
      <div className="relative w-40 h-40">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="stroke-gray-600"
            cx="50"
            cy="50"
            r="40"
            strokeWidth="8"
            fill="transparent"
          />
          <circle
            className="stroke-pink-500 transition-all duration-300"
            cx="50"
            cy="50"
            r="40"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray="251.2"
            strokeDashoffset={`${251.2 - (251.2 * progress) / 100}`}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
          {progress}%
        </div>
      </div>
      <p className="text-white mt-4 text-lg">{pageData.loader}</p>
    </div>
  );
};

export default LoadingPage;

import { X } from "lucide-react";

interface Stage {
  name: string;
  progress: number;
}

interface ProgressOptionBProps {
  progress: number;
  currentStage: number;
  stages: Stage[];
  onCancel: () => void;
}

export function ProgressOptionB({ progress, currentStage, stages, onCancel }: ProgressOptionBProps) {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="bg-white rounded-[24px] border-2 border-[#c928ff] p-8 shadow-lg">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h3 className="text-[#1d1e20] text-[20px] font-['Inter:Semi_Bold',sans-serif] font-semibold">
            AI Processing in Progress
          </h3>
          <p className="text-[#72777e] text-[14px] mt-1">
            ACME INC LOI 10-01-2025.pdf
          </p>
        </div>
        <button
          onClick={onCancel}
          className="text-[#72777e] hover:text-[#1d1e20] transition-colors p-2"
          aria-label="Cancel upload"
        >
          <X size={20} />
        </button>
      </div>

      {/* Circular Progress */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative inline-flex items-center justify-center">
          <svg className="transform -rotate-90" width="200" height="200">
            {/* Background circle */}
            <circle
              cx="100"
              cy="100"
              r={radius}
              stroke="#ebebff"
              strokeWidth="12"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="100"
              cy="100"
              r={radius}
              stroke="url(#gradient)"
              strokeWidth="12"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-500 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c928ff" />
                <stop offset="50%" stopColor="#8b28ff" />
                <stop offset="100%" stopColor="#5528ff" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-[36px] font-['Inter:Bold',sans-serif] font-bold text-[#4837b9]">
              {progress}%
            </span>
            <span className="text-[12px] text-[#72777e]">Complete</span>
          </div>
        </div>

        {/* Current Stage */}
        <div className="mt-6 text-center max-w-[300px]">
          <p className="text-[#4837b9] text-[16px] font-['Inter:Semi_Bold',sans-serif] font-semibold mb-2">
            {stages[currentStage]?.name}
          </p>
          {stages[currentStage]?.name.includes("minute") && (
            <p className="text-[#72777e] text-[12px]">
              This step may take longer. Please be patient...
            </p>
          )}
        </div>
      </div>

      {/* Stage Indicators */}
      <div className="flex justify-center gap-2 mb-6">
        {stages.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index <= currentStage ? "w-8 bg-[#4837b9]" : "w-2 bg-[#d6d8db]"
            }`}
          />
        ))}
      </div>

      {/* Stages List - Compact */}
      <div className="border-t border-[#d6d8db] pt-4">
        <div className="grid grid-cols-2 gap-2 text-[11px]">
          {stages.map((stage, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 ${
                index < currentStage
                  ? "text-[#009696]"
                  : index === currentStage
                  ? "text-[#4837b9]"
                  : "text-[#72777e]"
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full flex-shrink-0 ${
                  index < currentStage
                    ? "bg-[#009696]"
                    : index === currentStage
                    ? "bg-[#4837b9] animate-pulse"
                    : "bg-[#d6d8db]"
                }`}
              />
              <span className="line-clamp-1">{stage.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

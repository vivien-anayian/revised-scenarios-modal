import { X } from "lucide-react";

interface Stage {
  name: string;
  progress: number;
}

interface ProgressOptionAProps {
  progress: number;
  currentStage: number;
  stages: Stage[];
  onCancel: () => void;
}

export function ProgressOptionA({ progress, currentStage, stages, onCancel }: ProgressOptionAProps) {
  return (
    <div className="bg-white rounded-[16px] border-2 border-[#c928ff] p-8 shadow-lg">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-[#1d1e20] text-[20px] font-['Inter:Semi_Bold',sans-serif] font-semibold">
            Processing Document
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

      {/* Linear Progress Bar */}
      <div className="mb-6">
        <div className="h-3 bg-[#f0f0f0] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#c928ff] via-[#8b28ff] to-[#5528ff] transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-[#4837b9] text-[14px] font-['Inter:Semi_Bold',sans-serif] font-semibold">
            {progress}%
          </p>
          <p className="text-[#72777e] text-[12px]">
            {progress < 100 ? "Processing..." : "Complete!"}
          </p>
        </div>
      </div>

      {/* Current Stage Description */}
      <div className="bg-[#ebebff] rounded-lg p-4 min-h-[80px] flex items-center">
        <div className="flex-1">
          <p className="text-[#4837b9] text-[14px] font-['Inter:Semi_Bold',sans-serif] font-semibold mb-1">
            {stages[currentStage]?.name}
          </p>
          {stages[currentStage]?.name.includes("minute") && (
            <p className="text-[#72777e] text-[12px]">
              This step may take longer than others. Please wait...
            </p>
          )}
        </div>
        <div className="ml-4">
          <div className="animate-spin h-6 w-6 border-2 border-[#4837b9] border-t-transparent rounded-full" />
        </div>
      </div>

      {/* Stage List */}
      <div className="mt-6 space-y-2">
        <p className="text-[#72777e] text-[12px] mb-3">Processing stages:</p>
        {stages.map((stage, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 text-[12px] ${
              index < currentStage
                ? "text-[#009696]"
                : index === currentStage
                ? "text-[#4837b9]"
                : "text-[#72777e]"
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full flex items-center justify-center ${
                index < currentStage
                  ? "bg-[#009696]"
                  : index === currentStage
                  ? "bg-[#4837b9]"
                  : "bg-[#d6d8db]"
              }`}
            >
              {index < currentStage && (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span>{stage.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

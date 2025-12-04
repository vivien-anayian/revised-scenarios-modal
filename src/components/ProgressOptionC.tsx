import { X, Check, Loader2 } from "lucide-react";

interface Stage {
  name: string;
  progress: number;
}

interface ProgressOptionCProps {
  progress: number;
  currentStage: number;
  stages: Stage[];
  onCancel: () => void;
}

export function ProgressOptionC({ progress, currentStage, stages, onCancel }: ProgressOptionCProps) {
  return (
    <div className="bg-white rounded-[16px] border-2 border-[#c928ff] shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#c928ff] via-[#8b28ff] to-[#5528ff] p-6 text-white">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-[20px] font-['Inter:Semi_Bold',sans-serif] font-semibold">
              Processing Your Document
            </h3>
            <p className="text-[14px] opacity-90 mt-1">
              ACME INC LOI 10-01-2025.pdf
            </p>
          </div>
          <button
            onClick={onCancel}
            className="text-white hover:bg-white hover:bg-opacity-20 transition-colors p-2 rounded"
            aria-label="Cancel upload"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Progress percentage */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-2 bg-white bg-opacity-30 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[18px] font-['Inter:Bold',sans-serif] font-bold min-w-[50px] text-right">
            {progress}%
          </span>
        </div>
      </div>

      {/* Checklist */}
      <div className="p-6">
        <div className="space-y-4">
          {stages.map((stage, index) => {
            const isComplete = index < currentStage;
            const isCurrent = index === currentStage;
            const isPending = index > currentStage;

            return (
              <div
                key={index}
                className={`flex items-start gap-4 p-4 rounded-lg transition-all duration-300 ${
                  isComplete
                    ? "bg-[#e6f7f7]"
                    : isCurrent
                    ? "bg-[#ebebff] border-2 border-[#4837b9]"
                    : "bg-[#f8f9fa]"
                }`}
              >
                {/* Icon */}
                <div className="flex-shrink-0 mt-0.5">
                  {isComplete && (
                    <div className="w-6 h-6 rounded-full bg-[#009696] flex items-center justify-center">
                      <Check size={16} className="text-white" />
                    </div>
                  )}
                  {isCurrent && (
                    <div className="w-6 h-6 rounded-full bg-[#4837b9] flex items-center justify-center">
                      <Loader2 size={16} className="text-white animate-spin" />
                    </div>
                  )}
                  {isPending && (
                    <div className="w-6 h-6 rounded-full border-2 border-[#d6d8db]" />
                  )}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-[14px] font-['Inter:Semi_Bold',sans-serif] font-semibold ${
                      isComplete
                        ? "text-[#009696]"
                        : isCurrent
                        ? "text-[#4837b9]"
                        : "text-[#72777e]"
                    }`}
                  >
                    {stage.name}
                  </p>
                  {isCurrent && stage.name.includes("minute") && (
                    <p className="text-[12px] text-[#72777e] mt-1">
                      This is the longest step. We appreciate your patience.
                    </p>
                  )}
                  {isComplete && (
                    <p className="text-[12px] text-[#009696] mt-1">✓ Completed</p>
                  )}
                </div>

                {/* Stage number */}
                <div
                  className={`flex-shrink-0 text-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold ${
                    isComplete
                      ? "text-[#009696]"
                      : isCurrent
                      ? "text-[#4837b9]"
                      : "text-[#d6d8db]"
                  }`}
                >
                  {index + 1}/{stages.length}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer message */}
        <div className="mt-6 p-4 bg-[#ebebff] rounded-lg">
          <p className="text-[12px] text-[#4837b9] text-center">
            💡 You can continue working while we process your document
          </p>
        </div>
      </div>
    </div>
  );
}

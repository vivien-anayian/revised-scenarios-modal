import { useState, useRef } from 'react';
import { Sparkles as LucideSparkles } from 'lucide-react';
import uploadIcon from 'figma:asset/62d004828f18c84cb040a5e8733eb7a4fc50c442.png';
import { SparklesIcon } from './SparklesIcon';

interface ProposalUploadBoxProps {
  onComplete: (fileName: string) => void;
}

type UploadState = 'idle' | 'processing';

const processingStages = [
  { label: 'Uploading document', progress: 0 },
  { label: 'Preparing file for AI extraction', progress: 15 },
  { label: 'Extraction could take up to a minute', progress: 25 },
  { label: 'Generating term details, rent structure and other income', progress: 35 },
  { label: 'Generating expenses, recoveries and costs', progress: 55 },
  { label: 'Generating options and rights', progress: 75 },
  { label: 'Finalizing', progress: 90 },
];

export function ProposalUploadBox({ onComplete }: ProposalUploadBoxProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadState, setUploadState] = useState<UploadState>('idle');
  const [progress, setProgress] = useState(0);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [_fileName, setFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (uploadState === 'idle') {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (uploadState === 'idle') {
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        processFile(files[0]);
      }
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const processFile = (file: File) => {
    setFileName(file.name);
    setUploadState('processing');
    setProgress(0);
    setCurrentStageIndex(0);

    // Slower processing to show all stages
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 0.3; // Even slower increment
      setProgress(currentProgress);
      
      // Update stage based on progress
      const stageIndex = processingStages.findIndex((stage, idx) => {
        const nextStage = processingStages[idx + 1];
        return currentProgress >= stage.progress && (!nextStage || currentProgress < nextStage.progress);
      });
      
      if (stageIndex !== -1) {
        setCurrentStageIndex(stageIndex);
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setUploadState('idle');
          onComplete(file.name);
        }, 500);
      }
    }, 50); // Slower interval
  };

  const handleClick = () => {
    if (uploadState === 'idle') {
      fileInputRef.current?.click();
    }
  };

  // Reset function for future use
  // const handleReset = () => {
  //   setUploadState('idle');
  //   setProgress(0);
  //   setCurrentStageIndex(0);
  //   setFileName('');
  // };

  return (
    <div className="w-full">
      {/* Upload Box */}
      <div 
        className={`relative border-2 border-dashed rounded-[16px] overflow-hidden ${
          uploadState === 'idle'
            ? isDragging
              ? 'border-[#c928ff]'
              : 'border-[#d6a6ff] hover:border-[#c928ff]'
            : 'border-[#d6d8db] bg-white'
        } ${uploadState === 'idle' ? 'cursor-pointer' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        {/* Animated gradient background layer */}
        {uploadState === 'idle' && (
          <div 
            className={`animated-gradient-bg absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${
              isDragging ? 'opacity-100' : 'opacity-0 hover:opacity-100'
            }`}
            style={{ pointerEvents: 'none' }}
          />
        )}
        
        {/* Content layer */}
        <div className="relative">
          <div className="px-4 pt-4 pb-6">
            {uploadState === 'idle' && (
              <>
                {/* AI Badge and Description */}
                <div className="mb-4">
                  <div className="mb-2 flex items-center gap-2 justify-center">
                    <div className="flex items-center gap-4">
                      <div className="relative shrink-0 w-[16px] h-[16px] animate-[scaleBurst_1.2s_cubic-bezier(0.34,1.56,0.64,1)] -ml-6">
                        <SparklesIcon />
                      </div>
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#1d1e20] text-[20px]">Proposal AI</span>
                    </div>
                    <div className="bg-[#ebebff] px-[8px] py-[0px] rounded-[4px] pt-[1px] pr-[8px] pb-[3px] pl-[8px] m-[0px]">
                      <span className="font-['Inter:Regular',sans-serif] leading-[14px] text-[#1d1e20] text-[10px]">Beta</span>
                    </div>
                  </div>

                  <p className="font-['Inter:Regular',sans-serif] leading-[20px] text-[#1d1e20] text-[14px] text-center">
                    Drag and drop, or upload, your LOI to automatically fill in the proposal form.
                  </p>
                </div>

                {/* Animated Upload Indicator */}
                <div className="relative mb-4 h-16 flex items-center justify-center">
                  {/* Animated document flying in */}
                  <div className="doc-float-in absolute">
                    <div className="w-12 h-16 bg-gradient-to-br from-[#c928ff]/20 to-[#8B28FF]/20 rounded border-2 border-[#c928ff] flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#c928ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Target box */}
                  <div className={`w-16 h-16 border-2 border-dashed rounded-lg flex items-center justify-center transition-all ${
                    isDragging ? 'border-[#c928ff] bg-[#c928ff]/10 scale-110' : 'border-[#d6d8db]'
                  }`}>
                    <svg className="w-8 h-8 text-[#b4b7bc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                </div>

                {/* Upload Button with Animated Gradient */}
                <button className="animated-gradient-button px-3 py-1.5 rounded-[4px] flex items-center gap-2 mx-auto transition-transform hover:scale-105">
                  <img src={uploadIcon} alt="Upload" className="w-[18px] h-[18px]" />
                  <span className="font-['Inter:Regular',sans-serif] leading-[24px] text-white text-[16px]">Click to upload</span>
                </button>
              </>
            )}

            {uploadState === 'processing' && (
              <div className="space-y-4 py-4">
                {/* Document Icon with Scanning Animation */}
                <div className="flex items-center justify-center gap-4">
                  {/* Animated Document Icon */}
                  <div className="relative w-16 h-20">
                    {/* Document base */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#c928ff]/10 to-[#8B28FF]/10 rounded-lg border-2 border-[#c928ff]/30">
                      {/* Document lines */}
                      <div className="absolute top-3 left-3 right-3 space-y-1.5">
                        <div className="h-1 bg-[#c928ff]/20 rounded" />
                        <div className="h-1 bg-[#c928ff]/20 rounded w-4/5" />
                        <div className="h-1 bg-[#c928ff]/20 rounded" />
                        <div className="h-1 bg-[#c928ff]/20 rounded w-3/5" />
                      </div>
                      
                      {/* Scanning line animation */}
                      <div className="scanning-line absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c928ff] to-transparent" />
                      
                      {/* Sparkle particles - matching original visual: ~25% final opacity */}
                      <div className="sparkle-particle sparkle-1 absolute opacity-0">
                        <LucideSparkles className="w-full h-full text-[#c928ff]" />
                      </div>
                      <div className="sparkle-particle sparkle-2 absolute opacity-0">
                        <LucideSparkles className="w-full h-full text-[#c928ff]" />
                      </div>
                      <div className="sparkle-particle sparkle-3 absolute opacity-0">
                        <LucideSparkles className="w-full h-full text-[#c928ff]" />
                      </div>
                    </div>
                    
                    {/* Percentage badge */}
                    <div className="absolute -top-2 -right-2 bg-gradient-to-br from-[#c928ff] to-[#8B28FF] rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[10px]">
                        {Math.round(progress)}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stage text with animated ellipsis */}
                <div className="text-center">
                  <p className="font-['Inter:Regular',sans-serif] leading-[20px] text-[#1d1e20] text-[14px]">
                    {processingStages[currentStageIndex].label}
                    <span className="chatgpt-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileInput}
        className="hidden"
      />

      <style>{`
        @keyframes floatIn {
          0% {
            transform: translate(-60px, -30px) rotate(-15deg) scale(0.8);
            opacity: 0;
          }
          30% {
            transform: translate(-20px, -10px) rotate(-3deg) scale(0.9);
            opacity: 1;
          }
          45% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 1;
          }
          70% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 1;
          }
          85% {
            transform: translate(0, 0) rotate(0deg) scale(0.4);
            opacity: 0.4;
          }
          100% {
            transform: translate(0, 0) rotate(0deg) scale(0);
            opacity: 0;
          }
        }
        
        .doc-float-in {
          animation: floatIn 5s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animated-gradient-button {
          background: linear-gradient(
            135deg,
            rgba(118,32,205,1) 0%,
            rgba(136,34,170,1) 20%,
            rgba(108,31,133,1) 40%,
            rgba(80,29,97,1) 60%,
            rgba(52,26,60,1) 80%,
            rgba(38,25,42,1) 90%,
            rgba(24,24,24,1) 100%
          );
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }

        @keyframes gradientBackground {
          0% {
            background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(214, 166, 255, 0.08) 25%, rgba(235, 211, 255, 0.12) 50%, rgba(214, 166, 255, 0.08) 75%, rgba(255, 255, 255, 1) 100%);
            background-position: 0% 50%;
          }
          25% {
            background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(214, 166, 255, 0.15) 25%, rgba(235, 211, 255, 0.22) 50%, rgba(214, 166, 255, 0.15) 75%, rgba(255, 255, 255, 1) 100%);
            background-position: 50% 50%;
          }
          50% {
            background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(201, 40, 255, 0.12) 25%, rgba(214, 166, 255, 0.25) 50%, rgba(201, 40, 255, 0.12) 75%, rgba(255, 255, 255, 1) 100%);
            background-position: 100% 50%;
          }
          75% {
            background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(214, 166, 255, 0.15) 25%, rgba(235, 211, 255, 0.22) 50%, rgba(214, 166, 255, 0.15) 75%, rgba(255, 255, 255, 1) 100%);
            background-position: 50% 50%;
          }
          100% {
            background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(214, 166, 255, 0.08) 25%, rgba(235, 211, 255, 0.12) 50%, rgba(214, 166, 255, 0.08) 75%, rgba(255, 255, 255, 1) 100%);
            background-position: 0% 50%;
          }
        }

        .animated-gradient-bg {
          background-size: 200% 200%;
          animation: gradientBackground 8s ease-in-out infinite;
        }

        /* Scanning line animation */
        @keyframes scan {
          0% {
            top: 0;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        .scanning-line {
          animation: scan 3.5s ease-in-out infinite;
        }

        /* Sparkle particles animation */
        /* Sparkle animation - EXACT per guide: max 0.25 opacity */
        @keyframes sparkle {
          0% {
            opacity: 0;
            transform: scale(0) translateY(0);
          }
          50% {
            opacity: 0.25;
            transform: scale(1) translateY(-8px);
          }
          100% {
            opacity: 0;
            transform: scale(0) translateY(0);
          }
        }

        .sparkle-particle {
          animation: sparkle 4.5s ease-in-out infinite forwards;
          opacity: 0;
        }

        /* Sparkle 1 - medium size, top right */
        .sparkle-1 {
          top: 35%;
          right: -15px;
          width: 20px;
          height: 20px;
          animation-delay: 0s;
        }

        /* Sparkle 2 - large size, middle right */
        .sparkle-2 {
          top: 55%;
          right: -20px;
          width: 28px;
          height: 28px;
          animation-delay: 1.2s;
        }

        /* Sparkle 3 - largest, bottom */
        .sparkle-3 {
          top: 75%;
          right: -8px;
          width: 24px;
          height: 24px;
          animation-delay: 2.4s;
        }

        /* ChatGPT-style loading dots - sequential wave animation */
        @keyframes dotPulse {
          0%, 80%, 100% {
            opacity: 0.3;
          }
          40% {
            opacity: 1;
          }
        }

        .chatgpt-dots {
          display: inline-flex;
          gap: 2px;
          margin-left: 2px;
        }

        .chatgpt-dots span {
          display: inline-block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: #1d1e20;
          animation: dotPulse 1.4s ease-in-out infinite;
        }

        .chatgpt-dots span:nth-child(1) {
          animation-delay: 0s;
        }

        .chatgpt-dots span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .chatgpt-dots span:nth-child(3) {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}
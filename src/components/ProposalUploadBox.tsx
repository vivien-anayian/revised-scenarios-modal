import { useState, useRef } from 'react';
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
      currentProgress += 0.5; // Slower increment
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

  // Reset function available for future use
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
                    Upload, or drag & drop your LOI document to automatically extract and fill form fields
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
              <div className="space-y-3 py-2">
                {/* Header */}
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-b from-[#c928ff] to-[#8b28ff] relative rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(201,40,255,0.2),0px_4px_6px_-4px_rgba(201,40,255,0.2)] shrink-0 size-[40px] flex items-center justify-center flex-shrink-0">
                    <div className="relative shrink-0 size-[20px] animate-pulse">
                      <svg className="block size-full" fill="none" viewBox="0 0 29 30" preserveAspectRatio="xMidYMid meet">
                        <path d="M20.2128 11.1983L21.4323 14.2899C21.501 14.4658 21.7 14.5516 21.876 14.4815C21.9633 14.4472 22.0335 14.3771 22.0678 14.2899L23.2873 11.1983C23.7253 10.0915 24.6013 9.21633 25.7092 8.77876L28.7837 7.56042C28.9598 7.49178 29.0457 7.29301 28.9755 7.11713C28.9412 7.0299 28.871 6.95983 28.7837 6.92551L25.7092 5.70717C24.6013 5.27102 23.7239 4.39445 23.2873 3.28764L22.0678 0.21605C21.9991 0.0401631 21.8002 -0.0456357 21.6241 0.0244331C21.5368 0.0587526 21.4666 0.128821 21.4323 0.21605L20.2128 3.28764C19.7762 4.39444 18.8988 5.27102 17.7909 5.70716L14.7164 6.9255C14.5403 6.99414 14.4544 7.19291 14.5246 7.3688C14.5589 7.45603 14.6291 7.52609 14.7164 7.56041L17.7909 8.77876C18.8988 9.21633 19.7748 10.0915 20.2128 11.1983Z" fill="white"/>
                        <path d="M16.0908 16.3751L20.5331 18.1288C20.7859 18.2277 20.9091 18.5138 20.8085 18.767C20.7591 18.8925 20.6585 18.9934 20.5331 19.0428L16.0908 20.7966C14.5004 21.4265 13.2429 22.6862 12.6142 24.2794L10.8636 28.701C10.7649 28.9541 10.4793 29.0777 10.2266 28.9768C10.1013 28.9274 10.0006 28.8265 9.95125 28.701L8.20062 24.2794C7.57393 22.6862 6.31437 21.4244 4.72401 20.7966L0.310442 19.0428C0.0577098 18.944 -0.0655743 18.6579 0.0351075 18.4047C0.084421 18.2791 0.185103 18.1782 0.310442 18.1288L4.72401 16.3751C6.31437 15.7472 7.57392 14.4854 8.20062 12.8922L9.95125 8.47067C10.0499 8.21748 10.3355 8.09398 10.5882 8.19484C10.7136 8.24424 10.8142 8.3451 10.8635 8.47067L12.6142 12.8922C13.2429 14.4854 14.5004 15.7452 16.0908 16.3751Z" fill="white"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between mb-1">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#1d1e20] text-[13px]">
                        {processingStages[currentStageIndex].label}
                      </p>
                      <span className="font-['Inter:Regular',sans-serif] leading-[16px] text-[#72777e] text-[11px]">
                        {Math.round(progress)}%
                      </span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="w-full bg-[#f0f0f0] rounded-full h-1.5 overflow-hidden mb-2">
                      <div
                        className="h-full rounded-full transition-all duration-300"
                        style={{
                          width: `${progress}%`,
                          background: 'linear-gradient(90deg, #C928FF 0%, #8B28FF 50%, #5528FF 100%)'
                        }}
                      />
                    </div>

                    {/* Stage list */}
                    <div className="space-y-1 mt-3">
                      {processingStages.map((stage, index) => {
                        const isComplete = progress >= (processingStages[index + 1]?.progress || 100);
                        const isCurrent = index === currentStageIndex;
                        
                        return (
                          <div key={index} className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full transition-all ${
                              isComplete ? 'bg-[#181818]' : isCurrent ? 'bg-[#ebebff] animate-pulse' : 'bg-[#e5e7eb]'
                            }`} />
                            <p className={`text-[10px] transition-colors ${
                              isComplete ? 'text-[#72777e]' : isCurrent ? 'text-[#1d1e20]' : 'text-[#b4b7bc]'
                            }`}>
                              {stage.label}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
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
          animation: floatIn 3s ease-in-out infinite;
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
          animation: gradientBackground 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
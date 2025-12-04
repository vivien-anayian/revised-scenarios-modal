import { useState, useRef } from 'react';
import svgPaths from '../imports/svg-5mcx9rbt7a';

interface UploadBoxVariation1Props {
  onFileSelect: (file: File) => void;
}

type UploadState = 'idle' | 'processing' | 'complete';

export function UploadBoxVariation1({ onFileSelect }: UploadBoxVariation1Props) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadState, setUploadState] = useState<UploadState>('idle');
  const [progress, setProgress] = useState(0);
  const [currentActivity, setCurrentActivity] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const activities = [
    'Uploading document...',
    'Analyzing structure...',
    'Extracting lease terms...',
    'Parsing rent details...',
    'Identifying key provisions...',
    'Finalizing extraction...',
  ];

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
    setUploadState('processing');
    setProgress(0);
    setCurrentActivity(activities[0]);

    // Simulate processing
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);

      // Update activity based on progress
      const activityIndex = Math.min(
        Math.floor((currentProgress / 100) * activities.length),
        activities.length - 1
      );
      setCurrentActivity(activities[activityIndex]);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setUploadState('complete');
          onFileSelect(file);
        }, 500);
      }
    }, 30);
  };

  const handleClick = () => {
    if (uploadState === 'idle') {
      fileInputRef.current?.click();
    }
  };

  const handleReset = () => {
    setUploadState('idle');
    setProgress(0);
    setCurrentActivity('');
  };

  return (
    <div className="w-full">
      {/* AI Badge */}
      <div className="mb-3 flex items-center gap-2">
        <div className="flex items-center gap-1.5">
          <div className="relative shrink-0 size-[16px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="AI Stars">
                <g id="Vector">
                  <path d={svgPaths.p392ab080} fill="url(#paint0_linear_16_12721)" />
                  <path d={svgPaths.p37a0ec40} fill="url(#paint1_linear_16_12721)" />
                  <path d={svgPaths.p1f950c80} fill="url(#paint2_linear_16_12721)" />
                </g>
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_16_12721" x1="1.20002" x2="14.8" y1="7.66666" y2="7.66666">
                  <stop stopColor="#C928FF" />
                  <stop offset="0.33" stopColor="#8B28FF" />
                  <stop offset="0.66" stopColor="#5528FF" />
                  <stop offset="1" stopColor="#181818" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_16_12721" x1="1.20002" x2="14.8" y1="7.66666" y2="7.66666">
                  <stop stopColor="#C928FF" />
                  <stop offset="0.33" stopColor="#8B28FF" />
                  <stop offset="0.66" stopColor="#5528FF" />
                  <stop offset="1" stopColor="#181818" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_16_12721" x1="1.20002" x2="14.8" y1="7.66666" y2="7.66666">
                  <stop stopColor="#C928FF" />
                  <stop offset="0.33" stopColor="#8B28FF" />
                  <stop offset="0.66" stopColor="#5528FF" />
                  <stop offset="1" stopColor="#181818" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#1d1e20] text-[14px]">Proposal AI</span>
        </div>
        <div className="bg-[#ebebff] px-[8px] py-[3px] rounded-[4px]">
          <span className="font-['Inter:Regular',sans-serif] leading-[14px] text-[#1d1e20] text-[10px]">Beta</span>
        </div>
      </div>

      <p className="font-['Inter:Regular',sans-serif] leading-[20px] text-[#1d1e20] text-[14px] mb-3">
        Proposal AI reads your LOI and automatically fills in the form.
      </p>

      {/* Upload Box */}
      <div 
        className={`relative border-2 border-dashed rounded-[16px] overflow-hidden transition-all duration-300 ${
          uploadState === 'idle'
            ? isDragging
              ? 'border-[#c928ff] bg-[#faf9ff]'
              : 'border-[#c928ff] bg-white hover:bg-[#faf9ff]'
            : 'border-[#d6d8db] bg-white'
        } ${uploadState === 'idle' ? 'cursor-pointer' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <div className="p-4">
          {uploadState === 'idle' && (
            <>
              {/* File Type Icons */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-16 bg-[#f5f6f7] rounded border border-[#e5e7eb] flex items-center justify-center mb-1">
                    <span className="text-[10px] text-[#72777e]">PDF</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-16 bg-[#f5f6f7] rounded border border-[#e5e7eb] flex items-center justify-center mb-1">
                    <span className="text-[10px] text-[#72777e]">DOC</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-16 bg-[#f5f6f7] rounded border border-[#e5e7eb] flex items-center justify-center mb-1">
                    <span className="text-[10px] text-[#72777e]">DOCX</span>
                  </div>
                </div>
              </div>

              {/* Upload Button */}
              <button className="bg-[#4837b9] hover:bg-[#5d4ac9] transition-colors px-3 py-1.5 rounded flex items-center gap-1.5 mx-auto mb-3">
                <div className="relative shrink-0 size-[14px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <g clipPath="url(#clip0_upload)">
                      <path d={svgPaths.pbbca980} fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_upload">
                        <rect fill="white" height="14" width="14" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="font-['Inter:Regular',sans-serif] leading-[20px] text-white text-[14px]">Click to upload</span>
              </button>

              <p className="font-['Inter:Regular',sans-serif] leading-[20px] text-[#4837b9] text-[14px] text-center">
                or drag and drop
              </p>
            </>
          )}

          {uploadState === 'processing' && (
            <div className="py-2">
              {/* Processing indicator */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 flex-shrink-0">
                  <svg className="w-10 h-10 transform -rotate-90">
                    <circle
                      cx="20"
                      cy="20"
                      r="16"
                      stroke="#f0f0f0"
                      strokeWidth="3"
                      fill="none"
                    />
                    <circle
                      cx="20"
                      cy="20"
                      r="16"
                      stroke="url(#progress-gradient)"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 16}`}
                      strokeDashoffset={`${2 * Math.PI * 16 * (1 - progress / 100)}`}
                      strokeLinecap="round"
                      className="transition-all duration-300"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[11px] text-[#1d1e20]">{Math.round(progress)}%</span>
                  </div>
                  <defs>
                    <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#C928FF" />
                      <stop offset="50%" stopColor="#8B28FF" />
                      <stop offset="100%" stopColor="#5528FF" />
                    </linearGradient>
                  </defs>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#1d1e20] text-[14px] mb-0.5">
                    Processing LOI
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] leading-[16px] text-[#72777e] text-[12px] truncate">
                    {currentActivity}
                  </p>
                </div>
              </div>

              {/* Mini progress bar */}
              <div className="w-full bg-[#f0f0f0] rounded-full h-1 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #C928FF 0%, #8B28FF 50%, #5528FF 100%)'
                  }}
                />
              </div>
            </div>
          )}

          {uploadState === 'complete' && (
            <div className="py-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#009696] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#1d1e20] text-[14px] mb-0.5">
                    Extraction complete
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] leading-[16px] text-[#72777e] text-[12px]">
                    Form fields have been populated
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleReset();
                  }}
                  className="text-[#4837b9] text-[12px] hover:underline"
                >
                  Upload new
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileInput}
        className="hidden"
      />
    </div>
  );
}

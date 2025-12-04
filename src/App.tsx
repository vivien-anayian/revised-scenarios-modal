import { useState } from 'react';
import { ProposalUploadBox } from './components/ProposalUploadBox';
import { ProposalInfoForm } from './components/ProposalInfoForm';
import { Term1EmptyState } from './components/Term1EmptyState';
import { UploadedLOIView } from './components/UploadedLOIView';
import { UploadedFileCard } from './components/UploadedFileCard';
import svgPaths from './imports/svg-cwa273ru73';
import svgPathsWarning from './imports/svg-9tcsvvqqrr';

type UploadState = 'idle' | 'processing' | 'complete';

export default function App() {
  const [uploadState, setUploadState] = useState<UploadState>('idle');
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [isProposalInfoExpanded, setIsProposalInfoExpanded] = useState(false);

  const handleUploadComplete = (fileName: string) => {
    setUploadedFileName(fileName);
    setUploadState('complete');
    // Auto-expand the Proposal info section after upload
    setIsProposalInfoExpanded(true);
  };

  const handleDelete = () => {
    setUploadState('idle');
    setUploadedFileName(null);
    setIsProposalInfoExpanded(false);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex">
      {/* Left Panel - Fixed Width 632px */}
      <div className="bg-white w-[632px] shrink-0 flex flex-col relative">
        {/* Top Header */}
        <div className="shrink-0 w-full border-b border-[#d6d8db]">
          <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[16px] relative w-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic text-[#1d1e20] text-[18px] text-center">
              Add proposal
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="shrink-0 w-full relative border-b border-[#d6d8db]">
          <div className="box-border content-stretch flex items-center justify-between pb-0 pt-[16px] px-0 relative w-full">
            <div className="relative shrink-0 w-[632px]">
              <div className="relative shrink-0">
                <div aria-hidden="true" className="absolute border-[#d6d8db] border-[0px_0px_1px] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
                <div className="flex flex-row items-end">
                  <div className="box-border content-stretch flex gap-[24px] items-end px-[16px] py-0 relative w-full">
                    {/* Info Tab - Active */}
                    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
                      <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative shrink-0">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-center text-nowrap whitespace-pre">
                          Info
                        </p>
                      </div>
                      <div className="bg-[#009696] h-[2px] shrink-0 w-full" />
                    </div>

                    {/* Term 1 Tab */}
                    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0">
                      <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative shrink-0">
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-center text-nowrap whitespace-pre">
                          Term 1
                        </p>
                      </div>
                      <div className="h-[2px] shrink-0 w-full" />
                    </div>

                    {/* Options and clauses Tab */}
                    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0">
                      <div className="box-border content-stretch flex gap-[4px] items-center px-[4px] py-0 relative shrink-0">
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-center text-nowrap whitespace-pre">
                          Options and clauses
                        </p>
                      </div>
                      <div className="h-[2px] shrink-0 w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Add term button */}
            <div className="absolute bg-white box-border content-stretch flex gap-[6px] items-center justify-center left-[508px] px-[13px] py-[6px] rounded-[4px] top-[5px]">
              <div aria-hidden="true" className="absolute border border-[#4837b9] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="relative shrink-0 size-[14px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <g clipPath="url(#clip0_plus)">
                    <path d={svgPaths.p1d46a4f2} fill="#4837B9" />
                  </g>
                  <defs>
                    <clipPath id="clip0_plus">
                      <rect fill="white" height="14" width="14" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4837b9] text-[14px] text-nowrap whitespace-pre">
                Add term
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto">
          {/* Info Section */}
          <div className="pt-[24px] pb-[24px]">
            {/* Info Header */}
            <div className="px-[16px] pb-[24px]">
              <div className="flex items-start justify-between w-full">
                <p className="font-['Inter:Bold',sans-serif] font-bold leading-[30px] not-italic text-[#1d1e20] text-[24px] text-nowrap whitespace-pre">
                  Info
                </p>
                <div className="flex gap-[8px] items-center">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#1d1e20] text-[14px] text-nowrap whitespace-pre">
                    <span className="text-[#e17605]">*</span>
                    <span>{` Required field`}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Upload Box */}
            <div className="px-[16px]">
              {uploadState === 'complete' ? (
                <UploadedFileCard fileName={uploadedFileName || 'ACME INC LOI 10-01-2025.pdf'} onDelete={handleDelete} />
              ) : (
                <ProposalUploadBox onComplete={handleUploadComplete} />
              )}
            </div>
          </div>

          {/* Proposal Info Form */}
          <ProposalInfoForm
            isExpanded={isProposalInfoExpanded}
            onToggle={() => setIsProposalInfoExpanded(!isProposalInfoExpanded)}
            isDisabled={uploadState !== 'complete'}
          />
        </div>

        {/* Bottom Buttons */}
        <div className="relative shrink-0 w-full border-t border-[#d6d8db]">
          <div className="flex flex-row justify-between items-center p-[16px]">
            {/* Left: AI Disclaimer - only shown after file upload */}
            {uploadState === 'complete' && (
              <div className="rounded-[4px]">
                <div className="box-border content-stretch flex gap-[8px] items-start pl-[8px] pr-[4px] py-[8px]">
                  <div className="box-border content-stretch flex gap-[10px] items-start px-0 py-[2px] shrink-0">
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <path d={svgPathsWarning.p3e30a100} fill="#72777e" />
                      </svg>
                    </div>
                  </div>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#72777e] text-[14px]">
                    AI responses aren't always perfect. Please verify key details.
                  </p>
                </div>
              </div>
            )}
            
            {/* Right: Buttons */}
            <div className={`flex gap-[8px] ${uploadState !== 'complete' ? 'ml-auto' : ''}`}>
              <button className="box-border flex gap-[4px] items-center justify-center px-[12px] py-[6px] rounded-[4px]">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#4837b9] text-[14px] text-center text-nowrap whitespace-pre">
                  Cancel
                </p>
              </button>
              <button className="bg-[#4837b9] box-border flex gap-[4px] items-center justify-center px-[12px] py-[6px] rounded-[4px] hover:bg-[#3d2d9f] transition-colors">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[14px] text-center text-nowrap text-white whitespace-pre">
                  Save
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content Area - Fills Remaining Space */}
      <div className="flex-1 bg-[#f8f9fa] overflow-hidden">
        {uploadState === 'complete' ? (
          <UploadedLOIView />
        ) : (
          <Term1EmptyState />
        )}
      </div>
    </div>
  );
}
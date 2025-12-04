import svgPaths from '../imports/svg-yaodx59pbd';

interface UploadedFileCardProps {
  fileName: string;
  onDelete: () => void;
}

function GradientSparkleIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_4004_363)">
          <path d={svgPaths.p1dec5e00} fill="url(#paint0_radial_4004_363)" />
          <path d={svgPaths.p11376800} fill="url(#paint1_radial_4004_363)" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(3.01441 12.8218 54.077 -23.9267 12.1443 1.58387)" gradientUnits="userSpaceOnUse" id="paint0_radial_4004_363" r="1">
            <stop stopColor="#8822AA" />
            <stop offset="1" stopColor="#181818" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(18.4237 4.33502 -34.3802 77.7684 2.57587 9.41754)" gradientUnits="userSpaceOnUse" id="paint1_radial_4004_363" r="1">
            <stop stopColor="#8822AA" />
            <stop offset="1" stopColor="#181818" />
          </radialGradient>
          <clipPath id="clip0_4004_363">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function UploadedFileCard({ fileName, onDelete }: UploadedFileCardProps) {
  const currentDate = new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
  
  return (
    <div className="bg-white overflow-clip relative rounded-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)] w-full min-h-[165px]">
      {/* File Header with Gradient Background */}
      <div className="absolute bg-gradient-to-r box-border content-stretch flex flex-col from-[rgba(201,40,255,0.05)] h-[89px] items-start left-0 pb-px pt-[20px] px-[24px] to-[rgba(85,40,255,0.05)] top-0 via-50% via-[rgba(139,40,255,0.05)] w-full">
        <div aria-hidden="true" className="absolute border-[#f0f0f0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        
        <div className="content-stretch flex h-[48px] items-start justify-between relative shrink-0 w-full">
          {/* File Info Section */}
          <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[48px] items-start relative w-full">
              {/* Gradient Paperclip Icon */}
              <div className="bg-gradient-to-b from-[#c928ff] relative rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(201,40,255,0.2),0px_4px_6px_-4px_rgba(201,40,255,0.2)] shrink-0 size-[48px] to-[#8b28ff]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
                  <div className="relative shrink-0 size-[24px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border overflow-clip relative rounded-[inherit] size-[24px]">
                      <div className="absolute bottom-0 left-[7.5%] right-[5%] top-0">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 24">
                          <path d={svgPaths.p20d90400} fill="white" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* File Name & Metadata */}
              <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[48px] items-start pb-0 pt-[4px] px-0 relative w-full">
                  <div className="h-[24px] overflow-clip relative shrink-0 w-full">
                    <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#1d1e20] text-[16px] text-nowrap top-[-1px] whitespace-pre">
                      {fileName}
                    </p>
                  </div>
                  <div className="h-[20px] relative shrink-0 w-full">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#72777e] text-[12px] top-px w-[250px]">
                      Uploaded {currentDate} by John Doe
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Delete Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="relative rounded-[8px] shrink-0 size-[32px] hover:bg-black/5 transition-colors"
          >
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
              <div className="relative shrink-0 size-[18px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border overflow-clip relative rounded-[inherit] size-[18px]">
                  <div className="absolute bottom-0 left-[7.5%] right-[5%] top-0">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
                      <path d={svgPaths.p6a77600} fill="#72777E" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Stats Section - Horizontal Row */}
      <div className="absolute box-border content-stretch flex gap-[24px] h-[32px] items-center left-[24px] pl-0 py-0 top-[113px] right-[24px]">
        {/* Stat 1 - Total Fields */}
        <div className="basis-0 grow h-[32px] min-h-px min-w-px relative shrink-0">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center relative w-full">
            <GradientSparkleIcon />
            <div className="h-[32px] relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[32px] items-start relative">
                <div className="h-[18px] relative shrink-0 w-full">
                  <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-0 whitespace-pre">
                    55 Total Fields
                  </p>
                </div>
                <div className="h-[16px] relative shrink-0 w-full">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#72777e] text-[12px] text-nowrap top-0 whitespace-pre">
                    Found and filled
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider 1 */}
        <div className="bg-[#f0f0f0] h-[32px] relative shrink-0 w-px">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] w-px" />
        </div>

        {/* Stat 2 - Economic Fields */}
        <div className="basis-0 grow h-[32px] min-h-px min-w-px relative shrink-0">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center relative w-full">
            <GradientSparkleIcon />
            <div className="h-[32px] relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[32px] items-start relative">
                <div className="h-[18px] relative shrink-0 w-full">
                  <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-0 whitespace-pre">
                    36 Economic Fields
                  </p>
                </div>
                <div className="h-[16px] relative shrink-0 w-full">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#72777e] text-[12px] text-nowrap top-0 whitespace-pre">
                    Found and filled
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider 2 */}
        <div className="bg-[#f0f0f0] h-[32px] relative shrink-0 w-px">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] w-px" />
        </div>

        {/* Stat 3 - Options */}
        <div className="basis-0 grow h-[32px] min-h-px min-w-px relative shrink-0">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center relative w-full">
            <GradientSparkleIcon />
            <div className="h-[32px] relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[32px] items-start relative">
                <div className="h-[18px] relative shrink-0 w-full">
                  <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-0 whitespace-pre">
                    3 Options
                  </p>
                </div>
                <div className="h-[16px] relative shrink-0 w-full">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#72777e] text-[12px] text-nowrap top-0 whitespace-pre">
                    Found and filled
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

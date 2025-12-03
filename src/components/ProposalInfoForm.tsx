import svgPaths from '../imports/svg-cwa273ru73';

interface ProposalInfoFormProps {
  isExpanded: boolean;
  onToggle: () => void;
  isDisabled: boolean;
}

export function ProposalInfoForm({ isExpanded, onToggle, isDisabled }: ProposalInfoFormProps) {
  return (
    <div className={`bg-white p-[16px] ${isDisabled ? 'opacity-50 pointer-events-none' : ''}`}>
      {/* Header with toggle */}
      <button
        onClick={onToggle}
        disabled={isDisabled}
        className="content-stretch flex items-center justify-between relative shrink-0 w-full mb-4 group"
      >
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[22px] not-italic relative shrink-0 text-[#1d1e20] text-[18px] text-nowrap whitespace-pre">
          Proposal info
        </p>
        <div className={`relative shrink-0 size-[14px] transition-transform ${isExpanded ? '' : 'rotate-180'}`}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g clipPath="url(#clip0_chevron)">
              <path d={svgPaths.pb79ab80} fill="#72777E" />
            </g>
            <defs>
              <clipPath id="clip0_chevron">
                <rect fill="white" height="14" width="14" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </button>

      {/* Collapsible form content */}
      {isExpanded && (
        <>
          {/* Separator */}
          <div className="bg-[#d6d8db] h-px shrink-0 w-full mb-4" />
          
          <div className="space-y-4">
            {/* Proposal name */}
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap whitespace-pre">
                    Proposal name
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
                <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0">
                  <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-row justify-end size-full">
                    <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
                      <input
                        type="text"
                        className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px] bg-transparent border-none outline-none"
                        placeholder=" "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Proposal type */}
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap whitespace-pre">
                    Proposal type
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
                <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0">
                  <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-row justify-end size-full">
                    <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
                      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">
                        Landlord Proposal
                      </p>
                      <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0">
                        <div className="box-border content-stretch flex gap-[8px] items-center px-[3px] py-[4px] relative shrink-0">
                          <div className="relative shrink-0 size-[10px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                              <g clipPath="url(#clip0_close)">
                                <path d={svgPaths.p1dfcc000} fill="#72777E" />
                              </g>
                              <defs>
                                <clipPath id="clip0_close">
                                  <rect fill="white" height="10" width="10" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Proposal date */}
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center not-italic relative shrink-0 text-nowrap whitespace-pre">
                    <p className="leading-[16px] relative shrink-0 text-[#72777e] text-[12px]">Proposal date</p>
                    <p className="leading-[16px] relative shrink-0 text-[0px] text-[12px] text-black">
                      <span className="text-[#72777e]"> </span>
                      <span className="text-[#e17605]">*</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
                <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0">
                  <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-row justify-end size-full">
                    <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
                      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">
                        09/17/2025
                      </p>
                      <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0">
                        <div className="box-border content-stretch flex gap-[8px] items-center px-[3px] py-[4px] relative shrink-0">
                          <div className="relative shrink-0 size-[10px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                              <g clipPath="url(#clip0_calendar)">
                                <g>
                                  <path clipRule="evenodd" d={svgPaths.pa70aaf0} fill="#72777E" fillRule="evenodd" />
                                  <path d="M2.5 4.75H3.5V5.75H2.5V4.75Z" fill="#72777E" />
                                  <path d="M2.5 7H3.5V8H2.5V7Z" fill="#72777E" />
                                  <path d="M4.5 4.75H5.5V5.75H4.5V4.75Z" fill="#72777E" />
                                  <path d="M6.5 4.75H7.5V5.75H6.5V4.75Z" fill="#72777E" />
                                  <path d="M4.5 7H5.5V8H4.5V7Z" fill="#72777E" />
                                  <path d="M6.5 7H7.5V8H6.5V7Z" fill="#72777E" />
                                </g>
                              </g>
                              <defs>
                                <clipPath id="clip0_calendar">
                                  <rect fill="white" height="10" width="10" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lease type */}
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap whitespace-pre">
                    Lease type
                  </p>
                </div>
                <div className="basis-0 content-stretch flex gap-[8px] grow items-start justify-end min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <g clipPath="url(#clip0_deal)">
                          <g>
                            <path d={svgPaths.p3c28ec00} fill="#4837B9" />
                            <path d={svgPaths.p3ab63a00} fill="#4837B9" />
                            <path d={svgPaths.p262dcf00} fill="#4837B9" />
                            <path d={svgPaths.p1064e600} fill="#4837B9" />
                            <path d={svgPaths.pa01cb00} fill="#4837B9" />
                            <path d={svgPaths.p2979cb00} fill="#4837B9" />
                            <path d={svgPaths.p1695f180} fill="#4837B9" />
                            <path d={svgPaths.p1006c200} fill="#4837B9" />
                            <path clipRule="evenodd" d={svgPaths.p2ceef40} fill="#4837B9" fillRule="evenodd" />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_deal">
                            <rect fill="white" height="18" width="18" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
                <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0">
                  <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-row justify-end size-full">
                    <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
                      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">
                        Modified Gross
                      </p>
                      <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0">
                        <div className="box-border content-stretch flex gap-[8px] items-center px-[3px] py-[4px] relative shrink-0">
                          <div className="relative shrink-0 size-[10px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                              <g>
                                <path d={svgPaths.p13e2ab00} fill="#1D1E20" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Discount rate */}
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap whitespace-pre">
                    Discount rate
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
                <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0">
                  <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-row justify-end size-full">
                    <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
                      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px]">
                        8%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Execution date */}
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                <div className="basis-0 content-stretch flex gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap whitespace-pre">
                    Execution date
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[360px]">
                <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0">
                  <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-row justify-end size-full">
                    <div className="box-border content-stretch flex gap-[4px] items-start justify-end px-[8px] py-[6px] relative w-full">
                      <input
                        type="text"
                        className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1e20] text-[14px] bg-transparent border-none outline-none"
                        placeholder=" "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
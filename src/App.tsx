import { useState } from "react";
import { SparklesIcon } from "./components/SparklesIcon";

export default function BrandedScenariosCc() {
  const [selectedScenario, setSelectedScenario] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [hoveredScenario, setHoveredScenario] = useState<'A' | 'B' | 'C' | 'D' | null>(null);

  const handleContinue = () => {
    if (selectedScenario) {
      alert(`Continuing with Scenario ${selectedScenario}`);
    } else {
      alert('Please select a scenario');
    }
  };

  const handleCancel = () => {
    alert('Cancelled');
  };

  return (
    <div className="bg-white relative size-full" data-name="Branded Scenarios - CC">
      <div className="absolute bg-neutral-100 h-[941px] left-0 top-0 w-[1406px]" data-name="App" />
      
      <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex h-[941px] items-center justify-center left-0 top-0 w-[1406px]" data-name="ScenarioComparisonModal">
        <div className="relative w-[1020px] h-[658px]">
          {/* Purple shadow container */}
          <div className="absolute inset-0 rounded-[12px] shadow-[0px_4px_32px_0px_rgba(127,33,187,0.5)]" />
          
          {/* Main white container with border */}
          <div className="relative bg-white box-border content-stretch flex flex-col gap-[36px] h-full items-start px-[20px] py-[34px] rounded-[12px] w-full">
            <div aria-hidden="true" className="absolute border border-[#7620cd] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
            
            {/* Header */}
            <div className="absolute box-border content-stretch flex h-[85px] items-start justify-between left-0 pb-0 pt-[16px] px-[24px] top-[18px] w-full">
              <div className="basis-0 grow h-[52px] min-h-px min-w-px relative shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[52px] items-start relative w-full">
                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1112px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-full items-center relative w-[1112px]">
                      <div className="relative shrink-0">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#1d1e20] text-[25px] text-nowrap whitespace-pre">Multiple scenarios found</p>
                        </div>
                      </div>
                      <div className="relative shrink-0 animate-[scaleBurst_1.2s_cubic-bezier(0.34,1.56,0.64,1)]">
                        <SparklesIcon />
                      </div>
                    </div>
                  </div>
                  <div className="h-[20px] relative shrink-0 w-[1112px]">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[1112px]">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[5px] not-italic text-[#1d1e20] text-[14px] text-nowrap top-[9.5px] whitespace-pre">{`This LOI includes more than one option. Select the scenario you'd like to parse so we can autofill the proposal form with the right details.`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scrollable Scenarios Section */}
            <div className="scrollable-scenarios absolute left-[20px] top-[128px] right-[20px] bottom-[100px] overflow-y-auto overflow-x-hidden">
              <div className="flex gap-[8px] p-[4px]">
                <ScenarioCard
                  scenario="A"
                  selected={selectedScenario === 'A'}
                  hovered={hoveredScenario === 'A'}
                  onSelect={() => setSelectedScenario('A')}
                  onHover={(isHovered) => setHoveredScenario(isHovered ? 'A' : null)}
                >
                  <ScenarioAContent />
                </ScenarioCard>

                <ScenarioCard
                  scenario="B"
                  selected={selectedScenario === 'B'}
                  hovered={hoveredScenario === 'B'}
                  onSelect={() => setSelectedScenario('B')}
                  onHover={(isHovered) => setHoveredScenario(isHovered ? 'B' : null)}
                >
                  <ScenarioBContent />
                </ScenarioCard>

                <ScenarioCard
                  scenario="C"
                  selected={selectedScenario === 'C'}
                  hovered={hoveredScenario === 'C'}
                  onSelect={() => setSelectedScenario('C')}
                  onHover={(isHovered) => setHoveredScenario(isHovered ? 'C' : null)}
                >
                  <ScenarioCContent />
                </ScenarioCard>

                <ScenarioCard
                  scenario="D"
                  selected={selectedScenario === 'D'}
                  hovered={hoveredScenario === 'D'}
                  onSelect={() => setSelectedScenario('D')}
                  onHover={(isHovered) => setHoveredScenario(isHovered ? 'D' : null)}
                >
                  <ScenarioDContent />
                </ScenarioCard>
              </div>
            </div>

            {/* Fixed Buttons */}
            <div className="absolute bottom-[33px] right-[24px] flex gap-[12px] z-20">
              <button
                onClick={handleCancel}
                className="bg-[#f5f7fa] border border-[#f4f5f6] border-solid h-[38px] rounded-[4px] px-4 hover:bg-[#e8ebef] transition-colors cursor-pointer"
              >
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#1d1e20] text-[14px] text-center text-nowrap whitespace-pre">Cancel</p>
              </button>

              <button
                onClick={handleContinue}
                disabled={!selectedScenario}
                className={`h-[38px] rounded-[4px] px-5 transition-all duration-300 ${
                  selectedScenario 
                    ? 'cursor-pointer hover:brightness-125 active:scale-[0.95] active:brightness-[1.35] active:duration-100' 
                    : 'cursor-not-allowed opacity-50'
                }`}
                style={{ 
                  background: 'linear-gradient(135deg, rgba(118,32,205,1) 0%, rgba(136,34,170,1) 48%, rgba(80,29,97,1) 100%)',
                  backgroundSize: '200% 200%',
                  animation: 'none'
                }}
                onMouseEnter={(e) => {
                  if (selectedScenario) {
                    e.currentTarget.style.animation = 'gradient-shift 2s ease infinite';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.animation = 'none';
                }}
              >
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[14px] text-center text-nowrap text-white whitespace-pre">Continue</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ScenarioCardProps {
  scenario: string;
  selected: boolean;
  hovered: boolean;
  onSelect: () => void;
  onHover: (isHovered: boolean) => void;
  children: React.ReactNode;
}

function ScenarioCard({ scenario, selected, hovered, onSelect, onHover, children }: ScenarioCardProps) {
  const isSelected = selected;
  const shouldShowHover = hovered && !selected;
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGradientPosition({ x, y });
  };

  // Calculate linear gradient angle based on mouse position
  const getLinearGradientAngle = () => {
    const centerX = 50;
    const centerY = 50;
    const deltaX = gradientPosition.x - centerX;
    const deltaY = gradientPosition.y - centerY;
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    return angle;
  };

  return (
    <div
      className={`relative min-w-[229px] w-[229px] rounded-[30px] cursor-pointer transition-all shrink-0 ${
        isSelected 
          ? 'border border-[#7620cd] border-solid' 
          : shouldShowHover
          ? 'border border-[#d0d5dd] border-solid'
          : 'bg-white border border-[#eff1f5] border-solid'
      }`}
      style={
        shouldShowHover
          ? {
              background: `linear-gradient(${getLinearGradientAngle()}deg, rgba(118, 32, 205, 0.04) 0%, rgba(136, 34, 170, 0.02) 30%, rgba(250, 251, 252, 1) 60%)`,
              transition: 'background 0.15s ease-out'
            }
          : isSelected
          ? { background: '#f5f7fa' }
          : {}
      }
      onClick={onSelect}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Sticky Header with radio button */}
      <div 
        className={`sticky top-0 z-10 h-[36px] mx-[11.5px] mt-[10.5px] rounded-[1.67772e+07px] transition-all duration-300 ${
          isSelected 
            ? 'shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] hover:brightness-125' 
            : shouldShowHover 
            ? 'bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)]'
            : 'bg-white'
        }`}
        style={
          isSelected 
            ? {
                background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, #7620CD 0%, #8822AA 51.46%, #181818 100%)`,
                transition: 'background 0.15s ease-out'
              }
            : {}
        }
        onMouseMove={handleMouseMove}
      >
        {!isSelected && (
          <div aria-hidden="true" className="absolute border border-[#7620cd] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
        )}
        
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
            {/* Text */}
            <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
                <p className={`absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-nowrap top-[0.5px] whitespace-pre ${
                  isSelected ? 'text-white' : 'text-[#1d1e20]'
                }`}>Scenario {scenario}</p>
              </div>
            </div>

            {/* Radio button */}
            <div className="relative shrink-0 size-[20px]">
              {isSelected ? (
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[20px]">
                  <div className="h-[20px] relative rounded-[16px] shrink-0 w-full">
                    <div className="absolute bg-white left-[6px] rounded-[1.67772e+07px] size-[8px] top-[6px]" />
                    <div className="absolute border-2 border-solid border-white left-0 rounded-[16px] size-[20px] top-0" />
                  </div>
                </div>
              ) : (
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[20px]">
                  <div className="h-[20px] relative rounded-[16px] shrink-0 w-full">
                    <div className="absolute border-2 border-[#d6d8db] border-solid left-0 rounded-[16px] size-[20px] top-0" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Fade overlay - positioned below the pill */}
        <div 
          className="absolute left-0 right-0 top-full h-[25px] pointer-events-none z-20"
          style={{
            background: isSelected 
              ? 'linear-gradient(to bottom, #f5f7fa 0%, rgba(245, 247, 250, 0) 100%)'
              : shouldShowHover
              ? `linear-gradient(to bottom, rgba(250, 251, 252, 0.95) 0%, rgba(250, 251, 252, 0) 100%)`
              : 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div 
        className="relative px-[23px] pt-[7px] pb-[20px]" 
        onMouseMove={handleMouseMove}
      >
        {children}
      </div>
    </div>
  );
}

function ScenarioAContent() {
  return (
    <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#1d1e20] text-[13px] space-y-[20px]">
      <div>
        <p className="mb-0">Rentable size</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">12,000 RSF</p>
      </div>
      <div>
        <p className="mb-0">Term duration</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">24 months</p>
      </div>
      <div>
        <p className="mb-0">Base rent</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0">1-7: $55.00 sf/year</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0">8-60: $150.00 sf/year</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">61-120: $118.00 sf/year</p>
      </div>
      <div>
        <p className="mb-0">Base rent escalation</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">13: 8.0%, annually</p>
      </div>
      <div>
        <p className="mb-0">Free rent</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0">1-12: 8.0%, one time</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0">8–31: 100%, gross</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0">10–16: 80%, gross</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">17–20: 100%, net</p>
      </div>
      <div>
        <p className="mb-0">Parking:</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">1-60: $150.00 $/qty/mo (Qty: 2)</p>
      </div>
      <div>
        <p className="mb-0">Percentage rent:</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0">1-12: Unnatural breakpoint</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0 ml-4">&gt; $24,000,000: 4.0%</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0 ml-4">&gt; $25,000,000: 5.0%</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0">13-84: Unnatural breakpoint</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal ml-4">&gt; $26,000,000: 6.0%</p>
      </div>
      <div>
        <p className="mb-0">Options and rights</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">Use, renewal, parking</p>
      </div>
      <div>
        <p className="mb-0">Lease info</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">Guarantor</p>
      </div>
      <div>
        <p className="mb-0">Tenant risks</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">Letter of credit, prepaid rent</p>
      </div>
    </div>
  );
}

function ScenarioBContent() {
  return (
    <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#1d1e20] text-[13px] space-y-[20px]">
      <div>
        <p className="mb-0">Rentable size</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">24,000 RSF</p>
      </div>
      <div>
        <p className="mb-0">Term duration</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">32 months</p>
      </div>
      <div>
        <p className="mb-0">Base rent</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">1-7: $55.00 sf/year</p>
      </div>
      <div>
        <p className="mb-0">Base rent escalation</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">13: 9.0%, annually</p>
      </div>
      <div>
        <p className="mb-0">Free rent</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0">1-12: 8.0%, one time</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0">8–31: 100%, gross</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">10–16: 80%, gross</p>
      </div>
      <div>
        <p className="mb-0">Options and rights</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">Renewal, parking</p>
      </div>
      <div>
        <p className="mb-0">Lease info</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">Guarantor</p>
      </div>
    </div>
  );
}

function ScenarioCContent() {
  return (
    <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#1d1e20] text-[13px] space-y-[20px]">
      <div>
        <p className="mb-0">Rentable size</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">12,000 RSF</p>
      </div>
      <div>
        <p className="mb-0">Term duration</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">24 months</p>
      </div>
      <div>
        <p className="mb-0">Base rent</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0">1-7: $55.00 sf/year</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0">8-60: $150.00 sf/year</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">61-120: $118.00 sf/year</p>
      </div>
      <div>
        <p className="mb-0">Base rent escalation</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">13: 8.0%, annually</p>
      </div>
      <div>
        <p className="mb-0">Free rent</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0">1-12: 8.0%, one time</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0">8–31: 100%, gross</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0">10–16: 80%, gross</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">17–20: 100%, net</p>
      </div>
      <div>
        <p className="mb-0">Parking:</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">1-60: $150.00 $/qty/mo (Qty: 2)</p>
      </div>
      <div>
        <p className="mb-0">Percentage rent:</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0">1-12: Unnatural breakpoint</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0 ml-4">&gt; $24,000,000: 4.0%</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">&gt; $25,000,000: 5.0%</p>
      </div>
      <div>
        <p className="mb-0">Options and rights</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">Use, renewal, parking</p>
      </div>
      <div>
        <p className="mb-0">Lease info</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">Guarantor</p>
      </div>
      <div>
        <p className="mb-0">Tenant risks</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">Letter of credit, prepaid rent</p>
      </div>
    </div>
  );
}

function ScenarioDContent() {
  return (
    <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#1d1e20] text-[13px] space-y-[20px]">
      <div>
        <p className="mb-0">Rentable size</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">30,000 RSF</p>
      </div>
      <div>
        <p className="mb-0">Term duration</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">60 months</p>
      </div>
      <div>
        <p className="mb-0">Base rent</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0">1-12: $50.00 sf/year</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0">13-36: $140.00 sf/year</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">37-60: $155.00 sf/year</p>
      </div>
      <div>
        <p className="mb-0">Base rent escalation</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0">13: 6.0%, annually</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">25: 5.5%, annually</p>
      </div>
      <div>
        <p className="mb-0">Free rent</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0">1-9: 100%, gross</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">10–18: 75%, gross</p>
      </div>
      <div>
        <p className="mb-0">Options and rights</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">Use, renewal, expansion, parking, first right of refusal</p>
      </div>
    </div>
  );
}
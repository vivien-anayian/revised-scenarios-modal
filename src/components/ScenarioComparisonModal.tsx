import { useState } from "react";
import { SparklesIcon } from "./SparklesIcon";

interface ScenarioData {
  id: string;
  name: string;
  fields: {
    rentableSize: string;
    termDuration: string;
    baseRent: string;
    baseRentEscalation: string;
    freeRent: string;
    optionsAndRights: string;
    leaseInfo: string;
    tenantRisks: string;
  };
}

interface ScenarioComparisonModalProps {
  onClose: () => void;
  onContinue: (selectedScenarioId: string) => void;
}

// Mock data for scenarios
const scenariosData: ScenarioData[] = [
  {
    id: "A",
    name: "Scenario A",
    fields: {
      rentableSize: "12,000 RSF",
      termDuration: "24 months",
      baseRent: "1-7: $55.00 sf/year\n8-60: $150.00 sf/year\n61-120: $118.00 sf/year",
      baseRentEscalation: "13: 8.0%, annually",
      freeRent: "1-12: 8.0%, one time\n8–31: 100%, gross\n10–16: 80%, gross\n17–20: 100%, net",
      optionsAndRights: "Use, renewal, parking",
      leaseInfo: "Guarantor",
      tenantRisks: "Letter of credit, prepaid rent",
    },
  },
  {
    id: "B",
    name: "Scenario B",
    fields: {
      rentableSize: "24,000 RSF",
      termDuration: "32 months",
      baseRent: "1-7: $55.00 sf/year",
      baseRentEscalation: "13: 9.0%, annually",
      freeRent: "1-12: 8.0%, one time\n8–31: 100%, gross\n10–16: 80%, gross",
      optionsAndRights: "Renewal, parking",
      leaseInfo: "Guarantor",
      tenantRisks: "Letter of credit",
    },
  },
  {
    id: "C",
    name: "Scenario C",
    fields: {
      rentableSize: "18,000 RSF",
      termDuration: "36 months",
      baseRent: "1-12: $60.00 sf/year\n13-36: $165.00 sf/year",
      baseRentEscalation: "13: 7.5%, annually",
      freeRent: "1-6: 100%, gross\n7–12: 50%, gross",
      optionsAndRights: "Use, renewal, expansion, parking",
      leaseInfo: "Guarantor, Security deposit",
      tenantRisks: "Letter of credit",
    },
  },
  {
    id: "D",
    name: "Scenario D",
    fields: {
      rentableSize: "30,000 RSF",
      termDuration: "60 months",
      baseRent: "1-12: $50.00 sf/year\n13-36: $140.00 sf/year\n37-60: $155.00 sf/year",
      baseRentEscalation: "13: 6.0%, annually\n25: 5.5%, annually",
      freeRent: "1-9: 100%, gross\n10–18: 75%, gross",
      optionsAndRights: "Use, renewal, expansion, parking, first right of refusal",
      leaseInfo: "Guarantor, Security deposit",
      tenantRisks: "Letter of credit, prepaid rent",
    },
  },
  {
    id: "E",
    name: "Scenario E",
    fields: {
      rentableSize: "15,000 RSF",
      termDuration: "48 months",
      baseRent: "1-12: $58.00 sf/year\n13-48: $162.00 sf/year",
      baseRentEscalation: "13: 8.5%, annually",
      freeRent: "1-8: 100%, gross",
      optionsAndRights: "Renewal, parking",
      leaseInfo: "Guarantor",
      tenantRisks: "Letter of credit",
    },
  },
];

const fieldLabels = [
  { key: "rentableSize", label: "Rentable size" },
  { key: "termDuration", label: "Term duration" },
  { key: "baseRent", label: "Base rent" },
  { key: "baseRentEscalation", label: "Base rent escalation" },
  { key: "freeRent", label: "Free rent" },
  { key: "optionsAndRights", label: "Options and rights" },
  { key: "leaseInfo", label: "Lease info" },
  { key: "tenantRisks", label: "Tenant risks" },
];

// Commented out - not currently used but keeping for future reference
// function CloseIcon() {
//   return (
//     <div className="relative shrink-0 size-[14px]">
//       <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
//         <g id="Delete">
//           <path d={svgPaths.p383cd200} fill="var(--fill-0, #72777E)" id="Shape" />
//         </g>
//       </svg>
//     </div>
//   );
// }

export default function ScenarioComparisonModal({ onClose, onContinue }: ScenarioComparisonModalProps) {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledHorizontally, setIsScrolledHorizontally] = useState(false);
  const [gradientPosition, setGradientPosition] = useState<{ [key: string]: { x: number; y: number } }>({});
  const [columnGradientPosition, setColumnGradientPosition] = useState<{ [key: string]: { x: number; y: number } }>({});

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    setIsScrolled(target.scrollTop > 0);
    setIsScrolledHorizontally(target.scrollLeft > 0);
  };

  const handleContinue = () => {
    if (selectedScenario) {
      onContinue(selectedScenario);
    }
  };

  const handlePillMouseMove = (scenarioId: string, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGradientPosition(prev => ({
      ...prev,
      [scenarioId]: { x, y }
    }));
  };

  const handleColumnMouseMove = (scenarioId: string, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Update column gradient position (for linear gradient angle calculation)
    setColumnGradientPosition(prev => ({
      ...prev,
      [scenarioId]: { x, y }
    }));
    
    // Also update pill gradient position (for radial gradient center - Option B)
    setGradientPosition(prev => ({
      ...prev,
      [scenarioId]: { x, y }
    }));
  };

  const getLinearGradientAngle = (scenarioId: string) => {
    const position = columnGradientPosition[scenarioId] || { x: 50, y: 50 };
    const centerX = 50;
    const centerY = 50;
    const deltaX = position.x - centerX;
    const deltaY = position.y - centerY;
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    return angle;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {/* 3-Layer Modal Architecture */}
      <div className="relative w-[1020px] h-[658px]">
        {/* Layer 1: Purple shadow container */}
        <div className="absolute inset-0 rounded-[12px] shadow-[0px_4px_32px_0px_rgba(127,33,187,0.5)]" />
        
        {/* Layer 2: Main white container */}
        <div className="relative bg-white rounded-[12px] h-full w-full flex flex-col">
          {/* Layer 3: Purple border overlay */}
          <div aria-hidden="true" className="absolute border border-[#7620cd] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
          
          {/* Header */}
          <div className="border-b border-[#F4F5F6] px-6 py-4 flex items-start justify-between">
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex items-center gap-2">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#1d1e20] text-[25px] text-nowrap whitespace-pre">
                  Multiple scenarios found
                </p>
                <div className="relative shrink-0 animate-[scaleBurst_1.2s_cubic-bezier(0.34,1.56,0.64,1)]">
                  <SparklesIcon />
                </div>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#1d1e20] text-[14px]">
                This LOI includes more than one option. Select the scenario you'd like to parse so we can autofill the proposal form with the right details.
              </p>
            </div>
          </div>

          {/* Table Container - Main scrollable area */}
          <div className="scrollable-table overflow-auto relative flex-1" onScroll={handleScroll}>
            <div className="inline-block min-w-full">
              {/* Sticky Header Row */}
              <div className={`flex sticky top-0 z-20 transition-shadow ${isScrolled ? "shadow-[0_2px_8px_rgba(0,0,0,0.08)]" : ""}`}>
                {/* Empty corner cell - sticky both ways */}
                <div 
                  className={`sticky left-0 z-30 border-r border-[#F4F5F6] border-b border-[#F4F5F6] w-[200px] h-[72px] -mt-[1px] bg-white transition-shadow ${isScrolledHorizontally ? "shadow-[2px_0_8px_rgba(0,0,0,0.08)]" : ""}`}
                >
                  {/* Empty space */}
                </div>
                
                {/* Scenario headers */}
                {scenariosData.map((scenario) => {
                  const position = gradientPosition[scenario.id] || { x: 50, y: 50 };
                  const isSelected = selectedScenario === scenario.id;
                  const isHovered = hoveredColumn === scenario.id;
                  const shouldShowGradient = isHovered && !isSelected && !isScrolled;
                  const angle = getLinearGradientAngle(scenario.id);
                  
                  return (
                    <div
                      key={scenario.id}
                      onMouseEnter={() => setHoveredColumn(scenario.id)}
                      onMouseLeave={() => setHoveredColumn(null)}
                      onMouseMove={(e) => handleColumnMouseMove(scenario.id, e)}
                      className={`relative flex-shrink-0 w-[240px] last:border-r-0 px-4 py-4 flex items-center justify-center transition-all duration-150 ${
                        isSelected || isHovered 
                          ? 'rounded-t-[16px]' 
                          : ''
                      }`}
                      style={
                        isScrolled
                          ? { background: '#f5f7fa' }
                          : shouldShowGradient
                          ? {
                              background: `linear-gradient(${angle}deg, rgba(118, 32, 205, 0.04) 0%, rgba(136, 34, 170, 0.02) 30%, rgba(250, 251, 252, 1) 60%)`,
                              transition: 'background 0.15s ease-out'
                            }
                          : isSelected
                          ? { background: '#f5f7fa' }
                          : { background: 'white' }
                      }
                    >
                      {/* Border overlays with dynamic color */}
                      <div 
                        aria-hidden="true" 
                        className="absolute inset-y-0 right-0 w-[1px] pointer-events-none bg-[#F4F5F6]"
                      />
                      <div 
                        aria-hidden="true" 
                        className="absolute inset-x-0 bottom-0 h-[1px] pointer-events-none bg-[#F4F5F6]"
                      />
                      
                      {selectedScenario === scenario.id ? (
                        // Selected pill with mouse-tracking radial gradient
                        <div 
                          onClick={() => setSelectedScenario(scenario.id)}
                          className="h-[36px] flex items-center justify-between gap-2 w-full px-[13px] rounded-[1.67772e+07px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] cursor-pointer transition-all duration-300 hover:brightness-125 relative z-10" 
                          style={{
                            background: `radial-gradient(circle at ${position.x}% ${position.y}%, #7620CD 0%, #8822AA 51.46%, #181818 100%)`,
                            transition: 'background 0.15s ease-out'
                          }}
                          onMouseMove={(e) => handlePillMouseMove(scenario.id, e)}
                        >
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-white text-[14px] flex-1">
                            {scenario.name}
                          </p>
                          {/* Radio button - selected */}
                          <button
                            onClick={() => setSelectedScenario(scenario.id)}
                            className="flex-shrink-0"
                            aria-label={`Select ${scenario.name}`}
                          >
                            <div className="relative size-[20px]">
                              <div className="absolute inset-0 rounded-[16px] border-2 border-white" />
                              <div className="absolute left-[6px] top-[6px] size-[8px] bg-white rounded-[1.67772e+07px]" />
                            </div>
                          </button>
                        </div>
                      ) : (
                        // Unselected pill with purple border
                        <div 
                          onClick={() => setSelectedScenario(scenario.id)}
                          className="h-[36px] flex items-center justify-between gap-2 w-full px-[13px] rounded-[1.67772e+07px] bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] cursor-pointer relative z-10"
                        >
                          {/* Purple border overlay */}
                          <div aria-hidden="true" className="absolute border border-[#7620cd] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
                          
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#1d1e20] text-[14px] flex-1">
                            {scenario.name}
                          </p>
                          {/* Radio button - unselected */}
                          <button
                            onClick={() => setSelectedScenario(scenario.id)}
                            className="flex-shrink-0"
                            aria-label={`Select ${scenario.name}`}
                          >
                            <div className="relative size-[20px]">
                              <div className="absolute inset-0 rounded-[16px] border-2 border-[#d6d8db]" />
                            </div>
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Content Rows */}
              {fieldLabels.map((field) => (
                <div key={field.key} className="flex border-b border-[#F4F5F6]">
                  {/* Sticky field label cell */}
                  <div
                    className={`sticky left-0 z-20 border-r border-[#F4F5F6] w-[200px] px-6 py-4 flex items-start bg-white relative transition-shadow ${isScrolledHorizontally ? "shadow-[2px_0_8px_rgba(0,0,0,0.08)]" : ""}`}
                  >
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#1d1e20] text-[14px] relative z-10">
                      {field.label}
                    </p>
                  </div>

                  {/* Scenario value cells */}
                  {scenariosData.map((scenario) => {
                    const isSelected = selectedScenario === scenario.id;
                    const isHovered = hoveredColumn === scenario.id;
                    const shouldShowGradient = isHovered && !isSelected;
                    const angle = getLinearGradientAngle(scenario.id);
                    
                    return (
                      <div
                        key={scenario.id}
                        onMouseEnter={() => setHoveredColumn(scenario.id)}
                        onMouseLeave={() => setHoveredColumn(null)}
                        onMouseMove={(e) => handleColumnMouseMove(scenario.id, e)}
                        className={`relative flex-shrink-0 w-[240px] last:border-r-0 px-4 py-4 flex items-start transition-all duration-150 cursor-pointer`}
                        style={
                          shouldShowGradient
                            ? {
                                background: `linear-gradient(${angle}deg, rgba(118, 32, 205, 0.04) 0%, rgba(136, 34, 170, 0.02) 30%, rgba(250, 251, 252, 1) 60%)`,
                                transition: 'background 0.15s ease-out'
                              }
                            : isSelected
                            ? { background: '#f5f7fa' }
                            : { background: 'white' }
                        }
                        onClick={() => setSelectedScenario(scenario.id)}
                      >
                        {/* Border overlay */}
                        <div 
                          aria-hidden="true" 
                          className="absolute inset-y-0 right-0 w-[1px] pointer-events-none bg-[#F4F5F6]"
                        />
                        <div 
                          aria-hidden="true" 
                          className="absolute inset-x-0 bottom-0 h-[1px] pointer-events-none bg-[#F4F5F6]"
                        />
                        
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#1d1e20] text-[14px] whitespace-pre-line relative z-10">
                          {scenario.fields[field.key as keyof ScenarioData["fields"]]}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Sticky Footer */}
          <div className="border-t border-[#F4F5F6] px-6 py-4 flex items-center justify-end gap-3 bg-white rounded-b-[12px]">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-[4px] border border-[#F4F5F6] bg-white font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#1d1e20] text-[14px] hover:bg-[#f5f5f5] transition-colors"
            >
              Cancel
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
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[14px] text-center text-nowrap text-white whitespace-pre">
                Continue
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
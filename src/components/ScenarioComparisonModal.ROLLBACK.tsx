import { useState } from "react";
import svgPaths from "../imports/svg-g1o36b8td1";
import sparklesIcon from "figma:asset/9537fc666b9bba5437c2224bc378edb224ed708a.png";

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

function CloseIcon() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Delete">
          <path d={svgPaths.p383cd200} fill="var(--fill-0, #72777E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

export function ScenarioComparisonModal({ onClose, onContinue }: ScenarioComparisonModalProps) {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledHorizontally, setIsScrolledHorizontally] = useState(false);

  const handleContinue = () => {
    if (selectedScenario) {
      onContinue(selectedScenario);
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    const scrollLeft = e.currentTarget.scrollLeft;
    setIsScrolled(scrollTop > 0);
    setIsScrolledHorizontally(scrollLeft > 0);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {/* Gradient border wrapper - 4px thick with 3D shadow */}
      <div className="p-[4px] rounded-[12px] mx-4 shadow-[0_4px_12px_rgba(0,0,0,0.15),0_2px_4px_rgba(0,0,0,0.1)]" style={{ background: 'linear-gradient(266deg, #8C82FF 1.18%, #673FFF 96.05%)' }}>
        <div className="bg-white rounded-[12px] shadow-xl w-[1160px] flex flex-col">
          {/* Header */}
          <div className="border-b border-[#F4F5F6] px-6 py-4 flex items-start justify-between">
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex items-center gap-2">
                <img src={sparklesIcon} alt="" className="w-[16px] h-[20px]" />
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#1d1e20] text-[16px]">
                  Multiple scenarios found
                </p>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#1d1e20] text-[14px]">
                This LOI includes more than one option. Select the scenario you'd like to parse so we can autofill the proposal form with the right details.
              </p>
            </div>
          </div>

          {/* Table Container - Main scrollable area */}
          <div className="overflow-auto relative max-h-[480px]" onScroll={handleScroll}>
            <div className="inline-block min-w-full">
              {/* Sticky Header Row */}
              <div className={`flex sticky top-0 z-20 transition-shadow ${isScrolled ? "shadow-[0_2px_8px_rgba(0,0,0,0.08)]" : ""}`}>
                {/* Empty corner cell - sticky both ways */}
                <div className={`sticky left-0 z-30 bg-white border-r border-[#F4F5F6] border-b border-[#F4F5F6] w-[200px] h-[72px] -mt-[1px] transition-shadow ${isScrolledHorizontally ? "shadow-[2px_0_8px_rgba(0,0,0,0.08)]" : ""}`}>
                  {/* Empty space */}
                </div>
                
                {/* Scenario headers */}
                {scenariosData.map((scenario, colIndex) => (
                  <div
                    key={scenario.id}
                    onMouseEnter={() => setHoveredColumn(scenario.id)}
                    onMouseLeave={() => setHoveredColumn(null)}
                    className={`flex-shrink-0 w-[240px] border-r border-[#F4F5F6] border-b border-[#F4F5F6] last:border-r-0 px-4 py-4 flex items-center justify-center transition-colors ${
                      selectedScenario === scenario.id || hoveredColumn === scenario.id 
                        ? 'bg-[#EBEBFF] rounded-t-[16px]' 
                        : "bg-white"
                    }`}
                  >
                    {selectedScenario === scenario.id ? (
                      // Branded pill style for selected scenario with radial gradient
                      <div 
                        onClick={() => setSelectedScenario(scenario.id)}
                        className="flex items-center justify-between gap-2 w-full px-3 py-2 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.1)] cursor-pointer" 
                        style={{ background: 'radial-gradient(1230.5% 194.01% at -20.09% -18.75%, #7620CD 0%, #8822AA 51.46%, #181818 100%)' }}
                      >
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-white text-[14px] flex-1">
                          {scenario.name}
                        </p>
                        {/* Radio button */}
                        <button
                          onClick={() => setSelectedScenario(scenario.id)}
                          className="flex-shrink-0"
                          aria-label={`Select ${scenario.name}`}
                        >
                          <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[2px] relative rounded-[16px] shrink-0 size-[20px]">
                            <div className="absolute inset-0 pointer-events-none rounded-[16px] border-2 border-white" />
                            <div className="size-[8px] bg-white rounded-full" />
                          </div>
                        </button>
                      </div>
                    ) : (
                      // Normal style for non-selected scenarios with purple border and drop shadow
                      <div 
                        onClick={() => setSelectedScenario(scenario.id)}
                        className="flex items-center justify-between gap-2 w-full px-3 py-2 rounded-full border border-[#7620CD] bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] cursor-pointer"
                      >
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#1d1e20] text-[14px] flex-1">
                          {scenario.name}
                        </p>
                        {/* Radio button */}
                        <button
                          onClick={() => setSelectedScenario(scenario.id)}
                          className="flex-shrink-0"
                          aria-label={`Select ${scenario.name}`}
                        >
                          <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[2px] relative rounded-[16px] shrink-0 size-[20px]">
                            <div className="absolute inset-0 pointer-events-none rounded-[16px] border-2 border-[#d6d8db]" />
                          </div>
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Content Rows */}
              {fieldLabels.map((field, rowIndex) => (
                <div key={field.key} className="flex border-b border-[#F4F5F6]">
                  {/* Sticky field label cell */}
                  <div
                    className={`sticky left-0 z-10 border-r border-[#F4F5F6] w-[200px] px-6 py-4 flex items-start relative bg-white transition-shadow ${isScrolledHorizontally ? "shadow-[2px_0_8px_rgba(0,0,0,0.08)]" : ""}`}
                  >
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#1d1e20] text-[14px] relative z-10">
                      {field.label}
                    </p>
                  </div>

                  {/* Scenario value cells */}
                  {scenariosData.map((scenario, colIndex) => (
                    <div
                      key={scenario.id}
                      onMouseEnter={() => setHoveredColumn(scenario.id)}
                      onMouseLeave={() => setHoveredColumn(null)}
                      className={`flex-shrink-0 w-[240px] border-r border-[#F4F5F6] last:border-r-0 px-4 py-4 flex items-start transition-colors ${
                        selectedScenario === scenario.id || hoveredColumn === scenario.id ? "bg-[#EBEBFF]" : "bg-white"
                      }`}
                    >
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#1d1e20] text-[14px] whitespace-pre-line">
                        {scenario.fields[field.key as keyof ScenarioData["fields"]]}
                      </p>
                    </div>
                  ))}
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
              className={`px-4 py-2 rounded-[4px] font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[14px] transition-colors ${
                selectedScenario
                  ? "bg-[#4837b9] text-white hover:bg-[#3d2d9a]"
                  : "bg-[#d6d8db] text-[#72777e] cursor-not-allowed"
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

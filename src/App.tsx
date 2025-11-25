import { useState } from "react";
import { ScenarioComparisonModal } from "./components/ScenarioComparisonModal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-8">
      {isModalOpen && (
        <ScenarioComparisonModal
          onClose={() => setIsModalOpen(false)}
          onContinue={(selectedScenario) => {
            console.log("Selected scenario:", selectedScenario);
            setIsModalOpen(false);
          }}
        />
      )}
      
      {!isModalOpen && (
        <div className="text-center">
          <p className="text-[#72777e] mb-4">Modal closed</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#4837b9] text-white px-4 py-2 rounded-lg"
          >
            Reopen Modal
          </button>
        </div>
      )}
    </div>
  );
}

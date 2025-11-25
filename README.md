# Revised Scenarios Modal

A React component for displaying and comparing multiple scenario options in a modal interface. This project was originally designed in Figma and exported as a functional React component.

## Features

- **Interactive Scenario Comparison**: Side-by-side comparison of up to 5 scenarios
- **Sticky Headers**: Column headers and row labels remain visible while scrolling
- **Responsive Design**: Horizontal and vertical scrolling with visual feedback
- **Column Highlighting**: Hover effect to highlight entire columns
- **Radio Selection**: Single scenario selection with visual feedback
- **Clean UI**: Modern design with smooth transitions and shadow effects

## Original Design

The original Figma design is available at: https://www.figma.com/design/fzHDr4fYydrOG09T0ub32B/Revised-Scenarios-Modal

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling
- **Radix UI** - Accessible UI primitives
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Revised-Scenarios-Modal
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The application will open automatically at http://localhost:3000

### Build

Create a production build:
```bash
npm run build
```

The built files will be in the `build/` directory.

### Preview Production Build

After building, you can preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── ScenarioComparisonModal.tsx  # Main modal component
│   │   ├── figma/                        # Figma-exported utilities
│   │   └── ui/                           # Reusable UI components
│   ├── assets/                           # Image assets
│   ├── imports/                          # SVG paths and utilities
│   ├── App.tsx                           # Root component
│   ├── main.tsx                          # Entry point
│   └── index.css                         # Global styles (Tailwind)
├── index.html                            # HTML template
├── vite.config.ts                        # Vite configuration
├── tsconfig.json                         # TypeScript configuration
└── package.json                          # Dependencies and scripts
```

## Usage

The `ScenarioComparisonModal` component can be integrated into your application:

```tsx
import { ScenarioComparisonModal } from './components/ScenarioComparisonModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ScenarioComparisonModal
      onClose={() => setIsModalOpen(false)}
      onContinue={(selectedScenarioId) => {
        console.log('Selected:', selectedScenarioId);
        // Handle scenario selection
      }}
    />
  );
}
```

## Customization

The component uses mock data for scenarios. To use your own data, modify the `scenariosData` array in `ScenarioComparisonModal.tsx`.

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

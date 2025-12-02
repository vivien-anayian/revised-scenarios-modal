# Brand Styling Dev Handoff

## Overview
This document provides implementation details for the interactive scenario comparison modal with custom animations, gradient effects, and responsive interactions.

---

## 1. Sparkles SVG + Animation

### Visual Description
A dual-sparkle icon with purple gradient fills that animates with a "burst" effect on page load. The sparkles scale from small to large with an elastic bounce, creating an eye-catching reveal animation.

### SVG Implementation

**Component**: `/components/SparklesIcon.tsx`

```tsx
export function SparklesIcon() {
  return (
    <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <foreignObject x="9.6987" y="-4.80143" width="24.1027" height="24.1087">
        <div xmlns="http://www.w3.org/1999/xhtml" style={{backdropFilter: 'blur(2.4px)', clipPath: 'url(#bgblur_0_5188_392_clip_path)', height: '100%', width: '100%'}}></div>
      </foreignObject>
      <path data-figma-bg-blur-radius="4.80143" d="M20.2128 11.1983L21.4323 14.2899C21.501 14.4658 21.7 14.5516 21.876 14.4815C21.9633 14.4472 22.0335 14.3771 22.0678 14.2899L23.2873 11.1983C23.7253 10.0915 24.6013 9.21633 25.7092 8.77876L28.7837 7.56042C28.9598 7.49178 29.0457 7.29301 28.9755 7.11713C28.9412 7.0299 28.871 6.95983 28.7837 6.92551L25.7092 5.70717C24.6013 5.27102 23.7239 4.39445 23.2873 3.28764L22.0678 0.21605C21.9991 0.0401631 21.8002 -0.0456357 21.6241 0.0244331C21.5368 0.0587526 21.4666 0.128821 21.4323 0.21605L20.2128 3.28764C19.7762 4.39444 18.8988 5.27102 17.7909 5.70716L14.7164 6.9255C14.5403 6.99414 14.4544 7.19291 14.5246 7.3688C14.5589 7.45603 14.6291 7.52609 14.7164 7.56041L17.7909 8.77876C18.8988 9.21633 19.7748 10.0915 20.2128 11.1983Z" fill="url(#paint0_radial_5188_392)"/>
      <foreignObject x="-4.80143" y="3.35824" width="30.4464" height="30.4551">
        <div xmlns="http://www.w3.org/1999/xhtml" style={{backdropFilter: 'blur(2.4px)', clipPath: 'url(#bgblur_1_5188_392_clip_path)', height: '100%', width: '100%'}}></div>
      </foreignObject>
      <path data-figma-bg-blur-radius="4.80143" d="M16.0908 16.3751L20.5331 18.1288C20.7859 18.2277 20.9091 18.5138 20.8085 18.767C20.7591 18.8925 20.6585 18.9934 20.5331 19.0428L16.0908 20.7966C14.5004 21.4265 13.2429 22.6862 12.6142 24.2794L10.8636 28.701C10.7649 28.9541 10.4793 29.0777 10.2266 28.9768C10.1013 28.9274 10.0006 28.8265 9.95125 28.701L8.20062 24.2794C7.57393 22.6862 6.31437 21.4244 4.72401 20.7966L0.310442 19.0428C0.0577098 18.944 -0.0655743 18.6579 0.0351075 18.4047C0.084421 18.2791 0.185103 18.1782 0.310442 18.1288L4.72401 16.3751C6.31437 15.7472 7.57392 14.4854 8.20061 12.8922L9.95125 8.47067C10.0499 8.21748 10.3355 8.09398 10.5882 8.19484C10.7136 8.24424 10.8142 8.3451 10.8635 8.47067L12.6142 12.8922C13.2429 14.4854 14.5004 15.7452 16.0908 16.3751Z" fill="url(#paint1_radial_5188_392)"/>
      <defs>
        <clipPath id="bgblur_0_5188_392_clip_path" transform="translate(-9.6987 4.80143)">
          <path d="M20.2128 11.1983L21.4323 14.2899C21.501 14.4658 21.7 14.5516 21.876 14.4815C21.9633 14.4472 22.0335 14.3771 22.0678 14.2899L23.2873 11.1983C23.7253 10.0915 24.6013 9.21633 25.7092 8.77876L28.7837 7.56042C28.9598 7.49178 29.0457 7.29301 28.9755 7.11713C28.9412 7.0299 28.871 6.95983 28.7837 6.92551L25.7092 5.70717C24.6013 5.27102 23.7239 4.39445 23.2873 3.28764L22.0678 0.21605C21.9991 0.0401631 21.8002 -0.0456357 21.6241 0.0244331C21.5368 0.0587526 21.4666 0.128821 21.4323 0.21605L20.2128 3.28764C19.7762 4.39444 18.8988 5.27102 17.7909 5.70716L14.7164 6.9255C14.5403 6.99414 14.4544 7.19291 14.5246 7.3688C14.5589 7.45603 14.6291 7.52609 14.7164 7.56041L17.7909 8.77876C18.8988 9.21633 19.7748 10.0915 20.2128 11.1983Z"/>
        </clipPath>
        <clipPath id="bgblur_1_5188_392_clip_path" transform="translate(4.80143 -3.35824)">
          <path d="M16.0908 16.3751L20.5331 18.1288C20.7859 18.2277 20.9091 18.5138 20.8085 18.767C20.7591 18.8925 20.6585 18.9934 20.5331 19.0428L16.0908 20.7966C14.5004 21.4265 13.2429 22.6862 12.6142 24.2794L10.8636 28.701C10.7649 28.9541 10.4793 29.0777 10.2266 28.9768C10.1013 28.9274 10.0006 28.8265 9.95125 28.701L8.20062 24.2794C7.57393 22.6862 6.31437 21.4244 4.72401 20.7966L0.310442 19.0428C0.0577098 18.944 -0.0655743 18.6579 0.0351075 18.4047C0.084421 18.2791 0.185103 18.1782 0.310442 18.1288L4.72401 16.3751C6.31437 15.7472 7.57392 14.4854 8.20061 12.8922L9.95125 8.47067C10.0499 8.21748 10.3355 8.09398 10.5882 8.19484C10.7136 8.24424 10.8142 8.3451 10.8635 8.47067L12.6142 12.8922C13.2429 14.4854 14.5004 15.7452 16.0908 16.3751Z"/>
        </clipPath>
        <radialGradient id="paint0_radial_5188_392" cx="0" cy="0" r="1" gradientTransform="matrix(5.02401 21.3697 90.1284 -39.8778 19.7405 2.63979)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8822AA"/>
          <stop offset="1" stopColor="#181818"/>
        </radialGradient>
        <radialGradient id="paint1_radial_5188_392" cx="0" cy="0" r="1" gradientTransform="matrix(30.7061 7.22504 -57.3004 129.614 3.79311 15.6959)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8822AA"/>
          <stop offset="1" stopColor="#181818"/>
        </radialGradient>
      </defs>
    </svg>
  );
}
```

### Animation Implementation

**Keyframe Animation** (in `globals.css`):

```css
@keyframes scaleBurst {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  60% {
    transform: scale(1.25);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
```

**Usage** (in your component):

```tsx
<div className="relative shrink-0 animate-[scaleBurst_1.2s_cubic-bezier(0.34,1.56,0.64,1)]">
  <SparklesIcon />
</div>
```

### Technical Specifications

| Property | Value | Notes |
|----------|-------|-------|
| **Duration** | `1.2s` | Slow, noticeable reveal |
| **Timing Function** | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Elastic bounce effect |
| **Initial Scale** | `0.3` | Starts small |
| **Peak Scale** | `1.25` (at 60%) | Overshoots slightly |
| **Final Scale** | `1.0` | Settles to normal size |
| **Opacity** | `0 → 1` | Fades in during animation |

### Implementation Notes

- ✅ Animation triggers **on page load** (no delay)
- ✅ Runs **once** (not infinite)
- ✅ The elastic cubic-bezier creates a satisfying "bounce" effect
- ✅ SVG gradients use brand purple colors (`#8822AA` → `#181818`)

---

## 2. Continue Button - Gradient Animation, Hover, Click

### Visual Description
A vibrant purple gradient button that animates with a flowing gradient shift on hover and pulses/scales on click. The gradient smoothly travels across the button surface, creating a premium interactive feel.

### Base Button Implementation

```tsx
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
```

### Gradient Animation Keyframes

```css
/* Gradient shift animation for Continue button */
@keyframes gradient-shift {
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
```

### Technical Specifications

#### Gradient Colors
```css
linear-gradient(135deg, 
  rgba(118, 32, 205, 1) 0%,    /* #7620CD - Brand Purple */
  rgba(136, 34, 170, 1) 48%,   /* #8822AA - Mid Purple */
  rgba(80, 29, 97, 1) 100%     /* #501D61 - Dark Purple */
)
```

#### States & Transitions

| State | Effect | Technical Details |
|-------|--------|-------------------|
| **Disabled** | Dimmed, no interaction | `opacity: 50%`<br/>`cursor: not-allowed`<br/>`disabled={!selectedScenario}` |
| **Default** | Static gradient | `background-size: 200% 200%` allows gradient to shift |
| **Hover** | Gradient animation + brightness | `animation: gradient-shift 2s ease infinite`<br/>`brightness(125%)`<br/>**Only active when enabled** |
| **Active (Click)** | Scale down + brightness boost | `transform: scale(0.95)`<br/>`brightness(135%)`<br/>`duration: 100ms` (fast response) |
| **Transition** | Smooth state changes | `transition-all duration-300` |

#### Disabled State Implementation

**When no scenario is selected**, the button is disabled:

```tsx
disabled={!selectedScenario}
className={`... ${
  selectedScenario 
    ? 'cursor-pointer hover:brightness-125 active:scale-[0.95] active:brightness-[1.35] active:duration-100' 
    : 'cursor-not-allowed opacity-50'
}`}
```

**Conditional Animation:**
```tsx
onMouseEnter={(e) => {
  if (selectedScenario) {  // Only animate when enabled
    e.currentTarget.style.animation = 'gradient-shift 2s ease infinite';
  }
}}
```

**State Logic:**
- Button starts **disabled by default** (no scenario selected)
- Becomes **enabled** once user selects any scenario (A, B, C, or D)
- Hover effects **only activate** when button is enabled
- Provides clear visual feedback with reduced opacity when disabled

#### Interaction Flow

```
Disabled → (Select Scenario) → Default → Hover → Active → Hover → Default
   ↓                              ↓         ↓        ↓        ↓       ↓
Dimmed                          Static   Animate   Scale    Animate  Static
50% opacity                              +Bright   +Bright  +Bright
cursor: not-allowed
```

### Implementation Notes

- ✅ **Gradient shift only activates on hover** (performance optimization)
- ✅ **Background size 200%** allows the gradient to move smoothly
- ✅ **Active state uses shorter duration** (100ms) for immediate feedback
- ✅ **Brightness filter** creates glow effect without additional elements
- ⚠️ Test on different browsers - `backdrop-filter` may need prefixes

---

## 3. Scenario Pills Effects

### Visual Description
Pill-shaped headers that stick to the top of each scenario card. When selected, they transform into a radial gradient that follows mouse movement. Unselected pills have a purple border and white background.

### Implementation

```tsx
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
```

### Mouse Tracking Implementation

```tsx
// State for tracking mouse position
const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

// Mouse move handler
const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  setGradientPosition({ x, y });
};
```

### Technical Specifications

#### Pill States

| State | Background | Border | Text Color | Radio Button |
|-------|-----------|--------|-----------|--------------|
| **Default** | `white` | `1px solid #7620cd` | `#1d1e20` | Outlined (gray) |
| **Hovered** | `white` | `1px solid #7620cd` | `#1d1e20` | Outlined (gray) |
| **Selected** | Radial gradient (mouse-tracking) | `none` | `white` | Filled (white) |
| **Selected + Hover** | Gradient + `brightness(125%)` | `none` | `white` | Filled (white) |

#### Radial Gradient (Selected State)

```css
radial-gradient(
  circle at [mouseX]% [mouseY]%,
  #7620CD 0%,      /* Brand Purple - center */
  #8822AA 51.46%,  /* Mid Purple */
  #181818 100%     /* Almost Black - edges */
)
```

#### Sticky Positioning

```css
position: sticky;
top: 0;
z-index: 10;
```

- ✅ Pills **stick to the top** when scrolling within scenario cards
- ✅ `z-index: 10` keeps pills above content
- ✅ Each scenario card scrolls independently

#### Fade Overlay

The pill has a **25px fade overlay** below it that blends with the card background:

```tsx
<div 
  className="absolute left-0 right-0 top-full h-[25px] pointer-events-none z-20"
  style={{
    background: isSelected 
      ? 'linear-gradient(to bottom, #f5f7fa 0%, rgba(245, 247, 250, 0) 100%)'
      : 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0) 100%)'
  }}
/>
```

### Implementation Notes

- ✅ **Radial gradient follows mouse in real-time** using `onMouseMove`
- ✅ **Transition duration: 0.15s** for smooth gradient movement
- ✅ **Border radius: 1.67772e+07px** (effectively infinite) for perfect pill shape
- ✅ **Fade overlay prevents harsh edge** where sticky pill meets scrolling content
- ⚠️ Mouse tracking updates on every move - consider throttling for performance if needed

---

## 4. Scenario Card Effects

### Visual Description
Scenario cards feature a sophisticated dynamic gradient system that responds to mouse movement. On hover, a subtle purple gradient follows the cursor position with a calculated angle. When selected, the entire card background changes to a light gray.

### Card Container Implementation

```tsx
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
  {/* Content */}
</div>
```

### Dynamic Gradient Angle Calculation

```tsx
// Calculate linear gradient angle based on mouse position
const getLinearGradientAngle = () => {
  const centerX = 50;
  const centerY = 50;
  const deltaX = gradientPosition.x - centerX;
  const deltaY = gradientPosition.y - centerY;
  const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  return angle;
};
```

### Technical Specifications

#### Card States

| State | Border | Background | Shadow |
|-------|--------|-----------|--------|
| **Default** | `1px solid #eff1f5` (light gray) | `white` | None |
| **Hovered** | `1px solid #d0d5dd` (medium gray) | Mouse-tracking linear gradient | None |
| **Selected** | `1px solid #7620cd` (purple) | `#f5f7fa` (light gray) | None |

#### Hover Gradient (Mouse-Tracking)

```css
linear-gradient(
  [calculated angle based on mouse]deg,
  rgba(118, 32, 205, 0.04) 0%,   /* Very subtle purple at cursor */
  rgba(136, 34, 170, 0.02) 30%,  /* Fades to lighter purple */
  rgba(250, 251, 252, 1) 60%     /* Transitions to white */
)
```

**Gradient Behavior:**
- Gradient **origin point** follows the mouse cursor
- Gradient **angle** calculated using `Math.atan2()` based on cursor position relative to card center
- Gradient **fades from purple → white** in the direction away from cursor
- Updates every `0.15s` for smooth movement without jank

#### Dimensions

```css
width: 229px;
min-width: 229px;
border-radius: 30px;
```

### Mouse Tracking System

The same mouse tracking used for pills also powers the card gradient:

```tsx
const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  setGradientPosition({ x, y });
};
```

### Implementation Notes

- ✅ **All borders are consistently 1px** across all states
- ✅ **Gradient angle dynamically calculates** using arctangent of mouse position
- ✅ **Transition: 0.15s ease-out** prevents jerky gradient movement
- ✅ **Cards are 229px wide** and use `shrink-0` to prevent compression
- ✅ **Border radius: 30px** creates smooth, rounded corners
- ⚠️ Consider **debouncing mouse events** if performance issues arise on lower-end devices
- ⚠️ The gradient is **very subtle** (opacity 0.02-0.04) for a premium feel

---

## 5. Smooth Content Scrolling Inside Scenario Cards

### Visual Description
All scenario cards scroll together in a synchronized container with an auto-hiding scrollbar that only appears on hover or during active scrolling. The scrollbar is thin and subtle to maintain visual cleanliness.

### Scrollable Container Implementation

```tsx
{/* Scrollable Scenarios Section */}
<div className="scrollable-scenarios absolute left-[20px] top-[128px] right-[20px] bottom-[100px] overflow-y-auto overflow-x-hidden">
  <div className="flex gap-[8px] p-[4px]">
    <ScenarioCard scenario="A" {...props}>
      <ScenarioAContent />
    </ScenarioCard>
    
    <ScenarioCard scenario="B" {...props}>
      <ScenarioBContent />
    </ScenarioCard>
    
    {/* ... more cards */}
  </div>
</div>
```

### Auto-Hide Scrollbar CSS

```css
/* Auto-hide scrollbar - only show on scroll */
.scrollable-scenarios {
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  transition: scrollbar-color 0.3s ease;
}

.scrollable-scenarios:hover,
.scrollable-scenarios:active {
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
}

/* For Webkit browsers (Chrome, Safari, Edge) */
.scrollable-scenarios::-webkit-scrollbar {
  width: 8px;
}

.scrollable-scenarios::-webkit-scrollbar-track {
  background: transparent;
}

.scrollable-scenarios::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.scrollable-scenarios:hover::-webkit-scrollbar-thumb,
.scrollable-scenarios:active::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
}

.scrollable-scenarios::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
```

### Technical Specifications

#### Container Positioning

```css
position: absolute;
left: 20px;
top: 128px;
right: 20px;
bottom: 100px;
overflow-y: auto;
overflow-x: hidden;
```

**Layout Breakdown:**
- **Top**: `128px` from modal top (below header)
- **Bottom**: `100px` from modal bottom (above fixed buttons)
- **Left/Right**: `20px` padding from edges
- **Overflow**: Vertical scroll enabled, horizontal hidden

#### Scrollbar Behavior

| State | Scrollbar Color | Opacity | Notes |
|-------|----------------|---------|-------|
| **Default** | `transparent` | `0` | Invisible |
| **Hover** | `rgba(0, 0, 0, 0.2)` | `0.2` | Subtle gray |
| **Active (Scrolling)** | `rgba(0, 0, 0, 0.2)` | `0.2` | Same as hover |
| **Scrollbar Hover** | `rgba(0, 0, 0, 0.3)` | `0.3` | Slightly darker |

#### Scrollbar Dimensions

```css
width: 8px;           /* Thin scrollbar */
border-radius: 4px;   /* Rounded edges */
```

### Synchronized Scrolling

**Key Point:** All scenario cards are siblings in a flex container, so they **scroll together** as a single unit.

```tsx
<div className="flex gap-[8px] p-[4px]">
  {/* All cards scroll together */}
  <ScenarioCard />
  <ScenarioCard />
  <ScenarioCard />
  <ScenarioCard />
</div>
```

### Individual Card Scrolling

**Cards DO NOT scroll individually.** The sticky pills remain at the top of each card while the container scrolls.

```tsx
/* Sticky pill stays at top during scroll */
<div className="sticky top-0 z-10">
  {/* Pill content */}
</div>

/* Content scrolls normally */
<div className="relative px-[23px] pt-[7px] pb-[20px]">
  {children}
</div>
```

### Implementation Notes

- ✅ **Scrollbar fades in/out smoothly** with `0.3s` transition
- ✅ **Thin 8px scrollbar** maintains visual cleanliness
- ✅ **All cards scroll together** (synchronized horizontal scrolling)
- ✅ **Sticky pills remain visible** during scroll
- ✅ **Firefox and Webkit support** with separate CSS rules
- ✅ **Gap between cards: 8px** for visual separation
- ⚠️ Test scrollbar behavior across browsers - Firefox uses `scrollbar-width`, WebKit uses `::-webkit-scrollbar`
- ⚠️ Mobile devices may show native scrollbars - consider touch-specific styles

---

## 6. Modal Frame Outline Styling - Border + Drop Shadow

### Visual Description
The modal has a distinctive purple border with a matching purple drop shadow that creates a glowing effect around the entire frame. The shadow is large (32px blur) and purple-tinted, creating a premium branded appearance.

### Implementation

```tsx
<div className="relative w-[1020px] h-[658px]">
  {/* Purple shadow container */}
  <div className="absolute inset-0 rounded-[12px] shadow-[0px_4px_32px_0px_rgba(127,33,187,0.5)]" />
  
  {/* Main white container with border */}
  <div className="relative bg-white box-border content-stretch flex flex-col gap-[36px] h-full items-start px-[20px] py-[34px] rounded-[12px] w-full">
    <div aria-hidden="true" className="absolute border border-[#7620cd] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
    
    {/* Modal content */}
  </div>
</div>
```

### Technical Specifications

#### Drop Shadow

```css
box-shadow: 0px 4px 32px 0px rgba(127, 33, 187, 0.5);
```

**Shadow Breakdown:**
| Property | Value | Description |
|----------|-------|-------------|
| **Offset X** | `0px` | No horizontal offset (centered) |
| **Offset Y** | `4px` | Slight downward offset |
| **Blur Radius** | `32px` | Large, soft blur for glow effect |
| **Spread** | `0px` | No spread |
| **Color** | `rgba(127, 33, 187, 0.5)` | Purple (#7F21BB) at 50% opacity |

#### Border

```css
border: 1px solid #7620cd;
border-radius: 13px;
```

**Border Details:**
- **Width**: `1px` (consistent with all other borders in the design)
- **Color**: `#7620CD` (Brand Purple)
- **Style**: `solid`
- **Position**: Applied to an absolutely positioned div with `inset: -1px` to overlay the main container
- **Border Radius**: `13px` (slightly larger than container's 12px to account for -1px inset)

#### Container Dimensions

```css
width: 1020px;
height: 658px;
border-radius: 12px;
background: white;
```

### Layering Strategy

The implementation uses **three layers** for proper visual separation:

```
Layer 1 (Bottom): Shadow container
  └─ absolute, inset-0
  └─ Only renders the drop shadow
  
Layer 2 (Middle): Main white container
  └─ relative positioning
  └─ Contains all modal content
  
Layer 3 (Top): Border overlay
  └─ absolute, inset: -1px
  └─ pointer-events: none (allows clicks through)
  └─ aria-hidden="true" (hidden from screen readers)
```

### Why This Architecture?

**Separate Shadow Layer:**
- Prevents shadow from being clipped by overflow
- Allows shadow to render outside modal bounds
- Easier to control shadow without affecting content

**Border Overlay:**
- `inset: -1px` positions border exactly on the edge
- `pointer-events: none` prevents interference with clickable elements
- `aria-hidden="true"` keeps border decorative (no accessibility impact)
- Separate layer allows different border radius (13px vs 12px)

### Visual Comparison

| Element | Border Radius | Position | Purpose |
|---------|--------------|----------|---------|
| **Shadow Container** | `12px` | `absolute inset-0` | Renders drop shadow |
| **Main Container** | `12px` | `relative` | Holds content |
| **Border Overlay** | `13px` | `absolute inset-[-1px]` | Renders border on top |

### Implementation Notes

- ✅ **Purple shadow matches brand color** (`#7F21BB` at 50% opacity)
- ✅ **Large blur radius (32px)** creates soft, glowing effect
- ✅ **Border uses exact brand purple** (`#7620CD`)
- ✅ **All corners are rounded** (12px main, 13px border)
- ✅ **Shadow has slight Y offset (4px)** for subtle depth
- ⚠️ **Shadow color slightly different from border** - this is intentional for visual harmony
- ⚠️ Test shadow rendering on different backgrounds - may appear different on non-white surfaces

### Color Reference

| Element | Color | Hex | RGBA |
|---------|-------|-----|------|
| **Border** | Brand Purple | `#7620CD` | `rgba(118, 32, 205, 1)` |
| **Shadow** | Purple (Adjusted) | `#7F21BB` | `rgba(127, 33, 187, 0.5)` |

**Note:** The shadow uses a slightly lighter purple (`#7F21BB`) than the border (`#7620CD`) to create a more natural glow effect.

---

## 7. "Multiple Scenarios Found" Title Styling

### Visual Description
The modal header features a bold title "Multiple scenarios found" displayed in a dark gray color (25px), positioned alongside an animated sparkles icon. The title and icon are horizontally aligned with a small gap between them.

### Implementation

```tsx
<div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-full items-center relative w-[1112px]">
  <div className="relative shrink-0">
    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#1d1e20] text-[25px] text-nowrap whitespace-pre">
        Multiple scenarios found
      </p>
    </div>
  </div>
  <div className="relative shrink-0 animate-[scaleBurst_1.2s_cubic-bezier(0.34,1.56,0.64,1)]">
    <SparklesIcon />
  </div>
</div>
```

### Technical Specifications

#### Typography

| Property | Value | Notes |
|----------|-------|-------|
| **Font Family** | `Inter Semi Bold` | Sans-serif fallback |
| **Font Weight** | `600` (semibold) | Medium-heavy weight for emphasis |
| **Font Size** | `25px` | Large, prominent heading |
| **Line Height** | `24px` | Tight line height |
| **Color** | `#1d1e20` | Dark gray (almost black) |
| **Text Style** | `not-italic` | Regular, upright text |
| **White Space** | `whitespace-pre` | Preserves exact spacing |
| **Text Wrap** | `text-nowrap` | Prevents line breaks |

#### Layout Structure

```tsx
Flex Container (gap: 8px, items-center)
├─ Title Container (shrink-0)
│  └─ Text: "Multiple scenarios found"
└─ Icon Container (shrink-0, animated)
   └─ SparklesIcon (29x30px)
```

**Container Properties:**
- **Display**: `flex`
- **Gap**: `8px` between title and icon
- **Align Items**: `center` (vertical centering)
- **Width**: `1112px` (full header width)
- **Height**: `52px` (from parent container)

#### Element Spacing

```css
gap: 8px;  /* Space between title and sparkle icon */
```

#### Text Rendering

```css
font-family: 'Inter:Semi_Bold', sans-serif;
font-weight: 600;
font-size: 25px;
line-height: 24px;
color: #1d1e20;
```

**Note:** The line height (24px) is slightly smaller than the font size (25px), creating a tight, compact appearance.

### Complete Header Context

The title is part of a larger header structure with a subtitle below:

```tsx
<div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[52px] items-start relative w-full">
  {/* Title + Icon Row */}
  <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1112px]">
    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-full items-center relative w-[1112px]">
      {/* Title */}
      <div className="relative shrink-0">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#1d1e20] text-[25px] text-nowrap whitespace-pre">
          Multiple scenarios found
        </p>
      </div>
      {/* Icon */}
      <div className="relative shrink-0 animate-[scaleBurst_1.2s_cubic-bezier(0.34,1.56,0.64,1)]">
        <SparklesIcon />
      </div>
    </div>
  </div>

  {/* Subtitle Row */}
  <div className="h-[20px] relative shrink-0 w-[1112px]">
    <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[1112px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[5px] not-italic text-[#1d1e20] text-[14px] text-nowrap top-[9.5px] whitespace-pre">
        This LOI includes more than one option. Select the scenario you'd like to parse so we can autofill the proposal form with the right details.
      </p>
    </div>
  </div>
</div>
```

### Subtitle Specifications

| Property | Value | Notes |
|----------|-------|-------|
| **Font Family** | `Inter Regular` | Sans-serif fallback |
| **Font Weight** | `400` (normal) | Regular weight |
| **Font Size** | `14px` | Smaller supporting text |
| **Line Height** | `20px` | Comfortable reading height |
| **Color** | `#1d1e20` | Same dark gray as title |
| **Position** | `absolute` | Positioned within container |
| **Left Offset** | `5px` | Slight left indent |
| **Top Offset** | `9.5px` | Precise vertical alignment |

### Visual Hierarchy

```
┌─────────────────────────────────────────────────┐
│ Multiple scenarios found ✨                     │  ← 25px, semibold
│   This LOI includes more than one option...     │  ← 14px, normal
└─────────────────────────────────────────────────┘
   ↑                                 ↑
  5px indent                      8px gap
```

### Implementation Notes

- ✅ **Title and icon aligned horizontally** with `items-center`
- ✅ **8px gap** creates breathing room between title and sparkle icon
- ✅ **Both elements use `shrink-0`** to prevent compression
- ✅ **Text uses `whitespace-pre`** to preserve exact spacing in string
- ✅ **Subtitle has 5px left offset** for subtle alignment
- ✅ **Tight line height (24px)** on large text (25px) creates compact, punchy appearance
- ⚠️ **Font family string includes weight** (`'Inter:Semi_Bold'`) - ensure this matches your font loading strategy
- ⚠️ **Absolute positioning on subtitle** requires parent to have `position: relative`

### Accessibility Considerations

```tsx
// Ensure semantic HTML structure
<h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#1d1e20] text-[25px] text-nowrap whitespace-pre">
  Multiple scenarios found
</h1>
<p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[5px] not-italic text-[#1d1e20] text-[14px] text-nowrap top-[9.5px] whitespace-pre">
  This LOI includes more than one option. Select the scenario you'd like to parse so we can autofill the proposal form with the right details.
</p>
```

**Recommendation:** Use semantic HTML tags (`<h1>` for title, `<p>` for subtitle) instead of generic `<p>` tags for both. This improves accessibility for screen readers.

### Color Contrast

**WCAG Compliance:**
- **Foreground (text)**: `#1d1e20` (dark gray)
- **Background**: `white` / `#ffffff`
- **Contrast Ratio**: ~15.8:1 ✅ (Exceeds WCAG AAA standard of 7:1)

### Responsive Considerations

**Fixed Width Layout:**
```css
width: 1112px;  /* Fixed width container */
```

⚠️ **Note:** This layout uses fixed pixel widths and may need media queries for responsive design. Consider these breakpoints:

```css
/* Tablet */
@media (max-width: 1024px) {
  .title-container {
    width: 100%;
    padding: 0 16px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .title-text {
    font-size: 20px;
    line-height: 20px;
  }
}
```

---

## Browser Compatibility

### Tested Browsers
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+

### Known Issues
- **Firefox**: `scrollbar-width: thin` may appear different from WebKit
- **Safari**: `backdrop-filter` requires `-webkit-` prefix in older versions
- **Mobile**: Native scrollbar behavior may override custom styles

### Polyfills/Fallbacks
- Consider using `-webkit-backdrop-filter` for broader Safari support
- Test gradient animations on older browsers - may need vendor prefixes

---

## Performance Considerations

### Optimization Tips

1. **Mouse Tracking**: Consider throttling `onMouseMove` events to ~60fps:
   ```tsx
   const throttledMouseMove = throttle(handleMouseMove, 16); // ~60fps
   ```

2. **Gradient Transitions**: Keep transition duration short (`0.15s`) to prevent lag

3. **Scroll Performance**: Use `will-change: transform` on scrollable container if experiencing jank:
   ```css
   .scrollable-scenarios {
     will-change: transform;
   }
   ```

4. **Animation Performance**: The `scaleBurst` animation runs once on load - no ongoing performance impact

---

## Color Palette Reference

| Color Name | Hex | RGBA | Usage |
|-----------|-----|------|-------|
| **Brand Purple** | `#7620CD` | `rgba(118, 32, 205, 1)` | Primary brand, borders, gradients |
| **Mid Purple** | `#8822AA` | `rgba(136, 34, 170, 1)` | Gradient middle stops |
| **Dark Purple** | `#501D61` | `rgba(80, 29, 97, 1)` | Gradient dark stops |
| **Almost Black** | `#181818` | `rgba(24, 24, 24, 1)` | Gradient endings, text |
| **Dark Gray** | `#1d1e20` | - | Primary text color |
| **Light Gray** | `#f5f7fa` | - | Selected card background |
| **Border Gray (light)** | `#eff1f5` | - | Default card border |
| **Border Gray (medium)** | `#d0d5dd` | - | Hover card border |
| **Border Gray (radio)** | `#d6d8db` | - | Unselected radio button |

---

## Typography Reference

All text uses the **Inter** font family with specific weights:

| Element | Font | Weight | Size | Line Height | Color |
|---------|------|--------|------|-------------|-------|
| Modal Title | Inter Semi Bold | 600 | 25px | 24px | `#1d1e20` |
| Modal Description | Inter Regular | 400 | 14px | 20px | `#1d1e20` |
| Pill Label (Default) | Inter Semi Bold | 600 | 14px | 20px | `#1d1e20` |
| Pill Label (Selected) | Inter Semi Bold | 600 | 14px | 20px | `white` |
| Card Content Headers | Inter Semi Bold | 600 | 13px | 20px | `#1d1e20` |
| Card Content Body | Inter Regular | 400 | 13px | 20px | `#1d1e20` |
| Button Text | Inter Regular | 400 | 14px | 20px | `white` |

---

## Summary Checklist

Use this checklist when implementing the design:

- [ ] **Sparkles Icon**: SVG imported with radial gradients
- [ ] **Sparkles Animation**: 1.2s scale burst with elastic easing
- [ ] **Continue Button**: 3-stop gradient at 135deg
- [ ] **Continue Hover**: Gradient shift animation (2s infinite)
- [ ] **Continue Click**: Scale to 0.95 + brightness 1.35
- [ ] **Scenario Pills**: Sticky positioning with 1.67772e+07px border radius
- [ ] **Pill Selection**: Radial gradient tracking mouse position
- [ ] **Pill Radio**: White fill when selected, gray outline when not
- [ ] **Card Hover**: Linear gradient following mouse angle
- [ ] **Card Selection**: Light gray (#f5f7fa) background
- [ ] **All Borders**: Consistent 1px width across states
- [ ] **Scrollable Container**: Auto-hide scrollbar with 0.3s fade
- [ ] **Scroll Behavior**: All cards scroll together (synchronized)
- [ ] **Fade Overlay**: 25px gradient below sticky pills
- [ ] **Mouse Tracking**: Updates gradient position at 0.15s intervals

---

## Questions or Issues?

If you encounter any implementation challenges:

1. Check browser console for CSS rendering issues
2. Verify all color values match the palette reference
3. Test mouse tracking performance - throttle if needed
4. Ensure sticky positioning works in target browsers
5. Validate gradient calculations with different mouse positions

**End of Dev Handoff**
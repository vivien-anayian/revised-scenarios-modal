# Developer Handoff: Document Scanning Animation

## Overview
This guide documents the implementation of the animated document scanning effect shown during Step 2 (processing state) of the Proposal AI upload flow. The animation provides visual feedback that a document is being analyzed by AI, featuring:

- An animated scanning line that sweeps top-to-bottom
- Sparkle particles that appear and float upward
- A percentage badge showing progress
- Document lines representing text content

**Design Intent:** Subtle, minimalistic, transparent - designed for commercial real estate brokers to understand their LOI is being processed through multiple AI extraction stages.

---

## Component Structure

### HTML/JSX Hierarchy

```tsx
<div className="relative w-16 h-20">
  {/* Document base container */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#c928ff]/10 to-[#8B28FF]/10 rounded-lg border-2 border-[#c928ff]/30">
    
    {/* Document text lines */}
    <div className="absolute top-3 left-3 right-3 space-y-1.5">
      <div className="h-1 bg-[#c928ff]/20 rounded" />
      <div className="h-1 bg-[#c928ff]/20 rounded w-4/5" />
      <div className="h-1 bg-[#c928ff]/20 rounded" />
      <div className="h-1 bg-[#c928ff]/20 rounded w-3/5" />
    </div>
    
    {/* Scanning line - moves top to bottom */}
    <div className="scanning-line absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c928ff] to-transparent" />
    
    {/* Sparkle particles - 3 particles at different positions */}
    <div className="sparkle-particle sparkle-1 absolute" style={{ width: '10px', height: '10px', opacity: 0 }}>
      <SparklesIcon className="w-full h-full opacity-25" />
    </div>
    <div className="sparkle-particle sparkle-2 absolute" style={{ width: '10px', height: '10px', opacity: 0 }}>
      <SparklesIcon className="w-full h-full opacity-25" />
    </div>
    <div className="sparkle-particle sparkle-3 absolute" style={{ width: '10px', height: '10px', opacity: 0 }}>
      <SparklesIcon className="w-full h-full opacity-25" />
    </div>
  </div>
  
  {/* Progress percentage badge */}
  <div className="absolute -top-2 -right-2 bg-gradient-to-br from-[#c928ff] to-[#8B28FF] rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
    <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[10px]">
      {Math.round(progress)}%
    </span>
  </div>
</div>
```

### Key Dimensions
- **Document container:** 64px × 80px (w-16 h-20)
- **Scanning line:** Full width × 2px height (h-0.5)
- **Sparkle particles:** 10px × 10px
- **Progress badge:** 32px × 32px (w-8 h-8)
- **Document lines:** 4px height (h-1), varying widths

---

## CSS Animations

### 1. Scanning Line Animation

**Purpose:** Creates a vertical scanning effect that sweeps from top to bottom, simulating AI reading the document.

```css
@keyframes scan {
  0% {
    top: 0;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    top: 100%;
    opacity: 0;
  }
}

.scanning-line {
  animation: scan 3.5s ease-in-out infinite;
}
```

**Technical Details:**
- **Duration:** 3.5 seconds (slowed down for transparency)
- **Easing:** ease-in-out (smooth acceleration/deceleration)
- **Loop:** Infinite
- **Gradient:** `from-transparent via-[#c928ff] to-transparent` (creates a glowing horizontal line)
- **Fade behavior:** 
  - 0-10%: Fade in from opacity 0 to 1
  - 10-90%: Full visibility while scanning
  - 90-100%: Fade out to opacity 0

---

### 2. Sparkle Particles Animation

**Purpose:** Creates magical sparkle effects that appear, scale up, float upward, then disappear - reinforcing the AI processing concept.

```css
@keyframes sparkle {
  0% {
    opacity: 0;
    transform: scale(0) translateY(0);
  }
  50% {
    opacity: 0.25;
    transform: scale(1) translateY(-8px);
  }
  100% {
    opacity: 0;
    transform: scale(0) translateY(0);
  }
}

.sparkle-particle {
  animation: sparkle 4.5s ease-in-out infinite;
}

/* Individual sparkle positions and delays */
.sparkle-1 {
  top: 20%;
  right: 10%;
  animation-delay: 0s;
}

.sparkle-2 {
  top: 50%;
  right: 15%;
  animation-delay: 1.5s;
}

.sparkle-3 {
  top: 70%;
  right: 8%;
  animation-delay: 3s;
}
```

**Technical Details:**
- **Duration:** 4.5 seconds per particle
- **Easing:** ease-in-out
- **Loop:** Infinite
- **Max opacity:** 0.25 (subtle, not distracting)
- **Float distance:** 8px upward
- **Stagger timing:** 
  - Sparkle 1: Starts immediately (0s delay)
  - Sparkle 2: Starts after 1.5s
  - Sparkle 3: Starts after 3s
- **Positioning:** Right side of document at 20%, 50%, 70% vertical positions
- **Initial state:** `opacity: 0` on container prevents flash on load

**CRITICAL:** Each sparkle container must have inline `style={{ opacity: 0 }}` to prevent a flash of full opacity on initial render. The animation handles opacity changes.

---

### 3. Icon Opacity

The SparklesIcon itself has `opacity-25` class applied, which works in conjunction with the container's animated opacity:
- Container opacity animates: 0 → 0.25 → 0
- Icon has base opacity: 0.25
- Combined effect: Very subtle sparkle that never exceeds 0.25 opacity

---

## Timing & Coordination

### Animation Timeline

```
0s    1.5s   3.0s   3.5s   4.5s   7.0s
|-----|------|------|------|------|
Scan: |████████████████|████████████████|  (repeats every 3.5s)
Sp1:  |██████|        |██████|            (repeats every 4.5s)
Sp2:  |      |██████| |      |██████|     (1.5s delay)
Sp3:  |      |      |█|█████|      |      (3.0s delay)
```

**Key Points:**
- Scanning line and sparkles have different cycle times (3.5s vs 4.5s)
- This creates natural variation - they don't sync up perfectly, avoiding repetitive patterns
- Staggered sparkle delays ensure there's always some animation happening
- Never more than 1-2 sparkles visible at once (maintains subtlety)

---

## Color Palette

All colors use the brand purple gradient system:

| Element | Color | Purpose |
|---------|-------|---------|
| Scanning line | `#c928ff` | Primary brand purple, high visibility |
| Document border | `#c928ff` at 30% opacity | Subtle outline |
| Document background | Gradient: `#c928ff/10` to `#8B28FF/10` | Very subtle purple tint |
| Document lines | `#c928ff` at 20% opacity | Simulates text content |
| Progress badge | Gradient: `#c928ff` to `#8B28FF` | Vibrant, attention-grabbing |
| Sparkles | `#c928ff` (inherited from icon) | Matches scanning line |

---

## Customization Guide

### Adjust Animation Speed

**Make scanning faster/slower:**
```css
.scanning-line {
  animation: scan 2s ease-in-out infinite; /* Faster: 2s instead of 3.5s */
}
```

**Make sparkles faster/slower:**
```css
.sparkle-particle {
  animation: sparkle 3s ease-in-out infinite; /* Faster: 3s instead of 4.5s */
}
```

### Adjust Sparkle Timing

**Change stagger delays:**
```css
.sparkle-1 { animation-delay: 0s; }
.sparkle-2 { animation-delay: 1s; }    /* Was 1.5s */
.sparkle-3 { animation-delay: 2s; }    /* Was 3s */
```

### Adjust Sparkle Intensity

**Make sparkles more visible:**
```css
@keyframes sparkle {
  50% {
    opacity: 0.5; /* Was 0.25 - now twice as bright */
    transform: scale(1) translateY(-8px);
  }
}
```

**Make sparkles float higher:**
```css
@keyframes sparkle {
  50% {
    opacity: 0.25;
    transform: scale(1) translateY(-16px); /* Was -8px - now floats double distance */
  }
}
```

### Change Sparkle Positions

```css
.sparkle-1 {
  top: 15%;    /* Was 20% */
  right: 12%;  /* Was 10% */
}
```

### Add More Sparkles

1. Add HTML element:
```tsx
<div className="sparkle-particle sparkle-4 absolute" style={{ width: '10px', height: '10px', opacity: 0 }}>
  <SparklesIcon className="w-full h-full opacity-25" />
</div>
```

2. Add CSS positioning:
```css
.sparkle-4 {
  top: 35%;
  right: 5%;
  animation-delay: 2.25s; /* Between sparkle-2 and sparkle-3 */
}
```

---

## Technical Notes & Gotchas

### 1. Initial Opacity Flash Prevention
**Problem:** Sparkles can flash at full opacity on initial page load before CSS animations apply.

**Solution:** Set inline `style={{ opacity: 0 }}` on sparkle containers:
```tsx
<div className="sparkle-particle sparkle-1" style={{ opacity: 0 }}>
```

### 2. Icon Import
**Required:** Import SparklesIcon from lucide-react:
```tsx
import { Sparkles as SparklesIcon } from 'lucide-react';
```

### 3. Positioning Context
**Critical:** Parent container must have `position: relative` for absolute positioning to work:
```tsx
<div className="relative w-16 h-20">
```

### 4. Z-Index Layering
Current stacking order (bottom to top):
1. Document background
2. Document lines
3. Scanning line
4. Sparkle particles
5. Progress badge (outside document, overlaps top-right corner)

No explicit z-index needed - DOM order handles layering correctly.

### 5. Performance Considerations
- All animations use `transform` and `opacity` (GPU-accelerated)
- No layout-triggering properties (width, height, top, left) except scanning line's `top`
- Scanning line's `top` animation is acceptable since it's a single small element
- Consider reducing sparkle count on low-end devices if needed

### 6. Accessibility
**Current implementation:** Animation is purely decorative, no ARIA labels needed.

**If adding screen reader support:**
```tsx
<div role="status" aria-live="polite" aria-label={`Processing document: ${Math.round(progress)}%`}>
  {/* Animation elements */}
</div>
```

### 7. Browser Compatibility
- CSS animations: Supported in all modern browsers
- Tailwind gradient classes: Standard CSS gradients, universal support
- No vendor prefixes needed for transform/opacity animations

---

## Integration Checklist

- [ ] Import SparklesIcon from lucide-react
- [ ] Copy HTML structure with all 3 sparkle particles
- [ ] Copy all @keyframes animations (scan, sparkle)
- [ ] Copy all class-based animation rules (.scanning-line, .sparkle-particle, etc.)
- [ ] Set inline `opacity: 0` on sparkle containers
- [ ] Ensure parent container has `position: relative`
- [ ] Verify progress state updates percentage badge
- [ ] Test animation timing (3.5s scan, 4.5s sparkles)
- [ ] Confirm sparkles never exceed 0.25 opacity
- [ ] Test on different screen sizes (animation should scale with container)

---

## Related Components

This animation is used in:
- **ProposalUploadBox.tsx** - Step 2 processing state
- Shows during all 7 AI processing stages (uploading → preparing → extracting → generating details/rent/expenses/options → finalizing)
- Coordinates with progress percentage that increases from 0% → 100%
- Works alongside ChatGPT-style loading dots for stage labels

---

## Questions or Issues?

**Common issues:**
1. Sparkles flashing on load → Add `opacity: 0` inline style
2. Animations not running → Check @keyframes are in same stylesheet scope
3. Sparkles too bright → Verify `opacity-25` class on icon AND animated max is 0.25
4. Scanning line not visible → Check gradient colors and opacity values
5. Wrong timing → Verify 3.5s for scan, 4.5s for sparkles

**Design rationale:**
- Slowed animations (3.5s, 4.5s) provide transparency into AI processing
- Low opacity sparkles (0.25 max) maintain professional, subtle aesthetic
- Staggered timing prevents repetitive patterns
- Purple gradient matches brand identity for Proposal AI feature

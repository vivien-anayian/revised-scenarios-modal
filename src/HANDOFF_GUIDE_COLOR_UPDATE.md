# Handoff Guide: Background Color Update (Hover & Selection States)

**Date:** November 25, 2025  
**Component:** Scenario Comparison Modal  
**Change Type:** Visual/UI - Background Color Update  
**Risk Level:** Low  

---

## 📋 Change Summary

Updated the background color for hovered and selected scenario columns from a light purple tint to a cooler light gray-blue tone.

**Color Change:**
- **Old Color:** `#EBEBFF` (Light Purple)
- **New Color:** `#F5F7FA` (Light Gray-Blue)

**Visual Impact:**
- More neutral, professional appearance
- Better contrast with purple branded scenario pills
- Cooler color temperature (less saturated)
- Improved visual hierarchy

---

## 🎯 Files Modified

### 1. Primary Component
**File:** `/components/ScenarioComparisonModal.tsx`

**Changes:** 2 instances updated

#### Change 1: Scenario Header Cells (Line ~179)
**Location:** Header row containing scenario pills ("Scenario A", "Scenario B", etc.)

**Before:**
```tsx
className={`flex-shrink-0 w-[240px] border-r border-[#F4F5F6] border-b border-[#F4F5F6] last:border-r-0 px-4 py-4 flex items-center justify-center transition-colors ${
  selectedScenario === scenario.id || hoveredColumn === scenario.id 
    ? 'bg-[#EBEBFF] rounded-t-[16px]' 
    : "bg-white"
}`}
```

**After:**
```tsx
className={`flex-shrink-0 w-[240px] border-r border-[#F4F5F6] border-b border-[#F4F5F6] last:border-r-0 px-4 py-4 flex items-center justify-center transition-colors ${
  selectedScenario === scenario.id || hoveredColumn === scenario.id 
    ? 'bg-[#F5F7FA] rounded-t-[16px]' 
    : "bg-white"
}`}
```

**What changed:** `bg-[#EBEBFF]` → `bg-[#F5F7FA]`

---

#### Change 2: Scenario Data Cells (Line ~249)
**Location:** Data rows containing field values (rentable size, term duration, etc.)

**Before:**
```tsx
className={`flex-shrink-0 w-[240px] border-r border-[#F4F5F6] last:border-r-0 px-4 py-4 flex items-start transition-colors ${
  selectedScenario === scenario.id || hoveredColumn === scenario.id ? "bg-[#EBEBFF]" : "bg-white"
}`}
```

**After:**
```tsx
className={`flex-shrink-0 w-[240px] border-r border-[#F4F5F6] last:border-r-0 px-4 py-4 flex items-start transition-colors ${
  selectedScenario === scenario.id || hoveredColumn === scenario.id ? "bg-[#F5F7FA]" : "bg-white"
}`}
```

**What changed:** `bg-[#EBEBFF]` → `bg-[#F5F7FA]`

---

### 2. Import/Reference File
**File:** `/imports/NewScenariosModal.tsx`

**Changes:** 1 instance updated

#### Change 3: Frame49 Component (Line ~375)
**Location:** Frame49 component background

**Before:**
```tsx
function Frame49() {
  return (
    <div className="bg-[#ebebff] box-border content-stretch flex gap-[8px] items-start px-[8px] py-[2px] relative rounded-[8px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1d1e20] text-[12px] text-nowrap whitespace-pre">Space 200</p>
    </div>
  );
}
```

**After:**
```tsx
function Frame49() {
  return (
    <div className="bg-[#f5f7fa] box-border content-stretch flex gap-[8px] items-start px-[8px] py-[2px] relative rounded-[8px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1d1e20] text-[12px] text-nowrap whitespace-pre">Space 200</p>
    </div>
  );
}
```

**What changed:** `bg-[#ebebff]` → `bg-[#f5f7fa]`

---

## 🔧 Implementation Instructions

### Method 1: Find & Replace (Recommended)

**Step 1:** Open `/components/ScenarioComparisonModal.tsx`
```
Find:    bg-[#EBEBFF]
Replace: bg-[#F5F7FA]
```
- Case-sensitive search
- Should find 2 instances
- Replace all

**Step 2:** Open `/imports/NewScenariosModal.tsx`
```
Find:    bg-[#ebebff]
Replace: bg-[#f5f7fa]
```
- Case-insensitive search (note lowercase in original)
- Should find 1 instance
- Replace

---

### Method 2: Manual Update

**File 1:** `/components/ScenarioComparisonModal.tsx`

1. Navigate to line ~179 (inside scenario header map)
2. Find: `'bg-[#EBEBFF] rounded-t-[16px]'`
3. Replace with: `'bg-[#F5F7FA] rounded-t-[16px]'`

4. Navigate to line ~249 (inside scenario value cells map)
5. Find: `"bg-[#EBEBFF]"`
6. Replace with: `"bg-[#F5F7FA]"`

**File 2:** `/imports/NewScenariosModal.tsx`

1. Navigate to line ~375 (Frame49 function)
2. Find: `className="bg-[#ebebff]`
3. Replace with: `className="bg-[#f5f7fa]`

---

## 🧪 Testing Checklist

### Visual Testing
- [ ] **Hover State:** Hover over any scenario column
  - Expected: Background changes to `#F5F7FA` (light gray-blue)
  - Verify: Applies to header cell AND all 8 data cells below
  
- [ ] **Selection State:** Click a scenario pill to select it
  - Expected: Entire column (header + data cells) remains highlighted with `#F5F7FA`
  - Verify: Color persists even when mouse leaves the column
  
- [ ] **Rounded Corners:** Verify header cells have `border-radius: 16px` on top corners when hovered/selected
  
- [ ] **Hover + Select:** Select one scenario, then hover over another
  - Expected: Both columns show `#F5F7FA` background
  
- [ ] **Color Contrast:** Verify text is readable on new background
  - Black text `#1d1e20` should be clearly visible
  - Purple scenario pills should stand out

### Interaction Testing
- [ ] Test with all 5 scenarios (A through E)
- [ ] Test horizontal scroll behavior (color should persist during scroll)
- [ ] Test vertical scroll behavior (color should persist during scroll)
- [ ] Test rapid hover movements across columns
- [ ] Test selection changes (click different scenario pills)

### Cross-browser Testing
- [ ] Chrome/Edge (Chromium-based)
- [ ] Firefox
- [ ] Safari (macOS/iOS)
- [ ] Mobile browsers (if applicable)

### Regression Testing
- [ ] Verify no other colors were affected
- [ ] Verify purple scenario pills still work correctly
- [ ] Verify purple gradient border frame is unchanged
- [ ] Verify sticky behavior (frozen panes) still works
- [ ] Verify Cancel/Continue buttons are unchanged

---

## 📊 Color Specifications

### Old Color: `#EBEBFF`
```
Hex:  #EBEBFF
RGB:  rgb(235, 235, 255)
HSL:  hsl(240, 100%, 96%)
Description: Light purple, highly saturated
```

### New Color: `#F5F7FA`
```
Hex:  #F5F7FA
RGB:  rgb(245, 247, 250)
HSL:  hsl(204, 20%, 97%)
Description: Light gray-blue, low saturation
```

### Comparison
| Property | Old (#EBEBFF) | New (#F5F7FA) | Change |
|----------|---------------|---------------|--------|
| Hue | 240° (Blue-purple) | 204° (Blue) | -36° (cooler) |
| Saturation | 100% | 20% | -80% (less intense) |
| Lightness | 96% | 97% | +1% (slightly lighter) |

---

## 🔄 Rollback Instructions

If you need to revert this change:

### Quick Rollback
A backup file exists at `/components/ScenarioComparisonModal.ROLLBACK.tsx`

**Steps:**
1. Copy contents from `/components/ScenarioComparisonModal.ROLLBACK.tsx`
2. Paste into `/components/ScenarioComparisonModal.tsx`
3. Revert `/imports/NewScenariosModal.tsx` line 375 manually

### Manual Rollback
```
Find:    bg-[#F5F7FA]  or  bg-[#f5f7fa]
Replace: bg-[#EBEBFF]  or  bg-[#ebebff]
```

Apply to both files:
- `/components/ScenarioComparisonModal.tsx`
- `/imports/NewScenariosModal.tsx`

---

## 🐛 Known Issues / Limitations

**None identified.** This is a straightforward color swap with no functional changes.

---

## 📸 Visual Reference

### When Applied
The new color (`#F5F7FA`) will be visible in these scenarios:

1. **Hover State:**
   - User hovers mouse over any scenario column
   - Entire column (header + all 8 data rows) shows light gray-blue background
   - Rounded top corners on header cell

2. **Selection State:**
   - User clicks a scenario pill
   - Selected column remains highlighted with light gray-blue background
   - Purple branded pill appears in header
   - Highlight persists even when mouse moves away

3. **Combined State:**
   - One column selected + hovering over another column
   - Both columns show the light gray-blue background

---

## 🔍 Code Context

### State Management
The color is controlled by two React state variables:

```tsx
const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);
```

### Conditional Logic
The background color is applied when either condition is true:
```tsx
selectedScenario === scenario.id || hoveredColumn === scenario.id 
  ? 'bg-[#F5F7FA] rounded-t-[16px]'  // Applied
  : "bg-white"                         // Default
```

**Triggers:**
- `selectedScenario === scenario.id` → User clicked the scenario pill
- `hoveredColumn === scenario.id` → User's mouse is over the column

---

## ✅ Acceptance Criteria

The implementation is complete when:

- [ ] All 3 instances of the old color are replaced
- [ ] Visual testing passes (hover & selection work correctly)
- [ ] Cross-browser testing passes
- [ ] No regressions in existing functionality
- [ ] Code is committed with clear commit message

### Suggested Commit Message
```
refactor(ui): update scenario column highlight color

Update background color for hovered and selected scenario columns
from #EBEBFF (light purple) to #F5F7FA (light gray-blue) for a
more neutral, professional appearance.

Files modified:
- /components/ScenarioComparisonModal.tsx (2 instances)
- /imports/NewScenariosModal.tsx (1 instance)
```

---

## 📞 Support & Questions

**Rollback available:** Yes, see "Rollback Instructions" section above  
**Risk level:** Low - cosmetic change only  
**Estimated implementation time:** 5-10 minutes  
**Estimated testing time:** 10-15 minutes  

---

## 📝 Additional Notes

### Design System Considerations
- This color change aligns with a more neutral color palette
- Consider documenting `#F5F7FA` as a standard "hover/highlight background" color in your design system
- The new color has better contrast with the purple brand color (`#4837B9`, `#7620CD`)

### Future Enhancements
- Consider extracting the color to a CSS variable or Tailwind config for easier maintenance
- Example: `bg-scenario-highlight` instead of `bg-[#F5F7FA]`

### Performance
- No performance impact - this is a pure CSS class change
- Tailwind will compile the new color value at build time

---

**End of Handoff Guide**

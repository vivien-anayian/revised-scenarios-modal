# Color Change Scope: Background Highlight Update

## Rollback Point
✅ **Rollback file created:** `/components/ScenarioComparisonModal.ROLLBACK.tsx`

To restore the previous state, simply copy the content from the rollback file back to `/components/ScenarioComparisonModal.tsx`.

---

## Change Overview

**Current Color:** `#EBEBFF` (Light Purple)
**New Color:** `#F5F7FA` (Light Gray/Blue)

**Purpose:** Update the background color used for hover and selected scenario columns from a light purple tint to a cooler light gray-blue tone.

---

## Scope of Work

### Files Affected

#### Primary File (In Scope)
- `/components/ScenarioComparisonModal.tsx` - **2 instances** to change

#### Additional Files Found (Out of Scope - Clarification Needed)
- `/imports/NewScenariosModal.tsx` - **1 instance** found
  - This appears to be an import/reference file, not actively used
  - **Question:** Should we also update this file, or leave it as-is?

---

## Detailed Change Locations

### File: `/components/ScenarioComparisonModal.tsx`

#### **Instance 1: Line 179 - Scenario Header Cells**
**Location:** Scenario header row (the cells containing "Scenario A", "Scenario B", etc.)

**Current Code:**
```tsx
className={`flex-shrink-0 w-[240px] border-r border-[#F4F5F6] border-b border-[#F4F5F6] last:border-r-0 px-4 py-4 flex items-center justify-center transition-colors ${
  selectedScenario === scenario.id || hoveredColumn === scenario.id 
    ? 'bg-[#EBEBFF] rounded-t-[16px]'   // ← Change this color
    : "bg-white"
}`}
```

**New Code:**
```tsx
className={`flex-shrink-0 w-[240px] border-r border-[#F4F5F6] border-b border-[#F4F5F6] last:border-r-0 px-4 py-4 flex items-center justify-center transition-colors ${
  selectedScenario === scenario.id || hoveredColumn === scenario.id 
    ? 'bg-[#F5F7FA] rounded-t-[16px]'   // ← Changed from #EBEBFF
    : "bg-white"
}`}
```

**When it applies:**
- When a scenario column is hovered (`hoveredColumn === scenario.id`)
- When a scenario is selected (`selectedScenario === scenario.id`)

---

#### **Instance 2: Line 249 - Scenario Data Cells**
**Location:** Data row cells (the cells containing "12,000 RSF", "24 months", etc.)

**Current Code:**
```tsx
className={`flex-shrink-0 w-[240px] border-r border-[#F4F5F6] last:border-r-0 px-4 py-4 flex items-start transition-colors ${
  selectedScenario === scenario.id || hoveredColumn === scenario.id ? "bg-[#EBEBFF]" : "bg-white"   // ← Change this color
}`}
```

**New Code:**
```tsx
className={`flex-shrink-0 w-[240px] border-r border-[#F4F5F6] last:border-r-0 px-4 py-4 flex items-start transition-colors ${
  selectedScenario === scenario.id || hoveredColumn === scenario.id ? "bg-[#F5F7FA]" : "bg-white"   // ← Changed from #EBEBFF
}`}
```

**When it applies:**
- When a scenario column is hovered (`hoveredColumn === scenario.id`)
- When a scenario is selected (`selectedScenario === scenario.id`)

---

## Visual Impact

### Before (Current - #EBEBFF)
- Light purple tint
- RGB: `rgb(235, 235, 255)`
- HSL: `hsl(240, 100%, 96%)`
- More saturated, purple-tinted appearance

### After (New - #F5F7FA)
- Light gray-blue tint
- RGB: `rgb(245, 247, 250)`
- HSL: `hsl(204, 20%, 97%)`
- More neutral, cooler appearance with subtle blue undertone

**User Experience:**
- Softer, more subtle column highlighting
- Less saturated, more professional appearance
- Better contrast with purple scenario pills
- Cooler color temperature (less purple, more gray-blue)

---

## Implementation Steps

### Option 1: Simple Find & Replace
```
Find:    bg-[#EBEBFF]
Replace: bg-[#F5F7FA]
```

**Scope:** Only in `/components/ScenarioComparisonModal.tsx` (2 replacements)

### Option 2: Manual Update
1. Open `/components/ScenarioComparisonModal.tsx`
2. Navigate to line 179 - Update scenario header cell background
3. Navigate to line 249 - Update scenario data cell background
4. Save and test

---

## Testing Checklist

After implementing the color change:

### Visual Testing
- [ ] Hover over a scenario column - verify background changes to `#F5F7FA`
- [ ] Select a scenario - verify column stays highlighted with `#F5F7FA`
- [ ] Verify header cell (with rounded corners) displays new color correctly
- [ ] Verify all 8 data cells below display new color correctly
- [ ] Check color contrast against white text/content
- [ ] Verify color works with purple scenario pills

### Interaction Testing
- [ ] Hover multiple columns - verify color applies correctly
- [ ] Select different scenarios - verify color follows selection
- [ ] Scroll horizontally - verify color persists during scroll
- [ ] Test with all 5 scenarios (A through E)

### Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers (if applicable)

---

## Clarification Questions

### Question 1: Import File Update
**File:** `/imports/NewScenariosModal.tsx` (Line 375)

This file contains one instance of `bg-[#ebebff]` (lowercase). 

**Questions:**
1. Is this file actively used in the application?
2. Should we update this color as well to maintain consistency?
3. Or should we leave it as-is since it's an import/reference file?

**Current usage in that file:**
```tsx
<div className="bg-[#ebebff] box-border content-stretch flex gap-[8px] items-start px-[8px] py-[2px] relative rounded-[8px] shrink-0">
  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1d1e20] text-[12px] text-nowrap whitespace-pre">Space 200</p>
</div>
```

---

## Risk Assessment

**Risk Level:** ⚠️ **LOW**

**Reasoning:**
- Pure visual/cosmetic change
- No logic or functionality changes
- Only affects background color
- Easy to rollback using the rollback file
- No impact on accessibility (both colors have similar lightness values)

**Potential Issues:**
- None anticipated - simple color swap

---

## Rollback Procedure

If you need to revert this change:

1. Copy content from `/components/ScenarioComparisonModal.ROLLBACK.tsx`
2. Paste into `/components/ScenarioComparisonModal.tsx`
3. Save and refresh

Or manually change:
```
Find:    bg-[#F5F7FA]
Replace: bg-[#EBEBFF]
```

---

## Summary

**Total Changes Required:** 2 instances in 1 file  
**Estimated Time:** 2-3 minutes  
**Complexity:** Simple  
**Risk:** Low  

**Ready to implement?** Yes, pending clarification on the import file question.

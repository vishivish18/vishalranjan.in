# Design System Documentation: The Editorial Monolith

## 1. Overview & Creative North Star
**The Creative North Star: "The Digital Curator"**

This design system is not a template; it is a gallery. Inspired by the precision of Linear and the utility of Raycast, it rejects the "boxed-in" nature of traditional web grids in favor of a high-contrast, editorial layout. We achieve a premium feel through **intentional asymmetry** and **extreme typographic scale**. 

The goal is to make every portfolio piece feel like a featured exhibition. By utilizing a "Pure White" canvas and "Deep Black" ink, we create a high-tension environment where the only "noise" allowed is the work itself. We move beyond standard UI by treating the screen as a physical sheet of paper, where depth is felt through tonal layering rather than artificial drop shadows.

---

## 2. Colors: High-Contrast Monochromatism
The palette is rooted in absolute contrast, using a singular indigo-electric blue accent (`primary_fixed: #4d44e3`) to guide the user’s eye toward intent.

### The "No-Line" Rule
**Standard 1px solid borders are strictly prohibited for sectioning.** 
To define boundaries, use background color shifts. A project section should sit on `surface` (#f9f9f9), while a detailed case study sidebar should use `surface_container_low` (#f3f3f4). The transition between these two tones is the divider.

### Surface Hierarchy & Nesting
Treat the UI as a series of nested physical layers. 
- **Base Layer:** `surface` (#f9f9f9) or `surface_container_lowest` (#ffffff).
- **Secondary Layer:** `surface_container` (#eeeeee).
- **Interactive Layer:** `surface_bright` (#f9f9f9) with a `primary` (#000000) interaction state.

### The "Glass & Gradient" Rule
To prevent the UI from feeling "flat" or "cheap," use Glassmorphism for floating elements (like navigation bars or hovering command menus). Use `surface_container_lowest` at 80% opacity with a `backdrop-filter: blur(20px)`. 

For Primary CTAs, apply a subtle linear gradient from `primary_fixed` (#4d44e3) to `primary_container` (#2606c2) at a 135-degree angle. This adds "soul" to the action button, making it feel pressurized and premium.

---

## 3. Typography: The Editorial Voice
Typography is the primary visual element of this system. We pair the brutalist geometry of **Space Grotesk** with the Swiss neutrality of **Inter**.

- **Display & Headlines (Space Grotesk):** Use `Extra Bold` (700-800 weight) with tight letter spacing (-0.04em). These should be massive, breaking the grid to create a sense of authority.
- **Body & Titles (Inter):** Use `Regular` (400) or `Medium` (500) for body text. Ensure a line height of 1.6 to maintain the "Modernist" breathability.
- **Labels (Inter):** Always `Uppercase` with increased letter spacing (+0.05em) using `label-md` or `label-sm` to denote metadata (e.g., "YEAR / 2024").

---

## 4. Elevation & Depth: Tonal Layering
We do not use "Material" shadows. We use **Atmospheric Depth**.

### The Layering Principle
Depth is achieved by "stacking" surface tiers. Place a `surface_container_lowest` (#ffffff) card on a `surface_container_low` (#f3f3f4) background. The 2% difference in luminosity creates a sophisticated, "barely-there" lift.

### Ambient Shadows
If an element must "float" (e.g., a modal or a primary menu):
- **Shadow Color:** Use a 4% opacity tint of `on_surface` (#1a1c1c).
- **Blur:** Use high values (40px to 80px) with 0 offset. This mimics natural light diffusing across a matte surface.

### The "Ghost Border" Fallback
If accessibility requires a container boundary, use a **Ghost Border**: `outline_variant` (#c6c6c6) at 15% opacity. It should be felt, not seen.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary_fixed` to `primary_container`), white text, `ROUND_FOUR` (1rem) corners. No border.
- **Secondary:** `surface_container_highest` (#e2e2e2) background with `on_surface` (#1a1c1c) text. 
- **Tertiary:** Pure text with an underline that appears only on hover.

### Cards & Lists
**Strict Rule:** No horizontal dividers.
- Use the **Spacing Scale** (`12`: 4rem) to separate list items.
- In card layouts, use a background shift to `surface_container_low` on hover to indicate interactivity.

### Navigation (The Floating Dock)
Inspired by Raycast. A centered, floating pill using Glassmorphism (`surface_container_lowest` @ 80% + blur). Use `ROUND_FOUR` or `full` for this specific element to distinguish it from the content.

### Input Fields
- **Default:** `surface_container_low` background, no border.
- **Focus:** 1px "Ghost Border" using `surface_tint` (#4d44e3) and a 2px outer glow of the same color at 10% opacity.

---

## 6. Do's and Don'ts

### Do:
- **Use "White Space" as a functional element.** If a section feels crowded, double the spacing token (e.g., move from `10` to `20`).
- **Align typography to a strict baseline.** Even when asymmetric, the text must feel anchored.
- **Use the Accent sparingly.** Only 2-3% of the screen should ever be Indigo.

### Don't:
- **Don't use 100% Black for body text.** Use `on_surface_variant` (#474747) for long-form reading to reduce eye strain; reserve `primary` (#000000) for headings.
- **Don't use standard icons.** Use ultra-thin (2pt stroke) custom iconography to match the Inter typography weight.
- **Don't use "Drop Shadows" on cards.** Use Tonal Layering. If the card isn't visible, your background contrast is too low.

---

## 7. Token Reference Summary
- **Primary Action:** `#4d44e3` (Indigo)
- **Base Background:** `#ffffff`
- **Surface Contrast:** `#f3f3f4`
- **Heading Font:** Space Grotesk (Bold/Extra Bold)
- **Body Font:** Inter (Regular)
- **Radius:** `1rem` (Round Four)
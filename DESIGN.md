---
name: RedMedic Medical Identity
description: Premium healthcare network visual identity with modern, trustworthy aesthetic
colors:
  primary: "#12c4b1"
  primary-container: "#0ea897"
  on-primary: "#ffffff"
  secondary: "#f4c05c"
  secondary-container: "#e5ad4a"
  on-secondary: "#1a1c1e"
  accent: "#004b5a"
  accent-container: "#006377"
  on-accent: "#ffffff"
  surface: "#f8fafc"
  surface-container: "#ffffff"
  on-surface: "#0f172a"
  on-surface-variant: "#475569"
  outline: "#e2e8f0"
  outline-variant: "#f1f5f9"
  error: "#ef4444"
  success: "#10b981"
  warning: "#f59e0b"
  info: "#3b82f6"
typography:
  display-xl:
    fontFamily: Outfit
    fontSize: 4.5rem
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: -0.02em
  display-lg:
    fontFamily: Outfit
    fontSize: 3.75rem
    fontWeight: 900
    lineHeight: 1
    letterSpacing: -0.02em
  display-md:
    fontFamily: Outfit
    fontSize: 3rem
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: -0.015em
  display-sm:
    fontFamily: Outfit
    fontSize: 2.25rem
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: -0.01em
  heading-lg:
    fontFamily: Outfit
    fontSize: 1.875rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.01em
  heading-md:
    fontFamily: Outfit
    fontSize: 1.5rem
    fontWeight: 700
    lineHeight: 1.3
  body-lg:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: 500
    lineHeight: 1.75
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 500
    lineHeight: 1.75
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 500
    lineHeight: 1.6
  label-lg:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 700
    letterSpacing: 0.05em
  label-md:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: 700
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Inter
    fontSize: 0.625rem
    fontWeight: 900
    letterSpacing: 0.2em
  caption:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: 0px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  pill: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
  5xl: 128px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 20px
    typography: "{typography.body-lg}"
  button-primary-hover:
    backgroundColor: "{colors.primary-container}"
  button-secondary:
    backgroundColor: "rgba(255, 255, 255, 0.5)"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 20px
    typography: "{typography.body-lg}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 12px
    typography: "{typography.label-lg}"
  card-benefit:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: 48px
  card-service:
    backgroundColor: "{colors.outline-variant}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 40px
  card-stat:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: 40px
  badge:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
    padding: 8px
    typography: "{typography.label-sm}"
  header:
    backgroundColor: "rgba(255, 255, 255, 0.7)"
    textColor: "{colors.on-surface}"
    height: 112px
  footer:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.outline}"
    padding: 96px
---

## Overview

RedMedic is a premium healthcare network identity that combines medical trustworthiness with modern digital elegance. The design language is characterized by soft, approachable curves, gentle gradients, and a warm yet professional color palette inspired by healing waters and golden sunlight.

The visual identity balances clinical authority with human warmth — patients should feel both confident in the medical expertise and comfortable in the experience. Motion is used purposefully to guide attention and create delight without overwhelming.

## Colors

The palette is built around healing and trust associations:

- **Primary (#12c4b1):** Healing teal — the core brand color. Evokes calm, recovery, and medical precision. Used for primary actions, highlights, and key interactive elements.
- **Secondary (#f4c05c):** Warm gold — represents premium care and optimism. Used for secondary accents, badges, and attention-grabbing elements.
- **Accent (#004b5a):** Deep ocean — provides grounding contrast and authority. Used for backgrounds, footer, and sections requiring visual weight.
- **Surface (#f8fafc):** Soft cloud — the primary background. Lighter than pure white for reduced eye strain.
- **On-surface (#0f172a):** Deep slate — text and iconography on light surfaces.
- **Outline (#e2e8f0):** Subtle boundary — for card borders and dividers.

Gradient combinations use primary-to-secondary for CTAs and accent-to-primary for section backgrounds, creating a sense of movement and progression.

## Typography

Two typefaces create a clear hierarchy:

- **Outfit (Display):** Geometric, modern sans-serif used for all headings and display text. High contrast weights (800-900) create strong visual anchors. Tight letter-spacing adds polish.
- **Inter (Body):** Humanist, highly legible sans-serif for body text and UI elements. Medium weight (500) provides comfortable reading with good contrast.

The scale follows a modular system with display sizes from 2.25rem to 4.5rem, creating dramatic impact for hero sections while maintaining readability at smaller sizes.

## Layout

Sections use generous vertical padding (96px-128px) to create breathing room and visual hierarchy. Content is constrained to max-width 1280px (7xl) for optimal reading width.

Grid systems use 8px base spacing with consistent gaps: 32px for compact layouts, 48px for standard sections, 64px-96px for hero and feature areas.

Cards use large border radii (24px-32px) to maintain the soft, approachable aesthetic. The pill-shaped badges provide clear visual markers for status and categories.

## Elevation & Depth

Depth is communicated through layered shadows and glass morphism:

- **Cards:** Soft, colored shadows with brand tints (`shadow-brand-primary/10`) create subtle elevation.
- **Glass surfaces:** Backdrop blur with semi-transparent backgrounds for overlays and sticky headers.
- **Floating elements:** Larger drop shadows with brand color casts for elements meant to feel elevated above the surface.

## Shapes

The design language uses extra-large rounded corners throughout:

- **Buttons:** 16px radius — approachable but professional.
- **Cards:** 24px-32px radius — soft, container-like feeling.
- **Badges/Tags:** Pill shape (9999px) — clear categorical markers.
- **Images:** 24px-48px radius — integrated into the soft aesthetic.

## Components

### Buttons

Three button variants support different hierarchy levels:
- **Primary:** Solid teal with white text, prominent shadow, hover brightness increase.
- **Secondary:** Frosted glass appearance, adapts to light/dark mode.
- **Ghost:** Text-only with icon, used for secondary actions and navigation.

All buttons use spring-based hover animations (scale 1.05, lift -4px) with smooth transitions.

### Cards

Cards are the primary content containers with consistent patterns:
- Icon area (rounded square, colored background)
- Title (display font, bold)
- Description (body text, medium weight)
- Hover: lift animation with colored shadow

### Badges

Small, pill-shaped labels for status, categories, and highlights. Use brand colors with reduced opacity backgrounds and full-opacity text.

### Header

Sticky header transitions from transparent (top of page) to glass-card (scrolled) with spring-based logo scaling animation.

### Footer

Full-width dark section using accent color. Four-column layout with brand info, quick links, contact details, and legal links. CTA button in primary color.

## Do's and Don'ts

**Do:**
- Use the teal primary for all primary actions and interactive elements
- Apply generous whitespace — sections should breathe
- Use Outfit for all headings to maintain visual hierarchy
- Add subtle motion (hover lifts, spring animations) for interactivity
- Use glass morphism for overlays and sticky elements
- Maintain large border radii (24px+) on all containers

**Don't:**
- Use pure white (#ffffff) as page background — use surface (#f8fafc) instead
- Use sharp corners — everything should feel soft and approachable
- Overuse the gold secondary — reserve for special accents and badges
- Add more than 3 font weights in a single section
- Use small border radii (< 16px) on any container element
- Use the accent color for primary actions — it's for backgrounds and grounding

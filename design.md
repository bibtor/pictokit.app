# PictoKit Website — Design System

Extracted from Perplexity.ai's design tokens, adapted for PictoKit.

---

## Colors

### Base Palette (Odin)

#### Light
| Token | Value | Usage |
|-------|-------|-------|
| `--odin-light-0` | `#fff` | Pure white |
| `--odin-light-100` | `#fdfbfa` | Base background |
| `--odin-light-200` | `#faf8f5` | Page background |
| `--odin-light-300` | `#f3f0ec` | Subtle surface |
| `--odin-light-400` | `#ece9e4` | |
| `--odin-light-500` | `#e5e2dc` | |
| `--odin-light-600` | `#dedbd4` | |
| `--odin-light-700` | `#d8d4cd` | |
| `--odin-light-1000` | `#271a00` | Border/overlay source |
| `--odin-light-2000` | `#27251e` | Foreground text |

#### Dark
| Token | Value | Usage |
|-------|-------|-------|
| `--odin-dark-0` | `#000` | Pure black |
| `--odin-dark-100` | `#171615` | Base background |
| `--odin-dark-200` | `#1e1d1c` | Raised surface |
| `--odin-dark-300` | `#242322` | |
| `--odin-dark-400` | `#2a2928` | |
| `--odin-dark-500` | `#302f2e` | |
| `--odin-dark-600` | `#363534` | |
| `--odin-dark-700` | `#3c3b3a` | |
| `--odin-dark-1000` | `#d6d5d4` | Foreground text |

### Semantic Tokens

#### Backgrounds
| Token | Light | Dark |
|-------|-------|------|
| `--bg-base` | `--odin-light-200` (#faf8f5) | `--odin-dark-100` (#171615) |
| `--bg-raised` | `--odin-light-100` (#fdfbfa) | `--odin-dark-200` (#1e1d1c) |
| `--bg-soft` | `--odin-light-1000-a-7` | `--odin-dark-1000-a-7` |
| `--bg-subtle` | `--odin-light-1000-a-3½` | `--odin-dark-1000-a-3½` |
| `--bg-inverse` | `--odin-light-2000` (#27251e) | `--odin-dark-1000` (#d6d5d4) |
| `--bg-backdrop` | `--odin-light-700-a-70` (#d8d4cdb3) | `--odin-dark-100-a-70` (#171615b3) |

#### Foregrounds
| Token | Light | Dark |
|-------|-------|------|
| `--fg-primary` | `--odin-light-2000` (#27251e) | `--odin-dark-1000` (#d6d5d4) |
| `--fg-secondary` | `--odin-light-2000-a-65` (#27251ea6) | `--odin-dark-1000-a-65` (#d6d5d4a6) |
| `--fg-tertiary` | `--odin-light-2000-a-50` (#27251e80) | `--odin-dark-1000-a-50` (#d6d5d480) |
| `--fg-disabled` | `--odin-light-2000-a-20` (#27251e33) | `--odin-dark-1000-a-20` (#d6d5d433) |
| `--fg-inverse` | `--odin-light-100` (#fdfbfa) | `--odin-dark-100` (#171615) |

#### Borders
| Token | Light | Dark |
|-------|-------|------|
| `--border-heavy` | `--odin-light-2000` (#27251e) | `--odin-dark-1000` (#d6d5d4) |
| `--border-medium` | `--odin-light-1000-a-14` (#271a0024) | `--odin-dark-1000-a-14` (#d6d5d424) |
| `--border-soft` | `--odin-light-1000-a-7` (#271a0012) | `--odin-dark-1000-a-7` (#d6d5d412) |
| `--border-inverse` | `--odin-light-100` | `--odin-dark-100` |

### Status Colors (Dark)

| Role | Color name | 400 value |
|------|-----------|-----------|
| Accent | Shiva | `--shiva-dark-400` |
| Positive | Garuda | `--garuda-dark-400` |
| Negative | Ifrit | `--ifrit-dark-400` |
| Warning | Phoenix | `--phoenix-dark-400` |

Each status color has: `bg-strong`, `bg-soft`, `bg-subtle`, `fg-primary`, `fg-secondary`, `border-strong`, `border-subtle`

---

## Typography

### Font Families
| Token | Value |
|-------|-------|
| `--pplx-sans` | `"pplxSans"` (custom variable font) |
| `--pplx-mono` | `"pplxSansMono"` |
| `--pplx-serif` | `"pplxSerif"` |
| Fallback stack | `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica Neue, Arial, "Noto Sans", sans-serif` |
| Font source | `https://frontend-cdn.perplexity.ai/_agi_assets/fonts/PPLX-Sans-Beta-v2-VF.woff2` |

### Font Weights
| Token | Value | Note |
|-------|-------|------|
| `--font-thin` | `400` | |
| `--font-light` | `400` | |
| `--font-normal` | `400` | Body text |
| `--font-semimedium` | `500` | |
| `--font-medium` | `500` | |
| `--font-semibold` | `500` | Emphasis |
| `--font-bold` | `550` | Headings |
| `--font-extrabold` | `550` | |

### Font Sizes
| Token | Value |
|-------|-------|
| `--font-micro` | `0.75rem` (12px) |
| Base body | `16px` |
| Line height | `1.5` |
| Letter spacing | `0` |
| Rendering | `-webkit-font-smoothing: antialiased` |

---

## Spacing

### Scale
| Token | Value |
|-------|-------|
| `--spacing-one` | `1px` |
| `--spacing-2xs` | `2px` |
| `--spacing-xs` | `4px` |
| `--spacing-sm` | `6px` |
| `--spacing-md` | `8px` |
| `--spacing-ml` | `10px` |
| `--spacing-lg` | `12px` |
| `--spacing-xl` | `16px` |
| `--spacing-2xl` | `20px` |
| `--spacing-3xl` | `24px` |
| `--spacing-4xl` | `28px` |
| `--spacing-5xl` | `32px` |
| `--spacing-6xl` | `36px` |
| `--spacing-7xl` | `40px` |
| `--spacing-8xl` | `44px` |
| `--spacing-9xl` | `48px` |

### Size Aliases
| Token | Value |
|-------|-------|
| `--size-sm` | `8px` |
| `--size-md` | `16px` |
| `--size-ml` | `24px` |
| `--size-lg` | `32px` |
| `--size-xl` | `48px` |

---

## Border Radius

| Token | Value |
|-------|-------|
| `--radius-2xs` | `2px` |
| `--radius-xs` | `4px` |
| `--radius-sm` | `6px` |
| `--radius-md` | `8px` |
| `--radius-lg` | `12px` |
| `--radius-2xl` | `16px` |
| `--radius-full` | `9999px` |

---

## Input Sizes

| Token | Value |
|-------|-------|
| `--input-2xs` | `14px` |
| `--input-xs` | `16px` |
| `--input-sm` | `24px` |
| `--input-md` | `32px` |
| `--input-lg` | `40px` |

---

## Easing / Transitions

| Token | Value |
|-------|-------|
| `--ease-out-cubic` | `cubic-bezier(.33, 1, .68, 1)` |
| `--ease-in-out-cubic` | `cubic-bezier(.65, 0, .35, 1)` |
| `--ease-out-soft` | `cubic-bezier(.36, 1.3, .64, 1)` |
| `--ease-in-out-quart` | `cubic-bezier(.76, 0, .24, 1)` |
| `--ease-out-quint` | `cubic-bezier(.22, 1, .36, 1)` |
| `--ease-in-cubic` | `cubic-bezier(.32, 0, .67, 0)` |
| `--ease-in-out-sine` | `cubic-bezier(.37, 0, .63, 1)` |

---

## Layout

| Token | Value |
|-------|-------|
| `--header-height` | `56px` |
| `--sidebar-width` | `220px` |
| `--sidebar-width-collapsed` | `90px` |
| `--thread-width` | `1100px` |
| `--thread-content-width` | `720px` |
| `--page-horizontal-padding` | `var(--size-md)` (16px) |
| `--banner-height` | `34px` |
| `--min-touch-target` | `2.75rem` (44px) |

---

## Scrollbar

```css
.scrollbar-subtle {
  scrollbar-width: thin;
  scrollbar-color: oklch(var(--foreground-color) / .15) transparent;
}
```

---

## Key Patterns

### Backdrop overlay
```css
background-color: var(--bg-backdrop); /* 70% opacity base */
```

### Default border
```css
border-color: var(--border-medium); /* 14% opacity foreground */
```

### Ring (focus)
```css
--tw-ring-color: var(--border-soft); /* 7% opacity foreground */
```

### Shadow overlay border
```css
--shadow-overlay-border: #ffffff1a; /* dark mode */
--shadow-overlay-border: #0000000d; /* light mode */
```

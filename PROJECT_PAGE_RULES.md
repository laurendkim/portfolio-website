# Project Page Layout Rules

## Image Placement & Sizing

1. **All images extend to page edges (flush)**
   - No horizontal padding on image containers
   - Images span full viewport width edge-to-edge
   - Same as homepage gallery behavior

2. **Landscape images**
   - Span full width of page (grid-column: 1 / -1)
   - Height determined by aspect ratio

3. **Portrait images**
   - Display 2 per row
   - Both images in a row sized to equal height
   - Aspect ratio: 2:3
   - object-fit: cover to maintain proportion

## Spacing Rules

4. **Consistent gaps between all images**
   - Vertical gap: 2.2rem (30.4px)
   - Horizontal gap: 2.2rem (30.4px)
   - Gap value applies uniformly across:
     - Hero images
     - Process images
     - Collection images

5. **Text sections**
   - Text has padding: var(--pad) on left/right (2rem)
   - Text NOT flush to edges (indented)
   - Text spacing: 2.2rem between sections

## Implementation Details

- Hero section: images flush, text indented
- Process section: text indented, images flush
- Collection section: images flush to edges
- All image gaps: 2.2rem (30.4px)

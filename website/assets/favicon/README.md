# Favicon Assets

Place your avinshi favicon files here.

## Required Files

### Standard Favicons
- `favicon.ico` - Classic 16x16/32x32 multi-size ICO
- `favicon-16x16.png` - 16x16px PNG
- `favicon-32x32.png` - 32x32px PNG

### Apple Touch Icons
- `apple-touch-icon.png` - 180x180px (iOS home screen)
- `apple-touch-icon-precomposed.png` - 180x180px (older iOS)

### Android/Chrome
- `android-chrome-192x192.png` - 192x192px
- `android-chrome-512x512.png` - 512x512px

### Microsoft Tiles
- `mstile-150x150.png` - 150x150px (Windows tiles)

### Web App Manifest
- `site.webmanifest` - PWA manifest file

## Generate All Sizes

Use one of these free tools:
1. **RealFaviconGenerator** - https://realfavicongenerator.net/
   - Upload your logo
   - Generate all sizes automatically
   - Download ZIP with all files + HTML code

2. **Favicon.io** - https://favicon.io/
   - Simple favicon generator
   - Text to favicon option
   - Free to use

## Usage in HTML

Add to `<head>` section of `index.html`:

```html
<!-- Favicons -->
<link rel="icon" type="image/x-icon" href="assets/favicon/favicon.ico">
<link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-touch-icon.png">
<link rel="manifest" href="assets/favicon/site.webmanifest">
```

## Coming Soon

Favicon files will be generated from logo this weekend.

**Status**: ⏳ Waiting for logo → then generate favicons

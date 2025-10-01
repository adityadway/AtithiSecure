# Assets Directory Structure

This directory contains all the visual assets for the Atithi Secure app.

## Directory Structure

```
assets/
├── images/          # PNG, JPG, WebP images
│   ├── logo.png     # App logo (recommended: 200x200px)
│   ├── background/  # Background images
│   └── icons/       # Icon images
├── svgs/           # SVG vector graphics
│   ├── icons/      # SVG icons
│   └── illustrations/
└── README.md       # This file
```

## Image Guidelines

### Logo
- **Format**: PNG with transparent background
- **Size**: 200x200px (will be scaled down as needed)
- **Usage**: App logo, splash screen, login screen

### Background Images
- **Format**: JPG or WebP for photographs
- **Size**: Minimum 1080x1920px (portrait) or 1920x1080px (landscape)
- **Quality**: High quality but optimized for mobile

### Icons
- **Format**: PNG (with transparency) or SVG
- **Sizes**: Multiple sizes (24x24, 32x32, 48x48, 64x64px)
- **Style**: Consistent with app design language

## Asset Naming Convention

Use descriptive, kebab-case names:
- `app-logo.png`
- `background-login.jpg`
- `icon-emergency.png`
- `icon-bluetooth.svg`

## How to Add Assets

1. Place your assets in the appropriate subdirectory
2. Import them in your React Native components:

```typescript
// For images
import AppLogo from '../assets/images/app-logo.png';

// Usage in component
<Image source={AppLogo} style={styles.logo} />

// For SVGs (requires react-native-svg)
import IconEmergency from '../assets/svgs/icons/emergency.svg';

// Usage in component
<IconEmergency width={24} height={24} />
```

## Placeholder Assets

Currently using placeholder URLs for:
- App logo: Will be replaced with actual Atithi Secure logo
- Background image: Will be replaced with tourism/safety themed background
- Icons: Will be replaced with custom designed icons

## Next Steps

1. Design or source the actual app logo
2. Choose appropriate background images
3. Create or source consistent icon set
4. Optimize all images for mobile performance

# Interactive Line Chart - A/B Test Visualization

## Live Demo
[GitHub Pages Demo](https://alexdashko77.github.io)

## Project Overview
Interactive line chart for visualizing A/B test statistics, displaying conversion rates for different variations with theme support, filtering, and export functionality.

## Implemented Requirements

### Core Features:
- **Conversion Rate Line Chart** - displays CR = (conversions / visits) * 100
- **Variations** - Original + 3 variations (A, B, C)
- **Interactivity** - vertical line and tooltip on hover
- **Auto-scaling axes** - X and Y adapt to visible data range
- **Responsive design** - supports screens from 671px to 1300px
- **Controls:**
  - Variation selector (single or all)
  - Period toggle (day/week)

### Bonus Features:
- **Zoom** - 3 zoom levels showing latest data
- **Line styles** - Line, Smooth, Area
- **Light/Dark theme** - respects system preferences
- **Export to PNG** - save chart functionality
- **Custom components** - themed dropdowns

## Tech Stack

### Main Stack:
- **React 18** + **TypeScript** - typed components
- **Recharts** - charting library
- **CSS Modules** - component styling
- **Bun** - package manager
- **GitHub Actions** - auto-deploy to GitHub Pages

### Architecture:
- **Component-based architecture** - reusable components
- **Theme Context** - global theme management
- **Custom hooks** - useTheme, useChartTheme
- **TypeScript** - full type coverage

# How to Run the Project

## Prerequisites

### 1. Install Bun (Recommended)
```bash
# For macOS and Linux
curl -fsSL https://bun.sh/install | bash

# For Windows (via WSL)
wsl
curl -fsSL https://bun.sh/install | bash
```

# Clone the repository
git clone https://github.com/alexdashko77/test-charts.git

# Navigate to project folder
cd test-charts

# Install all dependencies
```bash
bun install
```
# Start development server
```bash
bun run dev
```

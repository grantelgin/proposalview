# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `yarn dev` - Start development server with Vite HMR
- `yarn build` - Build for production (runs TypeScript check + Vite build)
- `yarn preview` - Preview production build locally

### Code Quality
- `yarn lint` - Run ESLint on the codebase
- `yarn format` - Format code with Prettier
- `yarn format:check` - Check if code is properly formatted

## Project Architecture

This is a React + TypeScript + Vite application for construction estimate management. The application is focused on providing an interactive interface for viewing and modifying construction project estimates with dynamic option selection and real-time cost calculations.

### Key Architecture Patterns

**Generated Components Pattern**: The main UI components are in `src/components/generated/` and appear to be generated rather than hand-written. The top-level component `ConstructionEstimate.tsx` serves as the main application interface.

**Theme Management**: The application enforces light mode only through multiple mechanisms:
- `src/main.tsx` contains explicit dark mode prevention logic
- `src/lib/utils.ts` provides utilities like `ensureLightMode()` and `removeDarkClasses()`
- Theme type is defined in `src/settings/types.d.ts`

**State Management**: Uses React's `useState` for managing estimate data with complex nested state updates. The main data structure includes:
- Project metadata (title, client, dates)
- Sectioned line items with quantity/cost calculations
- Option variants for items with different pricing/scheduling
- Real-time total calculations including tax

### Component Structure
- `ConstructionEstimate.tsx` - Main application component with state management
- `EstimateHeader.tsx` - Project and client information display
- `ProjectOverviewSection.tsx` - Project description and imagery
- `EstimateSection.tsx` - Individual estimate sections with line items
- `EstimateSummary.tsx` - Totals, tax calculations, and timeline summary

### Technology Stack
- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 with shadcn/ui components (New York style)
- **Animation**: Framer Motion for page transitions and interactions
- **UI Libraries**: Lucide React icons, various form/UI components
- **Development**: ESLint + Prettier for code quality

### Data Flow
The application uses a mock data structure (`mockEstimateData`) with complex nested objects representing construction estimates. Option changes trigger state updates that:
1. Update selected option and item properties
2. Recalculate section subtotals
3. Recalculate project totals and tax
4. Update project timeline calculations

### File Organization
- `src/components/generated/` - Main UI components (likely generated)
- `src/lib/utils.ts` - Utility functions including Tailwind class merging
- `src/settings/` - Type definitions and theme configuration
- `src/hooks/` - Custom React hooks
- `content/` - PDF documents and project files

## Important Notes

- The application strictly enforces light mode and contains multiple safeguards against dark mode activation
- Uses yarn as the package manager (yarn.lock present)
- TypeScript configuration uses path aliases (`@/*` maps to `src/*`)
- ESLint has `@typescript-eslint/no-unused-vars` disabled
- Components appear to be generated rather than manually written
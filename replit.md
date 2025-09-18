# Overview

This is a React + Express full-stack web application built to replicate the Achieve financial services website. The application features a modern, responsive financial services platform with debt relief and loan products, built using React with TypeScript on the frontend and Express.js on the backend.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight React Router alternative)
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with CSS variables for theming support
- **State Management**: TanStack React Query for server state management
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development Setup**: tsx for running TypeScript directly in development
- **Build Process**: esbuild for production builds
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage)
- **Session Handling**: Prepared for PostgreSQL session storage with connect-pg-simple
- **Development Tools**: Custom Vite middleware integration for development server

## Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: User authentication schema with username/password fields
- **Migrations**: Drizzle Kit for database migrations and schema management
- **Connection**: Neon Database serverless PostgreSQL integration

## Component Structure
The application follows a component-based architecture with:
- **Layout Components**: Header, Footer, shared UI elements
- **Section Components**: Modular sections like HeroCarousel, BenefitsSection, ProductsSection
- **UI Components**: Reusable shadcn/ui components for consistent design
- **Page Components**: Route-level components that compose sections

## Development Environment
- **Replit Integration**: Custom plugins for development banner and cartographer
- **Hot Reload**: Vite HMR with Express middleware integration
- **Error Handling**: Runtime error overlay for development
- **Path Aliases**: Configured aliases for cleaner imports (@/, @shared/)

## Design System
- **Color Scheme**: CSS custom properties with light/dark theme support
- **Typography**: Open Sans as primary font with serif and mono fallbacks
- **Components**: Consistent design language using Radix UI primitives
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

# External Dependencies

## Frontend Dependencies
- **UI Framework**: React ecosystem (react, react-dom, wouter)
- **UI Library**: Radix UI component primitives for accessibility
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Forms**: React Hook Form with Zod schema validation
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date manipulation
- **Carousel**: Embla Carousel React for interactive components
- **Query Management**: TanStack React Query for server state

## Backend Dependencies
- **Runtime**: Node.js with Express.js framework
- **Database**: Drizzle ORM with Neon Database PostgreSQL
- **Session Store**: connect-pg-simple for PostgreSQL session management
- **Development**: tsx for TypeScript execution, esbuild for builds
- **Utilities**: Various utility libraries for development workflow

## Development Tools
- **Build Tool**: Vite with React plugin
- **TypeScript**: Full TypeScript support across frontend and backend
- **Code Quality**: ESM modules, strict TypeScript configuration
- **Asset Handling**: Attached assets directory for static content
- **Fonts**: Google Fonts integration for typography
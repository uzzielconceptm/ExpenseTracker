# ExactusBooks

## Overview

ExactusBooks is a full-stack web application designed for smart expense tracking, specifically built for solopreneurs. The application combines a React frontend with an Express backend, featuring JWT-based authentication, PostgreSQL database storage, and modern UI components. The system emphasizes security, user experience, and simplified financial management for small business owners.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom design system based on teal and neutral colors
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for enhanced user interactions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety
- **Authentication**: JWT tokens with bcrypt for password hashing
- **Session Management**: Dual authentication system supporting both JWT tokens and session IDs
- **API Design**: RESTful endpoints with comprehensive error handling

### Database Architecture
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema synchronization
- **Tables**: Users, accounts, expenses, time entries, invoices, early access, and sessions
- **Security**: Encrypted passwords, secure session management

## Key Components

### Authentication System
- **Registration/Login**: Complete user authentication flow
- **Password Security**: bcrypt hashing with salt rounds of 12
- **Token Management**: JWT tokens with 7-day expiration
- **Session Storage**: Database-backed sessions for enhanced security
- **Middleware**: Request authentication middleware for protected routes

### User Interface
- **Landing Pages**: Multiple landing page variants (story-based and classic)
- **Dashboard**: Protected user dashboard with expense management features
- **Form Handling**: React Hook Form with Zod validation
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: ARIA labels and keyboard navigation support

### Database Schema
- **Users Table**: Core user information with security features
- **Expenses Table**: Categorized expense tracking with receipt support
- **Accounts Table**: Multiple account types (checking, savings, credit, investment)
- **Time Entries**: Time tracking for billable hours
- **Invoices**: Invoice generation and management system

## Data Flow

1. **User Registration**: 
   - Client submits form data
   - Server validates using Zod schemas
   - Password hashed with bcrypt
   - User record created in PostgreSQL
   - JWT token generated and returned

2. **Authentication Flow**:
   - Client sends credentials
   - Server validates against database
   - JWT token or session ID returned
   - Subsequent requests authenticated via middleware

3. **Protected Routes**:
   - Frontend checks authentication status
   - Backend middleware validates tokens/sessions
   - Database queries executed for authenticated users only

## External Dependencies

### Production Dependencies
- **Database**: PostgreSQL (configured for Railway deployment)
- **Email Service**: SendGrid integration for notifications
- **Authentication**: JWT and bcrypt libraries
- **UI Components**: Radix UI ecosystem
- **Form Handling**: React Hook Form with Hookform resolvers

### Development Dependencies
- **Build Tools**: Vite, esbuild, TypeScript compiler
- **Database Tools**: Drizzle Kit for migrations
- **Development Server**: tsx for TypeScript execution

## Deployment Strategy

The application is configured for deployment on Railway with multiple deployment options:

### Railway Deployment Options
1. **GitHub Integration** (Recommended): Automatic deployments from connected repository
2. **CLI Deployment**: Direct deployment using Railway CLI
3. **Dashboard Upload**: ZIP file upload through Railway dashboard

### Build Configuration
- **Build Command**: `npm install && npx drizzle-kit push && npm run build`
- **Start Command**: `npm start`
- **Port Configuration**: Automatic Railway port detection
- **Environment**: Production-optimized with NODE_ENV=production

### Database Migration
- **Initial Setup**: Schema push for new deployments
- **Updates**: Migration generation and application for schema changes
- **Verification**: Database introspection for schema validation

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string
- `JWT_SECRET`: Secure random string for token signing
- `NODE_ENV`: Set to "production" for deployment
- `SENDGRID_API_KEY`: Optional for email functionality

## Changelog
- June 13, 2025. Initial setup

## User Preferences
Preferred communication style: Simple, everyday language.
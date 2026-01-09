# Luxury Car Rental (Gambia)

A premium car rental platform for Luxury Rentals in Gambia, featuring a high-end catalog, WhatsApp booking flow, and dynamic CMS content.

## Project Structure
This is a monorepo consisting of:
- **/client**: Next.js 14 frontend (App Router, TailwindCSS, Animations).
- **/server**: Express & Prisma backend (SQLite database).

## Getting Started

### 1. Prerequisites
- Node.js (v18 or higher)
- npm

### 2. Install Dependencies
Run this in the root directory to install dependencies for both the client and server:
```bash
npm install
```

### 3. Setup the Database (Server)
Navigate to the server directory to initialize the SQLite database and seed initial data (Vehicles, FAQs, Testimonials).

```bash
cd server

# Generate Prisma Client
npx prisma generate

# Sync schema with local dev.db
npx prisma db push

# Seed the database with sample data
npm run seed

# Move back to root
cd ..
```

### 4. Run the Development Servers
You can run the client and server simultaneously from the root directory using these commands in separate terminals:

**Start the Backend Server:**
```bash
npm run dev:server
```
*Runs on [http://localhost:3001](http://localhost:3001)*

**Start the Frontend Client:**
```bash
npm run dev:client
```
*Runs on [http://localhost:3000](http://localhost:3000)*

## Key Features
- **Dynamic Content**: Hero sections, FAQs, and Customer Reviews are all editable via the database.
- **Premium Animations**: Smooth entrance animations using Intersection Observer.
- **Luxury Catalog**: Filterable fleet of high-end vehicles.
- **WhatsApp Integration**: Instant booking redirection with pre-filled vehicle details.
- **Gambia-Focused**: Entirely localized content and services for the Gambian market.

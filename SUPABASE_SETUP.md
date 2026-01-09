# Supabase Database Setup Guide

This guide will walk you through setting up a PostgreSQL database on Supabase for your luxury car rental application.

## Step 1: Create Supabase Account & Project

1. **Go to Supabase**: Visit [supabase.com](https://supabase.com)

2. **Sign Up/Sign In**:
   - Click "Start your project"
   - Sign in with GitHub (recommended) or email

3. **Create New Project**:
   - Click "New Project"
   - Fill in the details:
     - **Name**: `luxury-rental` (or your preferred name)
     - **Database Password**: Create a strong password
       - ⚠️ **IMPORTANT**: Save this password! You'll need it for the connection string
     - **Region**: Choose the closest region to your users (e.g., US East, EU West)
     - **Pricing Plan**: Free tier is perfect for development

4. **Wait for Project Creation**: This takes about 2 minutes

## Step 2: Get Your Database Connection String

1. **Navigate to Project Settings**:
   - In your Supabase project dashboard
   - Click the ⚙️ **Settings** icon in the sidebar
   - Go to **Database** section

2. **Copy Connection String**:
   - Scroll to "Connection string"
   - Select **URI** tab (not Session mode)
   - Copy the connection string that looks like:
     ```
     postgresql://postgres.[project-ref]:[YOUR-PASSWORD]@aws-0-[region].pooler.supabase.com:6543/postgres
     ```
   - **Replace `[YOUR-PASSWORD]`** with the database password you created in Step 1

## Step 3: Configure Your Local Environment

1. **Create `.env` file** in the `server` directory:
   ```bash
   cd server
   ```

2. **Add your connection string**:
   Create a file named `.env` with this content:
   ```env
   DATABASE_URL="postgresql://postgres.[project-ref]:[YOUR-PASSWORD]@aws-0-[region].pooler.supabase.com:6543/postgres"
   CLIENT_URL=http://localhost:3000
   NODE_ENV=development
   PORT=3001
   ```

   Replace the `DATABASE_URL` value with your actual Supabase connection string.

## Step 4: Install Dependencies & Run Migrations

1. **Install Prisma dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Generate Prisma Client**:
   ```bash
   npx prisma generate
   ```

3. **Run Database Migrations**:
   ```bash
   npx prisma migrate dev --name init
   ```
   
   This will:
   - Create all your database tables
   - Set up the schema in Supabase
   - Generate migration files

4. **Seed the Database**:
   ```bash
   npm run seed
   ```
   
   This will populate your database with initial data (vehicles, brands, etc.)

## Step 5: Verify Database Setup

1. **Check Supabase Dashboard**:
   - Go back to your Supabase project
   - Click **Table Editor** in the sidebar
   - You should see all your tables: `Vehicle`, `VehicleImage`, `Brand`, `Testimonial`, `FAQ`, etc.

2. **Test Your Server**:
   ```bash
   npm run dev
   ```
   
   The server should start without errors and connect to Supabase.

## Step 6: Update Deployment Environment Variables

For your deployed applications (Vercel, Railway, etc.):

1. **Vercel** (for client):
   - Go to your Vercel project
   - Settings → Environment Variables
   - Add: `NEXT_PUBLIC_API_URL` = your server URL

2. **Railway/Render** (for server):
   - Go to your deployment platform
   - Add environment variable:
     - `DATABASE_URL` = your Supabase connection string
     - `PORT` = 3001
     - `NODE_ENV` = production

## Troubleshooting

### Connection Issues
- ✅ Verify your database password is correct
- ✅ Check that you're using the **URI** connection string (not Session mode)
- ✅ Ensure your IP is not blocked (Supabase allows all IPs by default)

### Migration Errors
- If you get errors about existing tables, you can reset:
  ```bash
  npx prisma migrate reset
  ```
  ⚠️ This will delete all data!

### Prisma Client Errors
- Regenerate the client:
  ```bash
  npx prisma generate
  ```

## Next Steps

After setting up the database:
1. ✅ Your local development environment is ready
2. ✅ Deploy your server to Railway/Render with the `DATABASE_URL`
3. ✅ Deploy your client to Vercel
4. ✅ Test the full application

## Useful Commands

```bash
# View your database in browser
npx prisma studio

# Create a new migration
npx prisma migrate dev --name migration_name

# Deploy migrations to production
npx prisma migrate deploy

# Reset database (⚠️ deletes all data)
npx prisma migrate reset
```

## Resources

- 📖 [Supabase Documentation](https://supabase.com/docs)
- 📖 [Prisma Documentation](https://www.prisma.io/docs)
- 🗄️ [Your Supabase Dashboard](https://supabase.com/dashboard)

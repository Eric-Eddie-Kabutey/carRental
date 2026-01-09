# Deployment Guide - Luxury Car Rental

This guide will help you deploy your luxury car rental application to Vercel.

## Prerequisites

- GitHub account with your repository pushed
- Vercel account (sign up at [vercel.com](https://vercel.com))
- Database (PostgreSQL recommended)

## Architecture

This is a monorepo with two applications:
- **Client**: Next.js frontend (`/client` directory)
- **Server**: Express.js API (`/server` directory)

## Deployment Options

### Option 1: Deploy Client to Vercel (Recommended for Quick Start)

1. **Set up Database**
   - Create a PostgreSQL database (recommended: [Neon](https://neon.tech), [Supabase](https://supabase.com), or Vercel Postgres)
   - Copy your database connection string

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "Add New Project"
   - Import your GitHub repository: `Eric-Eddie-Kabutey/carRental`
   - Vercel will auto-detect Next.js in the `client` folder
   - Configure project settings:
     - **Framework Preset**: Next.js
     - **Root Directory**: `client`
     - **Build Command**: `npm run build`
     - **Output Directory**: `.next`
     - **Install Command**: `npm install`

3. **Configure Environment Variables**
   
   In Vercel dashboard, add these environment variables:
   ```
   NEXT_PUBLIC_API_URL=https://your-server-url.com
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your client will be live at `https://your-project.vercel.app`

### Option 2: Deploy Server Separately

The Express.js server needs to be deployed to a platform that supports Node.js servers:

#### Deploy Server to Railway/Render/Heroku

1. **Railway** (Recommended):
   - Go to [railway.app](https://railway.app)
   - Create new project from GitHub repo
   - Set root directory to `server`
   - Add environment variables:
     ```
     DATABASE_URL=your-postgresql-connection-string
     PORT=3001
     ```
   - Deploy

2. **Render**:
   - Go to [render.com](https://render.com)
   - Create new Web Service
   - Connect your GitHub repository
   - Set:
     - **Root Directory**: `server`
     - **Build Command**: `npm install && npm run build`
     - **Start Command**: `npm start`
   - Add environment variables (same as above)

3. **Update Client API URL**:
   - After deploying the server, copy the server URL
   - Update the `NEXT_PUBLIC_API_URL` in Vercel environment variables
   - Redeploy the client

### Option 3: Migrate to Next.js API Routes (Advanced)

For a unified deployment, you can migrate the Express routes to Next.js API routes:

1. Move API logic from `server/index.ts` to `client/src/app/api/` directory
2. Convert Express routes to Next.js route handlers
3. Deploy only the client to Vercel with built-in API routes

## Database Setup

1. **Run Migrations**:
   ```bash
   cd server
   npx prisma migrate deploy
   ```

2. **Seed Database**:
   ```bash
   npm run seed
   ```

## Environment Variables Reference

### Client (Vercel)
- `NEXT_PUBLIC_API_URL` - URL of your backend API

### Server (Railway/Render)
- `DATABASE_URL` - PostgreSQL connection string
- `PORT` - Server port (default: 3001)
- `NODE_ENV` - Set to `production`

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Verify Node.js version compatibility
- Check build logs for specific errors

### API Not Connecting
- Verify `NEXT_PUBLIC_API_URL` is set correctly
- Check CORS settings in server
- Ensure server is deployed and running

### Database Connection Issues
- Verify `DATABASE_URL` format is correct
- Check database is accessible from deployment platform
- Run migrations: `npx prisma migrate deploy`

## Post-Deployment

1. **Test the Application**:
   - Visit your Vercel URL
   - Test API endpoints
   - Verify database connectivity

2. **Set up Custom Domain** (Optional):
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain

3. **Monitor**:
   - Check Vercel Analytics
   - Monitor server logs on Railway/Render

## Local Development

```bash
# Install dependencies
npm install

# Client
cd client
npm install
npm run dev

# Server (in another terminal)
cd server
npm install
npm run dev
```

## Support

For issues, check:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)

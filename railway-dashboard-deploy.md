# Railway Dashboard Deployment Guide for ExactusBooks

## Step 1: Access Railway Dashboard
1. Go to https://railway.app/dashboard
2. Find your existing "exactus" project or create a new one

## Step 2: Deploy Methods

### Option A: GitHub Integration (Recommended)
1. Push your code to a GitHub repository
2. In Railway dashboard, click "Deploy from GitHub repo"
3. Select your repository
4. Railway will automatically detect the configuration

### Option B: Direct Upload
1. Create a ZIP file of your project (excluding node_modules)
2. In Railway dashboard, click "Deploy from Template"
3. Upload the ZIP file

## Step 3: Environment Variables
Set these in Railway dashboard under "Variables":

```
DATABASE_URL=postgresql://username:password@host:port/database
JWT_SECRET=your-secure-random-string-here
NODE_ENV=production
PORT=3000
```

## Step 4: Build Configuration
Railway will automatically use these settings from `railway.json`:
- Build Command: `npm install && npx drizzle-kit push && npm run build`
- Start Command: `npm start`

## Step 5: Domain
Your app will be available at: `https://exactus.up.railway.app/`

## Features Ready for Production
✅ Complete authentication system (JWT + bcrypt)
✅ User registration and login
✅ Protected dashboard routes
✅ PostgreSQL database integration
✅ Responsive design
✅ Production-ready server configuration

## Test Endpoints After Deployment
- `/` - Landing page
- `/auth` - Login/Register forms
- `/dashboard` - Protected user dashboard
- `/api/auth/register` - User registration API
- `/api/auth/login` - Authentication API
- `/api/auth/me` - User profile API
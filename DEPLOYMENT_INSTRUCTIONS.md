# ExactusBooks Railway Deployment Guide

## Method 1: GitHub Integration (Recommended)

1. **Push code to GitHub repository**
   - Create new repository on GitHub
   - Push your local code with authentication system

2. **Connect to Railway**
   - Go to https://railway.app/dashboard
   - Find your existing "exactus" project
   - Connect GitHub repository
   - Enable automatic deployments

3. **Environment Variables**
   Set in Railway dashboard:
   ```
   DATABASE_URL=<your-postgresql-url>
   NODE_ENV=production
   JWT_SECRET=<secure-random-string>
   ```

## Method 2: CLI Deployment

After completing browser authentication:
```bash
railway whoami           # Verify login
railway link             # Connect to project
railway up               # Deploy code
```

## Method 3: ZIP Upload

1. Create ZIP of project files
2. Upload via Railway dashboard
3. Configure build settings

## Build Configuration

Railway will use these commands from `railway.json`:
- Build: `npm install && npx drizzle-kit push && npm run build`
- Start: `npm start`

## Post-Deployment

Your app will be available at: https://exactus.up.railway.app/

Test these endpoints:
- `/` - Landing page
- `/auth` - Login/Register
- `/dashboard` - Protected dashboard (after login)
- `/api/auth/register` - User registration API
- `/api/auth/login` - User login API

The authentication system is fully configured and ready for production use.
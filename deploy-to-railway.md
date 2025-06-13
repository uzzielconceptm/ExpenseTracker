# Deploy ExactusBooks with Authentication to Railway

## Your application is ready for deployment with:
✅ Complete Supabase authentication system
✅ JWT-based user management
✅ Protected routes and middleware
✅ Database schema with users and sessions tables
✅ Railway configuration files

## Quick Deployment Steps

### Option 1: GitHub Integration (Recommended)
1. Push your code to a GitHub repository
2. Go to your Railway dashboard at https://railway.app/dashboard
3. Connect your GitHub repository to your existing project
4. Enable automatic deployments on push

### Option 2: Manual CLI Deployment
1. Complete Railway authentication:
   - Visit: https://railway.app/cli-login
   - Use pairing code: `satisfying-unnatural-evil-muscle`
   
2. Link to your project:
   ```bash
   railway link
   ```

3. Deploy:
   ```bash
   railway up
   ```

### Option 3: Direct Upload
1. Create a ZIP file of your project
2. Upload via Railway dashboard
3. Configure build settings

## Environment Variables Required

Set these in your Railway dashboard:
```
DATABASE_URL=<your-railway-postgresql-url>
NODE_ENV=production
JWT_SECRET=<generate-secure-secret>
```

## Build Configuration

Your `railway.json` is configured with:
- **Build Command**: `npm install && npx drizzle-kit push && npm run build`
- **Start Command**: `npm start`
- **Health Check**: `/`

## Post-Deployment Verification

After deployment, test these endpoints:
- `GET /` - Landing page
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - User profile (authenticated)
- `GET /dashboard` - Protected dashboard

## Database Migration

The build command automatically runs `drizzle-kit push` to update your database schema with the new authentication tables.

Your application will be available at: https://exactus.up.railway.app/
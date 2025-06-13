# Deploy ExactusBooks to Railway Dashboard

## Quick Deployment Steps

### 1. Access Railway Dashboard
- Go to https://railway.app/dashboard
- Find your "exactus" project or create a new one

### 2. Deploy Your Code
**Option A: GitHub Connection**
- Push your code to GitHub repository
- In Railway: "Deploy from GitHub repo"
- Select your repository
- Enable automatic deployments

**Option B: Direct Upload**
- Create ZIP file of your project (exclude node_modules)
- Upload via Railway dashboard

### 3. Set Environment Variables
In Railway Dashboard → Variables, add:
```
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_secure_random_string
NODE_ENV=production
```

### 4. Build Configuration
Railway automatically uses your `package.json` scripts:
- **Build**: `npm install && npx drizzle-kit push && npm run build`
- **Start**: `npm start`
- **Port**: Auto-detected (your app uses `process.env.PORT`)

## Your App Features
- JWT authentication system with secure password hashing
- User registration and login
- Protected dashboard routes
- PostgreSQL database integration
- Responsive design
- Production-ready configuration

## Access Your Deployed App
- **URL**: https://exactus.up.railway.app/
- **Port**: 5000 (locally), Railway assigns port automatically

## Test After Deployment
- `/` - Landing page
- `/auth` - Login/register forms
- `/dashboard` - User dashboard (requires authentication)
- `/api/auth/register` - User registration endpoint
- `/api/auth/login` - Login endpoint

Your authentication system is fully functional and ready for production deployment.
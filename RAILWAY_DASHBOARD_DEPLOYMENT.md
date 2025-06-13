# Railway Dashboard Deployment - ExactusBooks

Your ExactusBooks application is ready for deployment via Railway dashboard.

## Deployment Steps

### 1. Access Railway Dashboard
- Go to https://railway.app/dashboard
- Locate your "exactus" project or create a new one

### 2. Deployment Method
**Option A: GitHub Integration (Recommended)**
- Push your code to GitHub
- Connect the repository in Railway dashboard
- Enable automatic deployments

**Option B: Direct Upload**
- Create ZIP file of project (exclude node_modules)
- Upload via Railway dashboard

### 3. Environment Variables
Set these in Railway dashboard Variables section:
```
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_secure_jwt_secret_key
NODE_ENV=production
```

### 4. Application Details
- **Port**: Automatically configured (uses Railway's PORT env var)
- **Build**: `npm install && npx drizzle-kit push && npm run build`
- **Start**: `npm start`
- **Domain**: https://exactus.up.railway.app/

### 5. Features Included
- Complete JWT authentication system
- User registration and login
- Protected dashboard routes
- PostgreSQL database integration
- Responsive design
- Production-ready configuration

### 6. Test Routes After Deployment
- `/` - Landing page
- `/auth` - Authentication forms
- `/dashboard` - User dashboard (requires login)
- `/api/auth/register` - Registration endpoint
- `/api/auth/login` - Login endpoint
- `/api/auth/me` - User profile endpoint

The application is configured to automatically handle Railway's port assignment and includes all necessary authentication features for production use.
# Railway Deployment - Detailed Step-by-Step Guide

## Method 1: GitHub Integration (Recommended)

### Step 1: Push Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit - ExactusBooks with authentication"
git branch -M main
git remote add origin https://github.com/yourusername/exactusbooks.git
git push -u origin main
```

### Step 2: Connect to Railway
1. Go to https://railway.app/dashboard
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Authorize GitHub if needed
5. Select your ExactusBooks repository
6. Click "Deploy Now"

### Step 3: Configure Environment Variables
In Railway Dashboard → Your Project → Variables:
- Click "New Variable"
- Add each variable:

```
DATABASE_URL
Value: postgresql://username:password@hostname:port/database

JWT_SECRET  
Value: your-super-secure-random-string-minimum-32-chars

NODE_ENV
Value: production
```

## Method 2: Direct Upload

### Step 1: Prepare Project Archive
Create a ZIP file including:
- All source files (`client/`, `server/`, `shared/`)
- `package.json`, `package-lock.json`
- Configuration files
- `migrations/` folder
- Exclude: `node_modules/`, `dist/`, `.env` files

### Step 2: Upload to Railway
1. Railway Dashboard → "New Project"
2. Select "Empty Project"
3. Go to project → "Deploy" tab
4. Drag and drop your ZIP file
5. Railway will automatically detect and build

## Environment Variables Setup

### DATABASE_URL Format
```
postgresql://username:password@hostname:port/database
```

Example:
```
postgresql://user:pass@localhost:5432/exactusbooks
```

### JWT_SECRET Generation
Generate a secure random string:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Build Process Verification

Railway will execute these commands:
1. `npm install` - Install dependencies
2. `npx drizzle-kit push` - Setup database schema
3. `npm run build` - Build frontend and backend
4. `npm start` - Start production server

## Common Deployment Issues & Solutions

### Issue 1: Build Failures
**Symptoms**: Build stops with dependency errors
**Solution**: 
- Verify all dependencies in `package.json`
- Check for missing TypeScript types
- Ensure build script works locally

### Issue 2: Database Connection Errors
**Symptoms**: App starts but authentication fails
**Solutions**:
- Verify DATABASE_URL format is correct
- Check database is accessible from Railway
- Ensure database exists and has proper permissions

### Issue 3: Environment Variable Issues
**Symptoms**: JWT errors, undefined variables
**Solutions**:
- Double-check variable names (case-sensitive)
- Ensure JWT_SECRET is at least 32 characters
- Verify all required variables are set

### Issue 4: Port Configuration
**Symptoms**: Service unavailable errors
**Solution**: Your app is already configured correctly:
```javascript
const port = process.env.PORT || 5000;
```

## Monitoring Your Deployment

### Check Deployment Status
1. Railway Dashboard → Your Project
2. "Deployments" tab shows build progress
3. "Logs" tab shows runtime errors

### Test Endpoints After Deployment
```bash
# Test landing page
curl https://exactus.up.railway.app/

# Test registration
curl -X POST https://exactus.up.railway.app/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"test","email":"test@example.com","password":"testpass123","fullName":"Test User"}'

# Test login
curl -X POST https://exactus.up.railway.app/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"test","password":"testpass123"}'
```

## Domain Configuration

### Default Domain
Railway provides: `https://exactus.up.railway.app/`

### Custom Domain (Optional)
1. Railway Dashboard → Your Project → "Settings"
2. "Domains" section
3. Add your custom domain
4. Update DNS records as instructed

## Security Checklist

✅ DATABASE_URL contains strong password
✅ JWT_SECRET is secure and unique
✅ NODE_ENV set to "production"
✅ No sensitive data in repository
✅ Database has proper access controls

## Next Steps After Deployment

1. **Test all authentication flows**
2. **Verify database operations**
3. **Check responsive design on mobile**
4. **Monitor application logs**
5. **Set up custom domain (if needed)**

Your ExactusBooks application is production-ready with complete JWT authentication, secure password handling, and database integration.
# Step-by-Step Railway Deployment Guide for ExactusBooks

## Prerequisites Checklist
- [x] Application running locally on port 5000
- [x] Health check endpoint working
- [x] Authentication system functional
- [x] Database schema ready
- [ ] Railway account created
- [ ] Environment variables prepared

## Step 1: Prepare Environment Variables

### 1.1 Generate JWT Secret
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
Save this output - you'll need it as JWT_SECRET

### 1.2 Prepare Database URL
Format: `postgresql://username:password@hostname:port/database`
Example: `postgresql://user:pass123@db.railway.app:5432/railway`

### 1.3 Verify Local Health Check
```bash
curl http://localhost:5000/health
```
Should return: `{"status":"healthy","timestamp":"...","port":5000}`

## Step 2: Access Railway Dashboard

### 2.1 Open Railway
- Navigate to https://railway.app/dashboard
- Sign in with your account

### 2.2 Locate Your Project
- Look for "exactus" project in your dashboard
- If not found, click "New Project"

## Step 3: Choose Deployment Method

### Option A: GitHub Repository (Recommended)

#### 3.1 Push Code to GitHub
```bash
git init
git add .
git commit -m "Deploy ExactusBooks with authentication"
git branch -M main
git remote add origin https://github.com/yourusername/exactusbooks.git
git push -u origin main
```

#### 3.2 Connect to Railway
1. In Railway dashboard, click "Deploy from GitHub repo"
2. Authorize GitHub access if prompted
3. Select your ExactusBooks repository
4. Click "Deploy Now"

### Option B: Direct Upload

#### 3.1 Prepare Project Files
Create ZIP archive including:
- All source code (`client/`, `server/`, `shared/`)
- `package.json`, `package-lock.json`
- `railway.json`
- `migrations/` folder
- Configuration files

#### 3.2 Upload to Railway
1. Click "New Project" in Railway dashboard
2. Select "Empty Project"
3. Drag and drop your ZIP file
4. Railway will detect and start building

## Step 4: Configure Environment Variables

### 4.1 Access Variables Section
1. In your Railway project dashboard
2. Click "Variables" tab on the left sidebar

### 4.2 Add Required Variables
Click "New Variable" for each:

**Variable 1:**
- Name: `DATABASE_URL`
- Value: `postgresql://username:password@hostname:port/database`

**Variable 2:**
- Name: `JWT_SECRET`
- Value: `your_generated_32_character_string`

**Variable 3:**
- Name: `NODE_ENV`
- Value: `production`

### 4.3 Save Variables
Click "Add" for each variable to save them

## Step 5: Monitor Deployment

### 5.1 Check Build Progress
1. Go to "Deployments" tab
2. Watch the build process:
   - Installing dependencies
   - Running database migrations
   - Building application
   - Starting server

### 5.2 View Build Logs
- Click on the current deployment
- Monitor logs for any errors
- Build should complete in 2-5 minutes

### 5.3 Check Health Status
Look for successful health check in logs:
```
Health check passed: /health
```

## Step 6: Access Your Deployed Application

### 6.1 Get Your URL
- In Railway dashboard, look for the generated URL
- Format: `https://exactus.up.railway.app/`
- Or custom domain if configured

### 6.2 Test Application
Open your browser and visit:
- `https://exactus.up.railway.app/` - Landing page
- `https://exactus.up.railway.app/health` - Health check
- `https://exactus.up.railway.app/auth` - Authentication page

## Step 7: Verify Functionality

### 7.1 Test Registration
1. Go to `/auth` page
2. Click "Register" tab
3. Fill out registration form
4. Submit and verify account creation

### 7.2 Test Login
1. Use credentials from registration
2. Login successfully
3. Verify redirect to dashboard

### 7.3 Test API Endpoints
```bash
# Health check
curl https://exactus.up.railway.app/health

# Registration test
curl -X POST https://exactus.up.railway.app/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"test","email":"test@example.com","password":"testpass123","fullName":"Test User"}'
```

## Troubleshooting Common Issues

### Issue: Build Timeout
**Solution:** Check build logs for specific errors, verify all dependencies in package.json

### Issue: Database Connection Failed
**Solution:** Verify DATABASE_URL format and database accessibility

### Issue: Authentication Not Working
**Solution:** Check JWT_SECRET is set correctly and database schema exists

### Issue: Health Check Failing
**Solution:** Verify `/health` endpoint returns 200 status

## Success Confirmation

Your deployment is successful when:
- [x] Build completes without errors
- [x] Health check returns healthy status
- [x] Landing page loads correctly
- [x] Authentication system works
- [x] Database operations function

## Post-Deployment Steps

1. **Test All Features**
   - User registration and login
   - Protected route access
   - API endpoints functionality

2. **Monitor Performance**
   - Check Railway logs regularly
   - Monitor response times
   - Watch for any errors

3. **Configure Custom Domain** (Optional)
   - Railway Settings → Domains
   - Add your custom domain
   - Update DNS records

Your ExactusBooks application is now live at https://exactus.up.railway.app/ with full authentication functionality!
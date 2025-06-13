# Railway Deployment Guide for ExactusBooks

## Initial Setup

### 1. Create Railway Project
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Create new project
railway new
```

### 2. Add PostgreSQL Database
```bash
# Add PostgreSQL service to your project
railway add postgresql

# Get database connection string
railway variables
```

### 3. Environment Variables
Set these variables in Railway dashboard:
```
DATABASE_URL=<your-railway-postgresql-url>
NODE_ENV=production
```

## Database Migration Workflow

### For New Deployments
1. **Initial Schema Setup**
```bash
# Set your Railway DATABASE_URL
export DATABASE_URL="postgresql://username:password@host:port/database"

# Push initial schema to Railway
npm run db:push
```

### For Schema Updates
1. **Generate Migration Files**
```bash
# After updating shared/schema.ts, generate migrations
npx drizzle-kit generate
```

2. **Apply Migrations to Railway**
```bash
# Run the migration script
./migrate-railway.sh

# Or manually:
export DATABASE_URL="your-railway-url"
npx drizzle-kit migrate
```

### Automated Migration with Railway
Add this build script to Railway deployment:
```bash
# In Railway dashboard, set Build Command:
npm install && npx drizzle-kit push
```

## Deployment Commands

### Manual Deployment
```bash
# Connect to Railway project
railway link

# Deploy current code
railway up
```

### Automatic Deployment
- Connect your GitHub repository to Railway
- Enable auto-deployments on push to main branch
- Migrations will run automatically with the build command

## Database Management

### View Database
```bash
# Open Drizzle Studio for Railway DB
DATABASE_URL="your-railway-url" npx drizzle-kit studio
```

### Backup Database
```bash
# Create backup
pg_dump $DATABASE_URL > backup.sql

# Restore backup
psql $DATABASE_URL < backup.sql
```

### Reset Database (⚠️ Destructive)
```bash
# Drop all tables and recreate
npx drizzle-kit drop
npx drizzle-kit push
```

## Monitoring

### Check Deployment Status
```bash
railway status
```

### View Logs
```bash
railway logs
```

### Database Connection Test
```bash
railway connect postgresql
```

## Common Issues

### Migration Conflicts
If you encounter migration conflicts:
1. Reset migrations: `rm -rf migrations/`
2. Generate fresh migrations: `npx drizzle-kit generate`
3. Apply to Railway: `npx drizzle-kit push`

### Connection Issues
- Verify DATABASE_URL format
- Check Railway service status
- Ensure database is not sleeping (Railway free tier)

### Build Failures
- Check Node.js version compatibility
- Verify all dependencies are in package.json
- Review Railway build logs
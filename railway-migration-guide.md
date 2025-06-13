# Railway Migration Workflow

## Quick Start Commands

### Initial Database Setup
```bash
# 1. Set Railway database URL
export DATABASE_URL="your-railway-postgresql-url"

# 2. Push initial schema (for new projects)
npx drizzle-kit push
```

### For Schema Updates
```bash
# 1. After modifying shared/schema.ts
npx drizzle-kit generate

# 2. Apply migrations to Railway
./migrate-railway.sh
```

## Step-by-Step Railway Setup

### 1. Railway Project Setup
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and create project
railway login
railway new

# Add PostgreSQL
railway add postgresql
```

### 2. Get Database URL
```bash
# View environment variables
railway variables

# Copy the DATABASE_URL value
```

### 3. Environment Configuration
Set in Railway dashboard under Variables:
- `DATABASE_URL`: Your PostgreSQL connection string
- `NODE_ENV`: production

### 4. Deploy Configuration
Create `railway.json` (already created):
```json
{
  "build": {
    "buildCommand": "npm install && npx drizzle-kit push && npm run build"
  },
  "deploy": {
    "startCommand": "npm start"
  }
}
```

## Migration Commands

### Generate Migrations
```bash
npx drizzle-kit generate
```
This creates SQL files in `/migrations` folder based on schema changes.

### Apply Migrations
```bash
# Manual application
DATABASE_URL="your-url" npx drizzle-kit migrate

# Or use the script
./migrate-railway.sh
```

### Reset Database (Destructive)
```bash
npx drizzle-kit drop
npx drizzle-kit push
```

## Automatic Deployment

### GitHub Integration
1. Connect repository to Railway project
2. Enable auto-deploy on push to main
3. Migrations run automatically via build command

### Manual Deployment
```bash
railway link    # Connect to project
railway up      # Deploy current code
```

## Verification

### Check Migration Status
```bash
# View applied migrations
railway connect postgresql
\dt    # List tables
\q     # Exit
```

### Test Database Connection
```bash
# Run the setup script
node railway-setup.js
```

## Common Workflows

### Adding New Table
1. Add table to `shared/schema.ts`
2. Run `npx drizzle-kit generate`
3. Run `./migrate-railway.sh`
4. Deploy to Railway

### Modifying Existing Table
1. Update schema in `shared/schema.ts`
2. Generate migration: `npx drizzle-kit generate`
3. Review generated SQL in `/migrations`
4. Apply: `./migrate-railway.sh`

### Production Deployment
1. Test migrations locally first
2. Push to main branch (auto-deploy)
3. Or manual: `railway up`
4. Verify deployment: `railway logs`
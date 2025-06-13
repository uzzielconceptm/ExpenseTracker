#!/bin/bash

# ExactusBooks Railway Deployment Script

echo "🚀 Starting Railway deployment for ExactusBooks..."

# Check if Railway CLI is authenticated
if ! railway whoami > /dev/null 2>&1; then
    echo "❌ Railway CLI not authenticated"
    echo "Please complete authentication:"
    echo "1. Visit: https://railway.app/cli-login"
    echo "2. Use pairing code from the CLI output"
    echo "3. Run this script again"
    exit 1
fi

echo "✅ Railway CLI authenticated"

# Build the application
echo "📦 Building application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build successful"

# Deploy to Railway
echo "🚀 Deploying to Railway..."
railway up

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🌐 Your app should be available at: https://exactus.up.railway.app/"
    echo ""
    echo "📋 Post-deployment checklist:"
    echo "1. Verify DATABASE_URL is set in Railway dashboard"
    echo "2. Set JWT_SECRET environment variable"
    echo "3. Test authentication at /auth"
    echo "4. Check dashboard at /dashboard"
else
    echo "❌ Deployment failed"
    echo "Check Railway logs for details: railway logs"
    exit 1
fi
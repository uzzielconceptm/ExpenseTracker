#!/bin/bash

# Railway Database Migration Script
# This script handles database migrations for Railway PostgreSQL

set -e

echo "🚀 Starting Railway Database Migration..."

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
    echo "❌ ERROR: DATABASE_URL environment variable is not set"
    echo "Please set your Railway PostgreSQL connection string:"
    echo "export DATABASE_URL='postgresql://username:password@host:port/database'"
    exit 1
fi

# Generate new migrations if schema changes exist
echo "📝 Generating migrations from schema changes..."
npx drizzle-kit generate

# Check if there are new migration files
MIGRATION_FILES=$(find ./migrations -name "*.sql" 2>/dev/null | wc -l)

if [ "$MIGRATION_FILES" -gt 0 ]; then
    echo "📦 Found $MIGRATION_FILES migration files"
    
    # Apply migrations to Railway database
    echo "🔄 Applying migrations to Railway PostgreSQL..."
    npx drizzle-kit migrate
    
    echo "✅ Migrations applied successfully!"
else
    echo "ℹ️  No new migrations to apply"
fi

# Verify database schema
echo "🔍 Verifying database schema..."
npx drizzle-kit introspect

echo "🎉 Railway migration completed successfully!"
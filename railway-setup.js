#!/usr/bin/env node

/**
 * Railway Database Setup and Migration Utility
 * Handles initial setup and ongoing migrations for Railway PostgreSQL
 */

import { execSync } from 'child_process';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('❌ DATABASE_URL environment variable is required');
  console.log('Set it with: export DATABASE_URL="postgresql://user:pass@host:port/db"');
  process.exit(1);
}

console.log('🚀 Railway Database Setup Starting...');

// Check if this is initial setup or migration
const migrationsDir = './migrations';
const hasExistingMigrations = existsSync(migrationsDir);

try {
  if (!hasExistingMigrations) {
    console.log('📋 Initial database setup detected');
    console.log('🔄 Pushing schema to Railway...');
    execSync('npx drizzle-kit push', { stdio: 'inherit' });
    console.log('✅ Initial schema created successfully');
  } else {
    console.log('🔄 Existing migrations found, generating new migrations...');
    execSync('npx drizzle-kit generate', { stdio: 'inherit' });
    
    console.log('📦 Applying migrations to Railway...');
    execSync('npx drizzle-kit migrate', { stdio: 'inherit' });
    console.log('✅ Migrations applied successfully');
  }

  // Verify database connection
  console.log('🔍 Verifying database connection...');
  execSync('npx drizzle-kit introspect', { stdio: 'inherit' });
  
  console.log('🎉 Railway database setup completed successfully!');
  
} catch (error) {
  console.error('❌ Migration failed:', error.message);
  process.exit(1);
}
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from "@shared/schema";

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

// Create connection to Railway PostgreSQL with enhanced configuration
const connectionString = process.env.DATABASE_URL;
const client = postgres(connectionString, {
  max: 10,
  idle_timeout: 20,
  connect_timeout: 60,
  ssl: connectionString.includes('sslmode=require') ? { rejectUnauthorized: false } : false,
  onnotice: () => {}, // Suppress notices in production
});

// Test database connection for Railway deployment debugging
client`SELECT 1 as test`.then(() => {
  console.log('✓ Database connection successful');
}).catch((error) => {
  console.error('✗ Database connection failed:', error.message);
});

export const db = drizzle(client, { schema });

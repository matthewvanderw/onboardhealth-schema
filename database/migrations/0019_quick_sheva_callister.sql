DO $$ BEGIN
 CREATE TYPE "Status" AS ENUM('created', 'active', 'complete', 'revoked');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DROP INDEX IF EXISTS "UidAndFormIdUniqueIndex";
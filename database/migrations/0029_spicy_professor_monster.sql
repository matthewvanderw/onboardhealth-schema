DO $$ BEGIN
 CREATE TYPE "SmsStatus" AS ENUM('queued', 'sent', 'failed');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

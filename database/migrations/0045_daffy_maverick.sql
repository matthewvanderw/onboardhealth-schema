DO $$ BEGIN
 CREATE TYPE "ProductType" AS ENUM('YOURSELF', 'OTHER');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

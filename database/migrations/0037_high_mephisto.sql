ALTER TABLE "ProductSubscriptions" ALTER COLUMN "ProductCode" DROP NOT NULL;--> statement-breakpoint
/* 
    Unfortunately in current drizzle-kit version we can't automatically get name for primary key.
    We are working on making it available!

    Meanwhile you can:
        1. Check pk name in your database, by running
            SELECT constraint_name FROM information_schema.table_constraints
            WHERE table_schema = 'public'
                AND table_name = 'ProductSubscriptions'
                AND constraint_type = 'PRIMARY KEY';
        2. Uncomment code below and paste pk name manually
        
    Hope to release this update as soon as possible
*/

ALTER TABLE "ProductSubscriptions" DROP CONSTRAINT "<constraint_name>";--> statement-breakpoint
ALTER TABLE "ProductSubscriptions" ADD CONSTRAINT "ProductSubscriptions_ProductCode_GroupCode" PRIMARY KEY("ProductCode","GroupCode");
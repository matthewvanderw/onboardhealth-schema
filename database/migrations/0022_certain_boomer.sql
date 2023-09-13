CREATE TABLE IF NOT EXISTS "Reports" (
	"Name" varchar PRIMARY KEY NOT NULL,
	"FormId" uuid NOT NULL,
	"TemplateId" varchar NOT NULL,
	"CsvValues" jsonb,
	"EmailAddresses" jsonb
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Reports" ADD CONSTRAINT "Reports_FormId_Forms_Id_fk" FOREIGN KEY ("FormId") REFERENCES "Forms"("Id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

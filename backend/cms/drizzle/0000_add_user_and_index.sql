CREATE TABLE "indexes" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(200) NOT NULL,
	"body" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	"published_at" timestamp,
	"unpublished_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(200) NOT NULL,	
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE INDEX "indexes_id_index" ON "indexes" USING btree ("id");--> statement-breakpoint
CREATE INDEX "indexes_name_index" ON "indexes" USING btree ("name");--> statement-breakpoint
CREATE INDEX "indexes_created_at_index" ON "indexes" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "indexes_updated_at_index" ON "indexes" USING btree ("updated_at");--> statement-breakpoint
CREATE INDEX "indexes_published_at_index" ON "indexes" USING btree ("published_at");--> statement-breakpoint
CREATE INDEX "indexes_unpublished_at_index" ON "indexes" USING btree ("unpublished_at");--> statement-breakpoint
CREATE INDEX "users_id_index" ON "users" USING btree ("id");--> statement-breakpoint
CREATE INDEX "users_name_index" ON "users" USING btree ("name");--> statement-breakpoint
CREATE INDEX "users_created_at_index" ON "users" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "users_updated_at_index" ON "users" USING btree ("updated_at");

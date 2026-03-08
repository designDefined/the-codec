CREATE TABLE "index_bodies" (
	"id" serial PRIMARY KEY NOT NULL,
	"index_id" integer NOT NULL,
	"body" text DEFAULT '' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "index_slugs" (
	"id" serial PRIMARY KEY NOT NULL,
	"index_id" integer NOT NULL,
	"slug" varchar(200) NOT NULL,
	"type" varchar(50) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "index_slugs_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "indexes" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(200) NOT NULL,
	"description" varchar(2000),
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
ALTER TABLE "index_bodies" ADD CONSTRAINT "index_bodies_index_id_indexes_id_fk" FOREIGN KEY ("index_id") REFERENCES "public"."indexes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "index_slugs" ADD CONSTRAINT "index_slugs_index_id_indexes_id_fk" FOREIGN KEY ("index_id") REFERENCES "public"."indexes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "index_bodies_index_id_index" ON "index_bodies" USING btree ("index_id");--> statement-breakpoint
CREATE INDEX "index_bodies_created_at_index" ON "index_bodies" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "index_bodies_updated_at_index" ON "index_bodies" USING btree ("updated_at");--> statement-breakpoint
CREATE INDEX "index_slugs_index_id_index" ON "index_slugs" USING btree ("index_id");--> statement-breakpoint
CREATE INDEX "index_slugs_slug_index" ON "index_slugs" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "index_slugs_created_at_index" ON "index_slugs" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "index_slugs_updated_at_index" ON "index_slugs" USING btree ("updated_at");--> statement-breakpoint
CREATE INDEX "indexes_name_index" ON "indexes" USING btree ("name");--> statement-breakpoint
CREATE INDEX "indexes_created_at_index" ON "indexes" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "indexes_updated_at_index" ON "indexes" USING btree ("updated_at");--> statement-breakpoint
CREATE INDEX "indexes_published_at_index" ON "indexes" USING btree ("published_at");--> statement-breakpoint
CREATE INDEX "indexes_unpublished_at_index" ON "indexes" USING btree ("unpublished_at");--> statement-breakpoint
CREATE INDEX "users_name_index" ON "users" USING btree ("name");--> statement-breakpoint
CREATE INDEX "users_created_at_index" ON "users" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "users_updated_at_index" ON "users" USING btree ("updated_at");
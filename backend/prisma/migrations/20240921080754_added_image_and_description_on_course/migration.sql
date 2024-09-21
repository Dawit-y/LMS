/*
  Warnings:

  - Added the required column `description` to the `courses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_courses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_courses" ("created_at", "id", "name", "updated_at") SELECT "created_at", "id", "name", "updated_at" FROM "courses";
DROP TABLE "courses";
ALTER TABLE "new_courses" RENAME TO "courses";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

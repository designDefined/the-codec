import { eq } from "drizzle-orm";

import { Repository } from "../../core/repository";
import { usersTable } from "../../db/db.schema";
import { takeFirstOrThrow } from "../../utility/db";

class UserRepository extends Repository {
  async createUser({ name }: { name: string }) {
    const user = await this.db
      .insert(usersTable)
      .values({ name })
      .returning()
      .then(takeFirstOrThrow);
    return user;
  }

  async readUsers() {
    const users = await this.db.select().from(usersTable);
    return users;
  }

  async readUser({ userId }: { userId: number }) {
    const user = await this.db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, userId))
      .then(takeFirstOrThrow);
    return user;
  }

  async updateUser({
    userId,
    user,
  }: {
    userId: number;
    user: { name?: string };
  }) {
    const updatedUser = await this.db
      .update(usersTable)
      .set(user)
      .where(eq(usersTable.id, userId))
      .returning();
    return updatedUser;
  }

  async deleteUser({ userId }: { userId: number }) {
    const deletedUser = await this.db
      .delete(usersTable)
      .where(eq(usersTable.id, userId))
      .returning();
    return deletedUser;
  }
}

export { UserRepository };

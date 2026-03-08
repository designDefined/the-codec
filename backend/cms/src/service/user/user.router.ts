import { Hono } from "hono";

import { db } from "../../db";
import { integerId } from "../../utility/parameter";
import { UserRepository } from "./user.repository";
import { PostUserPayload } from "./user.types";

const userPrefix = "/users";
const userRouter = new Hono();
const userRepository = new UserRepository(db);

userRouter.get("/", async c => {
  const users = await userRepository.readUsers();

  return c.json({ users });
});

userRouter.get("/:userId", async c => {
  const userId = integerId.parse(c.req.param("userId"));
  const user = await userRepository.readUser({ userId });
  return c.json({ user });
});

userRouter.post("/", async c => {
  const payload = await c.req.json().then(data => PostUserPayload.parse(data));
  const user = await userRepository.createUser(payload);

  return c.json({ user });
});

export { userPrefix, userRouter };

import { RequestHandler } from "express";

export const ErrorMiddleware: RequestHandler = (_, res) => {
  res.status(500).send("Internal server error");
};

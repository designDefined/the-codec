import { RequestHandler } from "express";

type AsyncRequestHandler = (...param: Parameters<RequestHandler>) => Promise<void>;

export const wrap =
  (fn: AsyncRequestHandler): AsyncRequestHandler =>
  (req, res, next) => {
    return fn(req, res, next).catch(next);
  };

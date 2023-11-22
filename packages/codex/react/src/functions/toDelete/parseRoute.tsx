import { DefaultError } from "../../components/DefaultError/DefaultError";
import { ParseFail, ParseSuccess, Parsing } from "../types/RouteParserState";
import { parsePageObject } from "./parsePageObject";
import { targetIsPageObject } from "./predicate";

export const parseRoute = ({
  remainingPaths,
  target,
  nearestErrorPath = { component: () => <DefaultError /> },
  queryString,
}: Parsing): ParseSuccess | ParseFail => {
  // parse: target is path object, so parse it.
  if (targetIsPageObject(target))
    return parsePageObject({
      target,
      remainingPaths,
      nearestErrorPath,
      queryString,
    });

  // parse: no remaining paths, so parse the _index of subtree.
  if (remainingPaths.length === 0)
    return parsePageObject({
      target: target._index,
      remainingPaths,
      nearestErrorPath: target._error ?? nearestErrorPath,
      queryString,
    });

  const [next, ...rest] = remainingPaths;
  const nextTarget = target[next] ?? target._index;

  // parse: next target is PageObject, so parse it.
  if (targetIsPageObject(nextTarget))
    return parsePageObject({
      target: nextTarget,
      remainingPaths: target[next] ? rest : remainingPaths,
      queryString,
      nearestErrorPath: target._error ?? nearestErrorPath,
    });

  // parse: next target is RouteTree, so keep parsing the remaining tree.
  const updatedErrorPath = nextTarget._error ?? nearestErrorPath;
  return parseRoute({
    status: "parsing",
    remainingPaths: rest,
    target: target[next],
    nearestErrorPath: updatedErrorPath,
    queryString,
  });
};

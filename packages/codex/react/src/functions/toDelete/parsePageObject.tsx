import { DefaultError } from "../../components/DefaultError/DefaultError";
import { PageObject } from "../types/PageObject";
import { ParseFail, ParseSuccess, Parsing } from "../types/RouteParserState";
import { pageObjectHasNoParams } from "./predicate";

type ParsingPageObject = Omit<Parsing, "status"> & { target: PageObject };

export const parsePageObject = ({
  target,
  remainingPaths,
  queryString,
  nearestErrorPath,
}: ParsingPageObject): ParseSuccess | ParseFail => {
  if (!pageObjectHasNoParams(target) && target.params.length > 0) {
    // success: remaining paths match the required params
    if (target.params.length === remainingPaths.length) {
      const entries = target.params.map((param, index) => [
        param,
        remainingPaths[index],
      ]);
      return {
        status: "success",
        target,
        error: null,
        queryString,
        params: Object.fromEntries(entries),
      };
    }

    // fail: remaining paths do not match the required params
    return {
      status: "fail",
      target: null,
      error: nearestErrorPath ?? {
        component: () => (
          <DefaultError
            message={`There's no required path parameters${
              target.pathAlias && `for path: ${target.pathAlias}`
            }`}
          />
        ),
      },
    };
  }
  // fail: paths are remaining, but there's no required params
  if (remainingPaths.length > 0)
    return {
      status: "fail",
      target: null,
      error: nearestErrorPath ?? {
        component: () => <DefaultError />,
      },
    };

  // success: no remaining paths, no required params
  return {
    status: "success",
    target,
    error: null,
    queryString,
  };
};

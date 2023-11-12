import { DefaultError } from "../components/DefaultError/DefaultError";
import { PathObject } from "../types/PathObject";
import { ParseFail, ParseSuccess, Parsing } from "../types/RouteParserState";

type ParsingPathObject = Omit<Parsing, "status"> & { target: PathObject };

export const parsePathObject = ({
  target,
  remainingPaths,
  queryString,
  nearestErrorPath,
}: ParsingPathObject): ParseSuccess | ParseFail => {
  if (target.params && target.params.length > 0) {
    // success: remaining paths match the required params
    if (target.params.length === remainingPaths.length) {
      return {
        status: "success",
        target,
        error: null,
        queryString,
        params: Object.fromEntries([target.params, remainingPaths]),
      };
    }

    // fail: remaining paths do not match the required params
    return {
      status: "fail",
      target: null,
      error: nearestErrorPath ?? {
        component: (
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
        component: <DefaultError />,
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

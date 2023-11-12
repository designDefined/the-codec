import classNames from "classnames";
import styles from "./Router.module.css";
import { RouteTree } from "../../types/RouteTree";
import { useRouterStore } from "../../hooks/useRouterStore";
import { useLayoutEffect } from "react";

const cx = classNames.bind(styles);

type RouterProps = {
  routeTree: RouteTree;
};

export default function Router({ routeTree }: RouterProps) {
  const provide = useRouterStore((state) => state.provide);
  const renderState = useRouterStore((state) => state.renderState);

  useLayoutEffect(() => {
    provide(routeTree);
  }, [provide, routeTree]);

  if (!renderState) return null;

  return (
    <div className={cx("Codex")}>
      {renderState.status === ("a" || "toA") &&
        renderState.a.pathObject.component}
      {renderState.status === ("b" || "toB") &&
        renderState.b.pathObject.component}
    </div>
  );
}

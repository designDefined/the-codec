import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { getHistoryFromSessionStorage, saveHistoryToSessionStorage } from "../history";

export const HistoryRecorder = () => {
  const location = useLocation();

  useEffect(() => {
    const history = getHistoryFromSessionStorage();
    if (history[history.length - 1] !== location.pathname) {
      history.push(location.pathname);
      saveHistoryToSessionStorage(history);
    }
  }, [location.pathname]);

  return <Outlet />;
};

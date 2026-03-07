import z from "zod";

const MEMORY_ROUTER_HISTORY_KEY = "memory-router-history";

const getHistoryFromSessionStorage = (): string[] => {
  try {
    const history = z
      .string()
      .array()
      .parse(JSON.parse(sessionStorage.getItem(MEMORY_ROUTER_HISTORY_KEY) ?? ""));
    if (history.length === 0) {
      return ["/"];
    }

    return history;
  } catch {
    return ["/"];
  }
};

const saveHistoryToSessionStorage = (history: string[]) => {
  sessionStorage.setItem(MEMORY_ROUTER_HISTORY_KEY, JSON.stringify(history));
};

export { getHistoryFromSessionStorage, saveHistoryToSessionStorage };

export type Path = { type: "home" } | { type: "page"; id: number } | { type: "error" };

export const parsePath = (url: string): Path => {
  const paths = url.split("/").slice(1);
  if (paths.length < 1) return { type: "error" };
  if (paths.length === 1 && paths[0] === "home") return { type: "home" };
  if (paths.length === 2 && paths[0] === "pages") {
    const id = Number(paths[1]);
    if (Number.isInteger(id)) return { type: "page", id };
    return { type: "error" };
  }
  return { type: "error" };
};

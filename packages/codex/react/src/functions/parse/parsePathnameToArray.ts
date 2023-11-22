export const parsePathnameToArray = (pathname: string | undefined) => {
  if (!pathname) return [];
  const path = pathname.split("/").filter((p) => p.length > 0);
  return path;
};

export const parsePathname = (pathname: string | undefined): string[] => {
  if (!pathname) return [];
  const path = pathname.split("/").filter((p) => p.length > 0);
  return path;
};

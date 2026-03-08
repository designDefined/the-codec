export type HomeDatum = {
  title: string;
};
export type PageDatum = {
  id: number;
  color: string;
  contents: string[];
};

export const fetchDynamic = async <T>(endpoint: string) => {
  try {
    const data = (await import(`.${endpoint}`)) as { default: T };
    return data.default;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const fetchStatic = async <T>(endpoint: string) => {
  try {
    const raw = await fetch(`/data${endpoint}`);
    return (await raw.json()) as T;
  } catch (e) {
    console.error(e);
    return null;
  }
};

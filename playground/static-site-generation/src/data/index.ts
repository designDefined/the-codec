export type Datum = {
  id: number;
  color: string;
  contents: string[];
};

export const fetchData = async (id: number) => {
  try {
    const data = (await import(`./${id}.json`)) as { default: Datum };
    return data.default;
  } catch (e) {
    console.error(e);
    return null;
  }
};

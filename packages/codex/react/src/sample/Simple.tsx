import { PageProps } from "../types/PageProps";

function Simple({ status }: PageProps) {
  return <div>simple {status}</div>;
}

export const SimplePage = {
  component: Simple,
};

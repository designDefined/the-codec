import { PagePropsWithParams } from "../types/PageProps";

const paramKeys = ["item_id"] as const;

function Item({ params }: PagePropsWithParams<typeof paramKeys>) {
  return <div>item with id: {params.item_id}</div>;
}

export const ItemPage = {
  component: Item,
  params: paramKeys,
};

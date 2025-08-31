import { useStateOf } from "@enun/react";
import { IndexState } from "module/index";

export function IndexPage() {
  const {
    value: { name, setName },
  } = useStateOf(IndexState);

  return (
    <div>
      <input
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
      />
    </div>
  );
}

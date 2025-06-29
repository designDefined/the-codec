import { hydrateRoot } from "react-dom/client";
import { HomePage } from "../../../ui-blog/home/HomePage";

hydrateRoot(document.getElementById("root") as HTMLElement, <HomePage />);

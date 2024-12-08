import { hydrateRoot } from "react-dom/client";
import { HomePage } from "../../../ui-editor/home/HomePage";

hydrateRoot(document.getElementById("root") as HTMLElement, <HomePage />);

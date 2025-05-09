import Root from "./Root/Root";
import { getPlants } from "./services/Plants";
import plantCard from "./components/plantCard";

customElements.define('root-element', Root);
customElements.define('plant-card', plantCard);

getPlants()
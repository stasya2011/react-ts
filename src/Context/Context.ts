import { createContext } from "react";
import { IContext } from "../types/types";
const Context = createContext<IContext>({ cards: [], onFilter: () => {} });

export default Context;

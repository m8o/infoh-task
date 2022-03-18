import { createStore } from "redux";
import dataReducer from "./Reducers/dataReducer";

const store = createStore(dataReducer);
export default store;

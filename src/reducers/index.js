import { rootstore } from "../store/storeconfig";
export default function reducer(store = rootstore, action) {
  if (action.type === "ADD_USERNAME")
    return {
      username: action.username,
    };
  return store;
}

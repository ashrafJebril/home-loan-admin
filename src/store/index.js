import { init } from "@rematch/core";

import persistPlugin from "@rematch/persist";
import storage from "redux-persist/lib/storage";
import user from "./user";

const models = {
  user,
};

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["loading", "popup"],
};

const store = init({
  plugins: [persistPlugin(persistConfig)],
  models,
});
export default store;

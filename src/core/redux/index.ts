import { configureStore } from "@reduxjs/toolkit";
import soundStore from "../../features/redux/soundStore";

export const store = configureStore({
  reducer: {
    sounds: soundStore,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

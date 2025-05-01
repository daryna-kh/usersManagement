import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
// import counterReducer from "../features/counter/counterSlice";
// import authReducer from "../features/auth/authSlice";
export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    // auth: authReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

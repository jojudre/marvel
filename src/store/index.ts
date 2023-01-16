import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { loadState, saveState } from 'utils';
import heroesReducer from './heroesSlice';

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    heroes: heroesReducer,
  },
  preloadedState: persistedState
});

store.subscribe(
    () => saveState({
      ...store.getState(),
    })
  )

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

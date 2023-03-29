import { Iterable } from "immutable";
import {
  configureStore,
  createSerializableStateInvariantMiddleware,
  isPlain,
} from "@reduxjs/toolkit";
import expensesSlice from "./expensesSlice";

// Augment middleware to consider Immutable.JS iterables serializable
const isSerializable = (value) => Iterable.isIterable(value) || isPlain(value);

const getEntries = (value) =>
  Iterable.isIterable(value) ? value.entries() : Object.entries(value);

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  isSerializable,
  getEntries,
});

export const store = configureStore({
  reducer: {
    expenses: expensesSlice,
  },
  middleware: [serializableMiddleware],
});

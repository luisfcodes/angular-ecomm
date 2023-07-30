import { createReducer, on } from "@ngrx/store";
import { categoryActions } from "./category.action";

interface CategoryState {
  categories: string[];
  currentCategory: string;
}

const initialState: CategoryState = {
  categories: [],
  currentCategory: ''
}

export const categoryReducer = createReducer(
  initialState,
  on(categoryActions, (state, action) => ({
    ...state,
    categories: state.categories,
  })),
)

import { createReducer, on } from "@ngrx/store";
import { categoryActionsSuccess, categoryActionsError } from "./category.action";

export interface CategoryState {
  categories: string[];
  currentCategory: string;
  error: string;
}

const initialState: CategoryState = {
  categories: [],
  currentCategory: '',
  error: '',
}

export const categoryReducer = createReducer(
  initialState,
  on(categoryActionsSuccess, (state, action) => ({
    ...state,
    categories: action.categories,
    error: '',
  })),
  on(categoryActionsError, (state, action) => ({
    ...state,
    categories: [],
    error: action.error,
  })),
)

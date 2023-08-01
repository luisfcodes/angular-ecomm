import { createAction } from '@ngrx/store'

export const getCategoriesActions = createAction('[Category] Get Categories')

export const categoryActionsSuccess = createAction('[Category] Get Categories Success', (categories: string[]) => ({ categories }))

export const categoryActionsError = createAction('[Category] Get Categories Error', (error: string) => ({ error }))

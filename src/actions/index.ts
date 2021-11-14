import { createAction } from 'redux-actions';

export const promptShow = createAction('PROMPT_SHOW');
export const promptHide = createAction('PROMPT_HIDE');

export const updateForm = createAction('FORM_UPDATE');

export const addingItem = createAction('ITEM_ADDING');
export const addItem = createAction('ITEM_ADD');

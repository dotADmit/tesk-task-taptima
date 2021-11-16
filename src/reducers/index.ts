import { combineReducers } from 'redux';
import { Action, handleActions } from 'redux-actions';

import * as actions from '../actions';

const prompts = {
  mainForm: 'show',
  mainBtn: 'hidden',
  selectionForm: 'show',
  searching: 'show',
  addingItem: 'show',
  addingBtn: 'show',
};

const promptsUIState = handleActions({
  [actions.promptShow.toString()](state: object, { payload: name }: Action<string>) {
    return { ...state, [name]: 'show' };
  },
  [actions.promptHide.toString()](state: object, { payload: name }: Action<string>) {
    return { ...state, [name]: 'hidden' };
  },
}, prompts);

const formState = handleActions({
  [actions.updateForm.toString()](
    state: object,
    { payload: { propName, value } }: Action<{ propName: string; value: string | boolean }>
  ) {
    return { ...state, [propName]: value };
  },
}, { from: '', to: 'moscow', currency: 'usd', submitDisabled: true });

const addingState = handleActions({
  [actions.addingItem.toString()](state: object, { payload: item }) {
    return item;
  },
}, []);

const order = handleActions({
  [actions.addItem.toString()](state: Array<object>, { payload: item }) {
    return [...state, item];
  },
}, []);

export default combineReducers({
  promptsUIState,
  formState,
  addingState,
  order,
});

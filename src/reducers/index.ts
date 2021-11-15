import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
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
  [actions.promptShow](state: object, { payload: name }) {
    return { ...state, [name]: 'show' };
  },
  [actions.promptHide](state: object, { payload: name }) {
    return { ...state, [name]: 'hidden' };
  },
}, prompts);

const formState = handleActions({
  [actions.updateForm](state: object, { payload: { propName, value } }) {
    return { ...state, [propName]: value };
  },
}, { from: '', to: 'moscow', currency: 'usd', submitDisabled: true});

const addingState = handleActions({
  [actions.addingItem](state: object, { payload: item}) {
    console.log(item)
    return item;
  },
}, []);

const order = handleActions({
  [actions.addItem](state: object, { payload: item }) {
    return [ ...state, item ];
  },
}, []);

export default combineReducers({
  promptsUIState,
  formState,
  addingState,
  order,
});

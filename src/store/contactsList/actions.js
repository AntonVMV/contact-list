import * as actionTypes from './actionTypes';

export const itemCreate = value => ({
  type: actionTypes.CREATE_CONTACT,
  payload: value,
});

export const itemDelete = value => ({
  type: actionTypes.DELETE_CONTACT,
  payload: value,
});

export const itemUpdate = (value, id) => ({
  type: actionTypes.UPDATE_CONTACT,
  payload: {value, id},
});

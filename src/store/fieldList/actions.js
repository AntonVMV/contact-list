import * as actionTypes from './actionTypes';

export const fieldCreate = value => ({
  type: actionTypes.CREATE_FIELD,
  payload: value,
});

export const fieldDelete = value => ({
  type: actionTypes.DELETE_FIELD,
  payload: value,
});

export const fieldUpdate = (value, id) => ({
  type: actionTypes.UPDATE_FIELD,
  payload: {value, id},
});

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
import { createSelector } from 'reselect';

const idSelector = (_, props) => props.id;
export const idsSelector = (_, props) => props.ids;

export const getById = selector =>
  createSelector(selector, idSelector, (entity, id) => entity[id]);

export const getAverage = arr =>
  arr.reduce((acc, rating) => acc + rating) / arr.length;

export const mapToList = selector => createSelector(selector, Object.values);

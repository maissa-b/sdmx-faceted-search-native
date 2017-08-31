import { reduce, sortBy, toPairs } from 'ramda';
import { createSelector } from 'reselect';
import { DIMENSION } from './dataflows';

const getStateFacets = state => state.facets;

const sortFacets = ({ type, buckets }) => {
  if (type !== DIMENSION) return buckets;
  return sortBy(bucket => bucket.val, buckets);
};

export const getFacets = createSelector(
  [getStateFacets],
  facets => reduce((acc, [name, facet]) => [...acc, { ...facet, buckets: sortFacets(facet), name }], [], toPairs(facets)),
);

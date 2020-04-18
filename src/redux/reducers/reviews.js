import { normalizedReviews, normalizedUsers } from '../../fixtures';

const users = normalizedUsers.reduce((acc, user) => {
  acc[user.id] = user.name;
  return acc;
}, {});

const defaultReviews = normalizedReviews.reduce((acc, review) => {
  acc[review.id] = {
    user: users[review.userId],
    text: review.text,
    rating: review.rating
  };
  return acc;
}, {});

export default (reviews = defaultReviews, action) => {
  const { type } = action;
  switch (type) {
    default:
      return reviews;
  }
};

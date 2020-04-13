import React from 'react';
import { mount } from 'enzyme';
import Reviews from './reviews';
import AverageRating from '../average-rating';

import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;
const userName = restaurants[0].reviews[0].user;
const comment = restaurants[0].reviews[0].text;
const rating = restaurants[0].reviews[0].rating;

const rawRating =
  reviews.reduce((sum, curReview) => curReview.rating + sum, 0) /
  reviews.length;
const normalizedRating = Math.floor(rawRating * 2) / 2;

describe('Reviews', () => {
  it('should render Review', () => {
    const component = mount(<Reviews reviews={reviews} />);
    expect(component.find('[data-id="review-component"]').at(0).length).toBe(1);
  });

  it('username should match', () => {
    const component = mount(<Reviews reviews={reviews} />);
    expect(
      component
        .find('[data-id="review-name"]')
        .at(0)
        .text()
    ).toBe(userName);
  });

  it('comment should match', () => {
    const component = mount(<Reviews reviews={reviews} />);
    expect(
      component
        .find('[data-id="review-comment"]')
        .at(0)
        .text()
    ).toBe(comment);
  });

  it('rating should match', () => {
    const component = mount(<Reviews reviews={reviews} />);
    expect(
      component
        .find('[data-id="review-rate"]')
        .at(0)
        .prop('value')
    ).toBe(rating);
  });

  it('average rating should match', () => {
    const reviewsComponent = mount(<Reviews reviews={reviews} />);
    const averageRatingComponent = mount(<AverageRating reviews={reviews} />);
    expect(
      averageRatingComponent
        .find('Rate')
        .at(0)
        .prop('value')
    ).toBe(normalizedRating);
  });
});

import React from 'react';
import { mount } from 'enzyme';
import Reviews from './reviews';
import Review from './review';

import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;
const review = restaurants[0].reviews[0];

describe('Reviews', () => {
  it('should render all reviews', () => {
    const reviewsComponent = mount(<Reviews reviews={reviews} />);
    expect(reviewsComponent.find('div[data-id="review"]').length).toBe(
      reviews.length
    );
  });

  const reviewComponent = mount(<Review {...review} />);

  it('should render review user', () => {
    expect(
      reviewComponent
        .find('[data-id="review-user"]')
        .at(0)
        .text()
    ).toBe(review.user);
  });

  it('should render review text', () => {
    expect(
      reviewComponent
        .find('[data-id="review-text"]')
        .at(0)
        .text()
    ).toBe(review.text);
  });

  it('should render review rating', () => {
    expect(
      reviewComponent
        .find('Rate')
        .at(0)
        .props().value
    ).toBe(review.rating);
  });
});

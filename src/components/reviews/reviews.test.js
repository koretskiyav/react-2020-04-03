import React from 'react';
import { mount } from 'enzyme';
import Reviews from './reviews';

import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;

describe('Reviews', () => {
  it('should render Reviews', () => {
    const component = mount(<Reviews reviews={reviews} />);

    expect(component.find('div[data-id="reviews-row"]').length).toBe(1);
  });

  it('should render Review', () => {
    const component = mount(<Reviews reviews={reviews} />);

    expect(component.find('div[data-id="review-card"]').length).toBe(
      reviews.length
    );
  });

  it('should render user in Review', () => {
    const reviewUser = reviews[0].user;
    const component = mount(<Reviews reviews={reviews} />);

    expect(
      component
        .find('[data-id="review-user"]')
        .at(0)
        .text()
    ).toBe(reviewUser);
  });

  it('should render text in Review', () => {
    const reviewText = reviews[0].text;
    const component = mount(<Reviews reviews={reviews} />);

    expect(
      component
        .find('[data-id="review-text"]')
        .at(0)
        .text()
    ).toBe(reviewText);
  });

  it('should render rating in Review', () => {
    const reviewRating = reviews[0].rating;
    const component = mount(<Reviews reviews={reviews} />);

    expect(
      component
        .find('[data-id="review-rating"]')
        .at(0)
        .props().value
    ).toBe(reviewRating);
  });
});

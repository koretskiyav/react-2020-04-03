import React from 'react';
import { mount } from 'enzyme';
import Review from './review';

import { restaurants } from '../../../fixtures';

const review = restaurants[0].reviews[0];

describe('Review', () => {
  it('should render Review', () => {
    const component = mount(
      <Review user={review.user} text={review.text} rating={review.rating} />
    );
    expect(component.find('Card').length).toBe(1);
  });

  it('should display review props', () => {
    const component = mount(
      <Review user={review.user} text={review.text} rating={review.rating} />
    );
    expect(
      component
        .find('[data-id="review-user"]')
        .at(0)
        .text()
    ).toBe(review.user);
    expect(
      component
        .find('[data-id="review-text"]')
        .at(0)
        .text()
    ).toBe(review.text);
    console.log(component.find('[data-id="review-rating"]').at(0));
    expect(
      component
        .find('[data-id="review-rating"]')
        .at(0)
        .prop('value')
    ).toBe(review.rating);
  });

  it('should display Anonymous when user prop not defined', () => {
    const component = mount(
      <Review text={review.text} rating={review.rating} />
    );
    expect(
      component
        .find('[data-id="review-user"]')
        .at(0)
        .text()
    ).toBe('Anonymous');
  });
});

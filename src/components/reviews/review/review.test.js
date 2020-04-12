import React from 'react';
import { mount } from 'enzyme';

import { restaurants } from '../../../fixtures';
import Review from './review';

const review = restaurants[0].reviews[0];

describe('Review', () => {
  let component;

  beforeEach(() => {
    component = mount(
      <Review user={review.user} text={review.text} rating={review.rating} />
    );
  });

  it('should render Review', () => {
    expect(component.find('Card').length).toBe(1);
  });

  it('should render user as title', () => {
    expect(
      component
        .find('[data-id="review-title"]')
        .at(0)
        .text()
    ).toBe(review.user);
  });

  it('should render text', () => {
    expect(
      component
        .find('[data-id="review-text"]')
        .at(0)
        .text()
    ).toBe(review.text);
  });

  it('should render rating', () => {
    expect(
      component
        .find('Rate')
        .at(0)
        .prop('value')
    ).toBe(review.rating);
  });
});

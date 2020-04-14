import React from 'react';
import { mount } from 'enzyme';

import Review from './review';
import { restaurants } from '../../../fixtures';

const review = restaurants[0].reviews[0];

describe('Review', () => {
  it('should rate`s value equal rating', () => {
    const component = mount(<Review {...review} />);
    expect(
      component
        .find('[data-id="review-rate"]')
        .at(0)
        .props().value
    ).toBe(review.rating);
  });

  it('should Typography.Title text equal user', () => {
    const component = mount(<Review {...review} />);
    expect(
      component
        .find('[data-id="review-title"]')
        .at(0)
        .text()
    ).toBe(review.user);
  });

  it('should Typography.Text text equal text', () => {
    const component = mount(<Review {...review} />);
    expect(
      component
        .find('[data-id="review-text"]')
        .at(0)
        .text()
    ).toBe(review.text);
  });
});

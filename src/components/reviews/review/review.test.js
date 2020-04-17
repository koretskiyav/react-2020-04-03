import React from 'react';
import { mount } from 'enzyme';
import Review from './review';
import { restaurants } from '../../../fixtures';

const review = restaurants[0].reviews[0];

describe('Review', () => {
  const component = mount(<Review {...review} />);

  it('should render Review', () => {
    expect(component.find('Card').length).toBe(1);
  });

  it('should render user name', () => {
    expect(
      component
        .find('[data-id="review-user"]')
        .at(0)
        .text()
    ).toBe('Antony');
  });

  it('should render text', () => {
    expect(
      component
        .find('[data-id="review-text"]')
        .at(0)
        .text()
    ).toBe('Not bad');
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

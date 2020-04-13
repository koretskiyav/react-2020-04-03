import React from 'react';
import { mount } from 'enzyme';
import Reviews from './reviews';

import { restaurants } from '../../fixtures';
import Dish from '../dish/dish';

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
});

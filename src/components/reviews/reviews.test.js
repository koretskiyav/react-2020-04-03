import React from 'react';
import { mount } from 'enzyme';

import Reviews from './reviews';
import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;

describe('Reviews', () => {
  it('should render reviews', () => {
    const component = mount(<Reviews reviews={reviews} />);
    expect(component.find('Review').length).toBe(reviews.length);
  });

  it('should render empty reviews', () => {
    const component = mount(<Reviews reviews={[]} />);
    expect(component.find('Review').length).toBe(0);
  });
});

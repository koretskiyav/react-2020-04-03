import React from 'react';
import { mount } from 'enzyme';
import Reviews from './reviews';

import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;

describe('Reviews', () => {
  it('should render reviews', () => {
    const component = mount(<Reviews reviews={reviews} />);
    const count = component.find('Review').length;
    expect(component.find('Review').length).toBe(count);
  });
});

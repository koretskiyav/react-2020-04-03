import React from 'react';
import { restaurants } from '../../fixtures';
import Reviews from './reviews';
import { mount } from 'enzyme';

const reviews = restaurants[0].reviews;

describe('Reviews', () => {
  it('should render reviews', () => {
    const component = mount(<Reviews reviews={reviews} />);
    expect(component.find('Review').length).toBe(2);
  });
});

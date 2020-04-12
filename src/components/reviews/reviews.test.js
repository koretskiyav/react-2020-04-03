import React from 'react';
import { mount } from 'enzyme';

import { restaurants } from '../../fixtures';
import Reviews from './reviews';

const reviews = restaurants[0].reviews;

describe('Reviews', () => {
  let component;

  beforeEach(() => {
    component = mount(<Reviews reviews={reviews} />);
  });

  it('should render Reviews', () => {
    expect(component.find('[data-id="reviews-row"]').length).toBe(
      reviews.length
    );
  });
});

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
        .find('Rate')
        .at(0)
        .props().value
    ).toBe(review.rating);
  });
});

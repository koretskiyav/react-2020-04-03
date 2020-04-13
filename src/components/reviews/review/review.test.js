import React from 'react';
import { mount } from 'enzyme';
import Review from './review';
import { restaurants } from '../../../fixtures';

const review = restaurants[0].reviews[0];

describe('Review', () => {
  it('should render Review', () => {
    const component = mount(<Review {...review} />);
    expect(component.find('Review').length).toBe(1);
  });

  it('should user is Anonymous when user is undefined', () => {
    const component = mount(<Review {...review} />);
    const username = component.find('[data-id="review-username"]').at(0);
    if (username === undefined) expect(username.text().toBe('Anonymous'));
  });
});

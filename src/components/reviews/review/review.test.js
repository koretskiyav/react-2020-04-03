import React from 'react';
import { restaurants } from '../../../fixtures';
import { mount } from 'enzyme';
import Review from './review';

const review = restaurants[0].reviews[1];

describe('Review', () => {
  let component;

  beforeEach(() => {
    component = mount(<Review {...review} />);
  });

  it('should render review', () => {
    expect(component.find('Review').length).toBe(1);
  });

  it('should render user name', () => {
    expect(
      component
        .find('[data-id="review-user"]')
        .at(0)
        .text()
    ).toBe('Sam');
  });

  it('should render text', () => {
    expect(
      component
        .find('[data-id="review-text"]')
        .at(0)
        .text()
    ).toBe('No burgers');
  });

  it('should render 3 fulled stars', () => {
    expect(component.find('.ant-rate-star-full').length).toBe(3);
  });
});

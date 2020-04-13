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

  it('should display all reviews props', () => {
    const component = mount(<Reviews reviews={reviews} />);
    for (let i = 0; i < reviews.length; i++) {
      const reviewNode = component
        .findWhere(node => node.key() === reviews[i].id)
        .at(0);
      expect(
        reviewNode
          .find('[data-id="review-user"]')
          .at(0)
          .text()
      ).toBe(reviews[i].user);
      expect(
        reviewNode
          .find('[data-id="review-text"]')
          .at(0)
          .text()
      ).toBe(reviews[i].text);
      expect(
        reviewNode
          .find('[data-id="review-rating"]')
          .at(0)
          .prop('value')
      ).toBe(reviews[i].rating);
    }
  });

  it('should display Anonymous when user is undefined', () => {
    const component = mount(<Reviews reviews={[{ text: 'lol', rating: 2 }]} />);
    expect(
      component
        .find('[data-id="review-user"]')
        .at(0)
        .text()
    ).toBe('Anonymous');
  });
});

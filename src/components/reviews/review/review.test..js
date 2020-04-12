import React from 'react';
import { mount } from 'enzyme';
import Review from './review';

import { restaurants } from '../../../fixtures';

const review = restaurants[0].reviews[0];

describe('Review', () => {
  const component = mount(<Review review={review} />);
  const card = component.find('Card');
  const reviewUser = component.find('[data-id="review-user"]');
  const reviewText = component.find('[data-id="review-text"]');
  const reviewRate = component.find('[data-id="review-rate"]');

  it('should render Review', () => {
    expect(card.length).toBe(1);
  });

  it('should render user', () => {
    expect(reviewUser.at(0).text()).toBe(review.user);
  });

  it('should render text', () => {
    expect(reviewText.at(0).text()).toBe(review.text);
  });

  it('should render rate', () => {
    expect(reviewRate.at(0).text()).toBe(review.rate);
  });
});

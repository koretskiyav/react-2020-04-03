import React from 'react';
import { mount } from 'enzyme';
import Review from './review';

import { restaurants } from '../../../fixtures';

const review = restaurants[0].reviews[0];

describe('Review', () => {
  const component = mount(
    <Review user={review.user} text={review.text} rating={review.rating} />
  );
  const card = component.find('Card');
  const reviewUser = component.find('[data-id="review-user"]');
  const reviewText = component.find('[data-id="review-text"]');
  const reviewRate = component.find('[data-id="review-rate"]');

  it('should render Review', () => {
    expect(card.length).toBe(1);
  });

  it('should render user', () => {
    expect(reviewUser.at(0).text()).toBe('Antony');
  });

  it('should render text', () => {
    expect(reviewText.at(0).text()).toBe('Not bad');
  });

  it('should render rate', () => {
    expect(reviewRate.at(0).prop('value')).toBe(5);
  });
});

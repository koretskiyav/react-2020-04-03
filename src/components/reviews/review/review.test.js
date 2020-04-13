import React from 'react';
import { mount } from 'enzyme';
import Review from './review';

import { restaurants } from '../../../fixtures';

const review = restaurants[0].reviews[0];

describe('Review', () => {
  let component, card, reviewUser, reviewText, reviewRate;

  beforeEach(() => {
    component = mount(
      <Review user={review.user} text={review.text} rating={review.rating} />
    );
    card = component.find('Card');
    reviewUser = component.find('[data-id="review-user"]');
    reviewText = component.find('[data-id="review-text"]');
    reviewRate = component.find('[data-id="review-rate"]');
  });

  afterEach(() => {
    component.unmount();
  });

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

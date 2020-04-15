import React from 'react';
import { restaurants } from '../../../fixtures';
import { mount } from 'enzyme';
import Review from './review';

const review = restaurants[0].reviews[1];

describe('Review', () => {
  let component, nameEl, textEl, rateEl;
  beforeEach(() => {
    component = mount(<Review {...review} />);
    nameEl = component.find('[data-id="review-user"]').at(0);
    textEl = component.find('[data-id="review-text"]').at(0);
    rateEl = component.find('.ant-rate-star-full');
  });

  it('should render review', () => {
    expect(component.find('Review').length).toBe(1);
  });

  it('should render user name', () => {
    expect(nameEl.text()).toBe(review.user);
  });

  it('should render text', () => {
    expect(textEl.text()).toBe(review.text);
  });

  it('should render 3 fulled stars', () => {
    expect(rateEl.length).toBe(review.rating);
  });
});

describe('Anonymous Review', () => {
  let component, nameEl;

  beforeEach(() => {
    component = mount(<Review text={review.text} rating={review.rating} />);
    nameEl = component.find('[data-id="review-user"]').at(0);
  });

  it('should render anonymous name', () => {
    expect(nameEl.text()).toBe('Anonymous');
  });
});

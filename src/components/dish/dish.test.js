import React from 'react';
import { mount } from 'enzyme';
import Dish from './dish';

import { restaurants } from '../../fixtures';

const dish = restaurants[0].menu[0];

describe('Dish', () => {
  const component = mount(<Dish dish={dish} />);
  const card = component.find('Card');
  const amount = component.find('[data-id="dish-amount"]');
  const incrementButton = component.find('[data-id="dish-increment"]');
  const decrementButton = component.find('[data-id="dish-decrement"]');

  it('should render Dish', () => {
    expect(card.length).toBe(1);
  });

  it('should render with initial amount 0', () => {
    expect(amount.at(0).text()).toBe('0');
  });

  it('should increment amount', () => {
    expect(amount.at(0).text()).toBe('0');
    incrementButton.at(0).simulate('click');
    expect(amount.at(0).text()).toBe('1');
  });

  it('should decrement amount', () => {
    expect(amount.at(0).text()).toBe('1');
    decrementButton.at(0).simulate('click');
    expect(amount.at(0).text()).toBe('0');
  });

  it('should decrement amount', () => {
    expect(amount.at(0).text()).toBe('0');
    decrementButton.at(0).simulate('click');
    expect(amount.at(0).text()).toBe('0');
  });

  it('should increment amount', () => {
    const fn = jest.fn();
    mount(<Dish dish={dish} fetchData={fn} />);
    expect(fn).toBeCalledWith(dish.id);
  });
});

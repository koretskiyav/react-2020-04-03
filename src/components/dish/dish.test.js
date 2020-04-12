import React from 'react';
import { mount } from 'enzyme';
import Dish from './dish';

import { restaurants } from '../../fixtures';

const dish = restaurants[0].menu[0];

describe('Dish', () => {
  let component;
  let countEl;
  let incrementEl;
  let decrementEl;

  beforeEach(() => {
    component = mount(<Dish dish={dish} />);
    countEl = component.find('[data-id="dish-amount"]').at(0);
    incrementEl = component.find('[data-id="dish-increment"]').at(0);
    decrementEl = component.find('[data-id="dish-decrement"]').at(0);
  });

  it('should render Dish', () => {
    expect(component.find('Card').length).toBe(1);
  });

  it('should render with initial amount 0', () => {
    expect(countEl.text()).toBe('0');
  });

  it('should increment amount', () => {
    expect(countEl.text()).toBe('0');
    incrementEl.simulate('click');
    expect(countEl.text()).toBe('1');
  });

  it('should increment amount', () => {
    const fn = jest.fn();

    mount(<Dish dish={dish} fetchData={fn} />);
    expect(fn).toBeCalledWith(dish.id);
  });

  it('should decrement amount', () => {
    expect(countEl.text()).toBe('0');
    incrementEl.simulate('click');
    expect(countEl.text()).toBe('1');
    decrementEl.simulate('click');
    expect(countEl.text()).toBe('0');
  });
});

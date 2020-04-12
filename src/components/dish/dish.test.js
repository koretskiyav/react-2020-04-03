import React from 'react';
import { mount } from 'enzyme';
import Dish from './dish';

import { restaurants } from '../../fixtures';

const dish = restaurants[0].menu[0];

describe('Dish', () => {
  let component;
  let getIncrementBtn;
  let getDecrementBtn;
  let getAmount;

  beforeEach(() => {
    component = mount(<Dish dish={dish} />);
    getIncrementBtn = () => component.find('[data-id="dish-increment"]').at(0);
    getDecrementBtn = () => component.find('[data-id="dish-decrement"]').at(0);
    getAmount = () =>
      component
        .find('[data-id="dish-amount"]')
        .at(0)
        .text();
  });

  it('should render Dish', () => {
    expect(component.find('Card').length).toBe(1);
  });

  it('should render with initial amount 0', () => {
    expect(getAmount()).toBe('0');
  });

  it('should increment amount', () => {
    expect(getAmount()).toBe('0');
    getIncrementBtn().simulate('click');
    expect(getAmount()).toBe('1');
  });

  it('should decrement zero amount as zero', () => {
    expect(getAmount()).toBe('0');
    getDecrementBtn().simulate('click');
    expect(getAmount()).toBe('0');
  });

  it('should decrement amount > 1', () => {
    expect(getAmount()).toBe('0');
    getIncrementBtn().simulate('click');
    expect(getAmount()).toBe('1');
    getDecrementBtn().simulate('click');
    expect(getAmount()).toBe('0');
  });
});

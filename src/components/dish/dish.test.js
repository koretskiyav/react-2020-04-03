import React from 'react';
import { mount } from 'enzyme';
import Dish from './dish';

import { restaurants } from '../../fixtures';

const dish = restaurants[0].menu[0];

describe('Dish', () => {
  let component, amountEl, decrementBtn, incrementBtn;

  function init(extraProps) {
    component = mount(<Dish dish={dish} {...extraProps} />);
    amountEl = component.find('div[data-id="dish-amount"]').at(0);
    decrementBtn = component.find('button[data-id="dish-decrement"]').at(0);
    incrementBtn = component.find('button[data-id="dish-increment"]').at(0);
  }

  afterEach(() => {
    component.unmount();
  });

  it('should render Dish', () => {
    init();
    expect(component.find('Card').length).toBe(1);
  });

  it('should render with initial amount 0', () => {
    init();
    expect(amountEl.text()).toBe('0');
  });

  it('should render with initial amount 2', () => {
    init({ initialCount: 2 });
    expect(amountEl.text()).toBe('2');
  });

  it('should increment amount', () => {
    init();
    incrementBtn.simulate('click');
    expect(amountEl.text()).toBe('1');
  });

  it('should decrement amount', () => {
    init({ initialCount: 4 });
    decrementBtn.simulate('click');
    expect(amountEl.text()).toBe('3');
  });

  it("shouldn't decrement with 0 amount", () => {
    init();
    decrementBtn.simulate('click');
    expect(amountEl.text()).toBe('0');
  });

  it('should fetch data', () => {
    const fn = jest.fn();
    init({ fetchData: fn });
    expect(fn).toBeCalledWith(dish.id);
  });
});

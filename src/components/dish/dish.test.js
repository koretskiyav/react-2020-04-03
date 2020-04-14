import React from 'react';
import { mount } from 'enzyme';
import Dish from './dish';

import { restaurants } from '../../fixtures';

const dish = restaurants[0].menu[0];

describe('Dish', () => {
  it('should render Dish', () => {
    const component = mount(<Dish dish={dish} />);
    expect(component.find('Card').length).toBe(1);
  });

  it('should render with initial amount 0', () => {
    const component = mount(<Dish dish={dish} />);
    expect(
      component
        .find('[data-id="dish-amount"]')
        .at(0)
        .text()
    ).toBe('0');
  });

  it('should increment amount', () => {
    const component = mount(<Dish dish={dish} />);
    expect(
      component
        .find('[data-id="dish-amount"]')
        .at(0)
        .text()
    ).toBe('0');
    component
      .find('[data-id="dish-increment"]')
      .at(0)
      .simulate('click');
    expect(
      component
        .find('[data-id="dish-amount"]')
        .at(0)
        .text()
    ).toBe('1');
  });

  it('should increment amount', () => {
    const fn = jest.fn();

    mount(<Dish dish={dish} fetchData={fn} />);
    expect(fn).toBeCalledWith(dish.id);
  });

  it('should decrement amount', () => {
    const component = mount(<Dish dish={dish} />);
    expect(
      component
        .find('[data-id="dish-amount"]')
        .at(0)
        .text()
    ).toBe('0');
    component
      .find('[data-id="dish-increment"]')
      .at(0)
      .simulate('click');
    expect(
      component
        .find('[data-id="dish-amount"]')
        .at(0)
        .text()
    ).toBe('1');

    component
      .find('[data-id="dish-decrement"]')
      .at(0)
      .simulate('click');
    expect(
      component
        .find('[data-id="dish-amount"]')
        .at(0)
        .text()
    ).toBe('0');
  });

  it('should not decrease the value 0', () => {
    const component = mount(<Dish dish={dish} />);
    component
      .find('[data-id="dish-decrement"]')
      .at(0)
      .simulate('click');
    expect(
      component
        .find('[data-id="dish-amount"]')
        .at(0)
        .text()
    ).toBe('0');
  });
});

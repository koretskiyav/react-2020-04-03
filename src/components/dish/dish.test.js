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

  // Проверяет сумму на увеличение и уменьшение
  it('should increment then decrement amount', () => {
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

  // Сумма не должна быть отрицательной
  it('should amount is equal 0 when decrement', () => {
    const component = mount(<Dish dish={dish} />);
    expect(
      component
        .find('[data-id="dish-amount"]')
        .at(0)
        .text()
    ).toBe('0');
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

  it('should test func run', () => {
    const fn = jest.fn();

    mount(<Dish dish={dish} fetchData={fn} />);
    expect(fn).toBeCalledWith(dish.id);
  });
});

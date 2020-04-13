import React from 'react';
import { mount } from 'enzyme';
import Dish from './dish';

import { restaurants } from '../../fixtures';

const dish = restaurants[0].menu[0];

const dishAmount = elem =>
  elem
    .find('[data-id="dish-amount"]')
    .at(0)
    .text();

describe('Dish', () => {
  it('should render Dish', () => {
    const component = mount(<Dish dish={dish} />);
    expect(component.find('Card').length).toBe(1);
  });

  it('should render with initial amount 0', () => {
    const component = mount(<Dish dish={dish} />);
    expect(dishAmount(component)).toBe('0');
  });

  it('should increment amount', () => {
    const component = mount(<Dish dish={dish} />);

    component
      .find('[data-id="dish-increment"]')
      .at(0)
      .simulate('click');
    expect(dishAmount(component)).toBe('1');
  });

  it('should increment amount', () => {
    const fn = jest.fn();

    mount(<Dish dish={dish} fetchData={fn} />);
    expect(fn).toBeCalledWith(dish.id);
  });
});

it('should decrement amount', () => {
  const component = mount(<Dish dish={dish} />);
  component
    .find('[data-id="dish-decrement"]')
    .at(0)
    .simulate('click')
    .simulate('click');
  expect(dishAmount(component)).toBe('0');
});

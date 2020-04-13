import React from 'react';
import { mount } from 'enzyme';
import Dish from './dish';

import { restaurants } from '../../fixtures';

const dish = restaurants[0].menu[0];

describe('Dish', () => {
  let component, card, amount, incrementButton, decrementButton;

  beforeEach(() => {
    component = mount(<Dish dish={dish} />);
    card = component.find('Card');
    amount = component.find('[data-id="dish-amount"]');
    incrementButton = component.find('[data-id="dish-increment"]');
    decrementButton = component.find('[data-id="dish-decrement"]');
  });

  afterEach(() => {
    component.unmount();
  });

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
    expect(amount.at(0).text()).toBe('0');
    incrementButton.at(0).simulate('click');
    decrementButton.at(0).simulate('click');
    expect(amount.at(0).text()).toBe('0');
  });

  it("shouldn't decrement amount with value 0", () => {
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

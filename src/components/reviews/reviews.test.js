import React from 'react';
import { mount } from 'enzyme';
import Reviews from './reviews';

import { restaurants } from '../../fixtures';
import { ItalicOutlined } from '@ant-design/icons';

const reviews = restaurants[0].reviews;

describe('Reviews', () => {
  it('test render Review', () => {
    const component = mount(<Reviews reviews={reviews} />);
    expect(component.find('[data-id="review-row"]').length).toBe(2);
  });

  // Видимо, надо бы сделать проверку key={review.id} в <Review />- не знаю как
});

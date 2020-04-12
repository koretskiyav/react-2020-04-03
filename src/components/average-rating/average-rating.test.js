import React from 'react';
import { mount } from 'enzyme';

import AverageRating from './average-rating';

describe('AverageRating', () => {
  it('should calculate integer rate', function() {
    const component = mount(
      <AverageRating
        reviews={[
          {
            id: '5909796d-5030-4e36-adec-68b8f9ec2d96',
            user: 'Antony',
            text: 'Not bad',
            rating: 5
          },
          {
            id: '429dea85-11dd-4054-a31e-c60c92e17255',
            user: 'Sam',
            text: 'No burgers',
            rating: 3
          }
        ]}
      />
    );
    expect(
      component
        .find('Rate')
        .at(0)
        .props().value
    ).toBe(4);
  });

  it('should calculate rounded rate', function() {
    const component = mount(
      <AverageRating
        reviews={[
          {
            id: '53b642d7-5e86-4717-a466-0640a1dee076',
            user: 'Diana',
            text: 'Perfect Margarita',
            rating: 5
          },
          {
            id: 'c27ab88e-375c-4e98-aa94-8a180150a797',
            user: 'Sam',
            text: 'No burgers again. But Chef Pizza is the best one',
            rating: 4
          },
          {
            id: 'abc0c5e1-cd57-4f0a-99d9-00e6b4533b3a',
            user: 'Lolly',
            text: 'Good for lunch',
            rating: 5
          }
        ]}
      />
    );
    expect(
      component
        .find('Rate')
        .at(0)
        .props().value
    ).toBe(4.5);
  });

  it('should calculate empty rate', function() {
    const component = mount(<AverageRating reviews={[]} />);
    expect(
      component
        .find('Rate')
        .at(0)
        .props().value
    ).toBe(0);
  });
});

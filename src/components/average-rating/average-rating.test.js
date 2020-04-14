import React from 'react';
import { mount } from 'enzyme';

import AverageRating from './average-rating';

describe('AverageRating', () => {
  it('should calculate integer rate', function() {
    const component = mount(
      <AverageRating reviews={[{ rating: 5 }, { rating: 3 }]} />
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
      <AverageRating reviews={[{ rating: 5 }, { rating: 4 }, { rating: 5 }]} />
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

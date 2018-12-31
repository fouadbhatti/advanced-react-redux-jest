import React from 'react';
import renderer from 'react-test-renderer';
import { PageFlipper } from '../components';

describe('PageFlipper Component Test', () => {
  const noop = () => {};

  it('renders as expected', () => {
    const componentTree = renderer.create(
      <PageFlipper
        previous={noop}
        next={noop}
        page={1}
        pageSize={2}
        totalItems={10}
      />)
      .toJSON();

    expect(componentTree).toMatchSnapshot();
  })
});
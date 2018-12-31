import React from 'react';
import renderer from 'react-test-renderer';
import { AddFriendInput } from '../components';

describe('AddFriendInput Component Test', () => {
  const noop = () => {};

  it('renders as expected', () => {
    const componentTree = renderer.create(
      <AddFriendInput
        name={'John Snow'}
        onInputChange={noop}
        onInputSubmit={noop}
      />)
      .toJSON();

    expect(componentTree).toMatchSnapshot();
  });
});
import React from 'react';
import renderer from 'react-test-renderer';
import { AddFriendButton } from '../components';

describe('AddFriendButton Component Test', () => {
  const noop = () => {};

  it('renders as expected', () => {
    const componentTree = renderer.create(
      <AddFriendButton
        name={'John Snow'}
        onButtonSubmit={noop}
      />)
    .toJSON();

    expect(componentTree).toMatchSnapshot();
  });
});
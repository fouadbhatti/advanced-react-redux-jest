import React from 'react';
import renderer from 'react-test-renderer';
import { FriendListItem } from '../components';

describe('FriendListItem Component Test', () => {
  const noop = () => {};

  it('renders as expected without being starred', () => {
    const componentTree = renderer.create(
      <FriendListItem
        id={0}
        name={'Theodore Roosevelt'}
        gender={'male'}
        starred={false}
        starFriend={noop}
        deleteFriend={noop}
      />)
      .toJSON();

    expect(componentTree).toMatchSnapshot();
  });

  it('renders as expected with being starred', () => {
    const componentTree = renderer.create(
      <FriendListItem
        id={1}
        name={'Theodore Roosevelt'}
        gender={'male'}
        starred={true}
        starFriend={noop}
        deleteFriend={noop}
      />)
    .toJSON();

    expect(componentTree).toMatchSnapshot();
  });
});
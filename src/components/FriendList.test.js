import React from 'react';
import renderer from 'react-test-renderer';
import { FriendList } from '../components';

describe('FriendList Component Test', () => {
  const noop = () => {};
  const page = 2;
  const pageSize = 2;

  const friends = [
      {
        name: 'Theodore Roosevelt',
        starred: true,
        gender: 'male'
      },
      {
        name: 'Abraham Lincoln',
        starred: false,
        gender: 'male'
      },
      {
        name: 'George Washington',
        starred: false,
        gender: 'male'
      },
      {
        name: 'James Madison',
        starred: false,
        gender: 'male'
      },
      {
        name: 'Bill Clinton',
        starred: false,
        gender: 'male'
      },
      {
        name: 'Ronald Reagan',
        starred: false,
        gender: 'male'
      }
    ];

  it('renders a page as expected', () => {
    const componentTree = renderer.create(
      <FriendList
        friends={friends}
        starFriend={noop}
        deleteFriend={noop}
        page={page}
        pageSize={pageSize}
      />)
      .toJSON();

    expect(componentTree).toMatchSnapshot();
  });
});
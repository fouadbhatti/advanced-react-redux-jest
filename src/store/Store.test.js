// Complete Store Flow Integration Test
import { combineReducers, createStore } from 'redux';
import * as reducers from '../reducers';
import * as actions from './../actions/FriendsActions';

describe('Store FLow Integration Test', () => {
  const initialState = {
    friendlist:{
      friendsById: [
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
        }
      ],
      page: 1,
      pageSize: 2
    }
  };

  it('should handle adding, deleting, starring, moving to next and previous pages', () => {
    // Arrange store
    const reducer = combineReducers(reducers);
    const store = createStore(reducer, initialState);

    // Actions
    const addFriend = actions.addFriend('Scarlett Johansson', 'female');
    const deleteFriend = actions.deleteFriend(2);
    const starFriend = actions.starFriend(1);
    const previousPage = actions.previousPage();
    const nextPage = actions.nextPage();

    store.dispatch(addFriend);
    store.dispatch(deleteFriend);
    store.dispatch(starFriend);
    store.dispatch(previousPage);
    store.dispatch(nextPage);

    // Assertions
    const _friendsById = [
      {
        name: 'Scarlett Johansson',
        gender: 'female'
      },
      ...initialState.friendlist.friendsById
    ];

    const friendsById = _friendsById
      .filter((value, index) => {
        return index !== 2;
      })
      .map((value, index) => {
        if (index === 3) return { ...value, starred: !value.starred };
        return value;
      });

    const expected = {
      friendlist: {
        ...initialState.friendlist,
        friendsById,
        page:2
      }
    };

    const actual = store.getState();
    expect(actual).toEqual(expected);
  });
});
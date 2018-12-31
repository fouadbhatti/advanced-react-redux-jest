import * as reducers from '../reducers';
import * as types from '../constants/ActionTypes';

describe('friendlist reducer', () => {
  const initialState = {
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
      },
      {
        name: 'Bill Clinton',
        starred: true,
        gender: 'male'
      },
      {
        name: 'Ronald Reagan',
        starred: true,
        gender: 'male'
      },
      {
        name: 'Gerald Ford',
        starred: false,
        gender: 'male'
      }
    ],
    page: 1,
    pageSize: 2
  };

  it('should return the initial state', () => {
    const actual = reducers.friendlist(undefined, {});

    expect(actual).toEqual(initialState);
  });

  it('should handle ADD_FRIEND', () => {
    const action = {
      type: types.ADD_FRIEND,
      name: 'John F. Kennedy',
      gender: 'male'
    };

    const actual = reducers.friendlist(initialState, action);

    expect(actual).toEqual({
      ...initialState,
      friendsById: [
        {
          name: action.name,
          gender: action.gender
        },
        ...initialState.friendsById
      ]
    });
  });

  it('should handle DELETE_FRIEND', () => {
    const id = 1;
    const action = {
      type: types.DELETE_FRIEND,
      id
    };
    const friendsById = initialState.friendsById.filter((value, index) => {
      return index !== id;
    });

    const expected = {
      ...initialState,
      friendsById
    };

    const actual = reducers.friendlist(initialState, action);

    expect(actual).toEqual(expected);
  });

  it('should handle STAR_FRIEND', () => {
    const id = 2;
    const action = {
      type: types.STAR_FRIEND,
      id
    };
    const friendsById = initialState.friendsById.map((value, index) => {
      if (index === id) return { ...value, starred:!value.starred };
      return value;
    });

    const expected = {
      ...initialState,
      friendsById
    };

    const actual = reducers.friendlist(initialState, action);

    expect(actual).toEqual(expected);
  });

  it('should handle PREVIOUS_PAGE', () => {
    const action = {
      type: types.PREVIOUS_PAGE
    };
    const expected = { ...initialState, page: Math.max(initialState.page - 1, 1) };

    const actual = reducers.friendlist(initialState, action);

    expect(actual).toEqual(expected);
  });

  it('should handle NEXT_PAGE', () => {
    const action = {
      type: types.NEXT_PAGE
    };
    const expected = { ...initialState, page: initialState.page + 1 };

    const actual = reducers.friendlist(initialState, action);

    expect(actual).toEqual(expected);
  });
});
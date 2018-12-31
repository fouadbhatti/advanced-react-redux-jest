import * as types from '../constants/ActionTypes';

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

export default function friends(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
      return {
        ...state,
        friendsById: [
          {
            name: action.name,
            gender: action.gender
          },
          ...state.friendsById
        ],
      };
    case types.DELETE_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.filter((item, index) => index !== action.id)
      };
    case types.STAR_FRIEND:
      let friends = [...state.friendsById];
      let friend = friends.find((item, index) => index === action.id);
      friend.starred = !friend.starred;
      return {
        ...state,
        friendsById: friends
      };
    case types.PREVIOUS_PAGE:
      return {
        ...state,
        page: Math.max(state.page - 1, 1)
      };
    case types.NEXT_PAGE:
      const totalPages = Math.ceil(state.friendsById.length / state.pageSize);
      return {
        ...state,
        page: Math.min(state.page + 1, totalPages)
      };

    default:
      return state;
  }
}
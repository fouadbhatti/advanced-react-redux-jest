import * as types from '../constants/ActionTypes';

export function addFriend(name, gender) {
  return {
    type: types.ADD_FRIEND,
    name,
    gender
  };
}

export function deleteFriend(id) {
  return {
    type: types.DELETE_FRIEND,
    id
  };
}

export function starFriend(id) {
  return {
    type: types.STAR_FRIEND,
    id
  };
}


export function previousPage() {
  return {
    type: types.PREVIOUS_PAGE,
  };
}

export function nextPage() {
  return {
    type: types.NEXT_PAGE,
  };
}

import * as actions from './FriendsActions';
import * as types from '../constants/ActionTypes';

describe('Action Tests', () => {
  it('should create an action to add friend', () => {
    const name = 'Bill Clinton';
    const gender = 'male';

    const expectedAction = {
      type: types.ADD_FRIEND,
      name,
      gender
    };

    expect(actions.addFriend(name, gender)).toEqual(expectedAction);
  });

  it('should create an action to delete friend', () => {
    const id = 10;
    const expectedAction = {
      type: types.DELETE_FRIEND,
      id
    };

    expect(actions.deleteFriend(id)).toEqual(expectedAction);
  });

  it('should create an action to star friend', () => {
    const id = 10;
    const expectedAction = {
      type: types.STAR_FRIEND,
      id
    };

    expect(actions.starFriend(id)).toEqual(expectedAction);
  });

  it('should create an action to go to previous page', () => {
    const expectedAction = {
      type: types.PREVIOUS_PAGE
    };

    expect(actions.previousPage()).toEqual(expectedAction);
  });

  it('should create an action to go to next page', () => {
    const expectedAction = {
      type: types.NEXT_PAGE
    };

    expect(actions.nextPage()).toEqual(expectedAction);
  });
});
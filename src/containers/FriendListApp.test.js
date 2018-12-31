import { mapStateToProps } from './FriendListApp';

describe('FriendListApp Container Component Unit Test', () => {
  it('should map the state to props correctly', () => {

    const mappedState = {
      friendsById: [{
        name: 'Theodore Roosevelt',
        starred: true,
        gender: 'male'
      }],
      page: 1,
      pageSize: 2
    };

    const appState = {
      friendlist: {
        friendsById: [{
          name: 'Theodore Roosevelt',
          starred: true,
          gender: 'male'
        }],
        page: 1,
        pageSize: 2
      }
    };

    const ownProps = {};

    const componentState = mapStateToProps(appState, ownProps);
    expect(componentState).toEqual(mappedState);
  });
});


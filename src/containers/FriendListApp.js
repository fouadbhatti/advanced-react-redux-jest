import React from 'react';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';

import { addFriend, deleteFriend, starFriend, nextPage, previousPage } from '../actions/FriendsActions';
import { FriendList, AddFriend, PageFlipper } from '../components';

export function FriendListApp({ friendsById, page, pageSize, addFriend, deleteFriend, starFriend, nextPage, previousPage }) {

  const showFriendsById = friendsById.filter((value, index) => {
    const start = pageSize * (page - 1);
    const end = pageSize * page;
    return index >= start && index < end;
  });

  return (
    <div className={styles.friendListApp}>
      <h1>The FriendList</h1>
      <AddFriend addFriend={addFriend} />
      <FriendList friends={showFriendsById} starFriend={starFriend} deleteFriend={deleteFriend} page={page} pageSize={pageSize}/>
      <PageFlipper next={nextPage} previous={previousPage} page={page} pageSize={pageSize} totalItems={friendsById.length}/>
    </div>
  );
}

export function mapStateToProps(state, props) {
  const {
    friendsById,
    page,
    pageSize
  } = state.friendlist;

  return {
    friendsById,
    pageSize,
    page
  }
}

export default connect(mapStateToProps, {
  addFriend,
  deleteFriend,
  starFriend,
  nextPage,
  previousPage
})(FriendListApp)

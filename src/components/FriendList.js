import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

function FriendList({ friends, starFriend, deleteFriend, page, pageSize }) {
  let baseId = pageSize * (page - 1);
  return (
    <ul className={styles.friendList}>
      {
        friends.map((friend, index) => {
          return (
            <FriendListItem
              key={baseId + index}
              id={baseId + index}
              name={friend.name}
              gender={friend.gender}
              starred={friend.starred}
              starFriend={starFriend}
              deleteFriend={deleteFriend}
            />
          );
        })
      }
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  starFriend: PropTypes.func.isRequired,
  deleteFriend: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired
};

export default FriendList;

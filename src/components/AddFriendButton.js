import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './AddFriendButton.css';


function AddFriendButton({ onButtonSubmit }) {
  const handleSubmit = (e) => {
    e.stopPropagation();
    onButtonSubmit();
  };

  return(
    <button
    className={classnames('btn btn-primary', styles.addFriend)}
    onClick={handleSubmit}
    >
    Add Friend
  </button>);
}

AddFriendButton.propTypes = {
  onButtonSubmit: PropTypes.func.isRequired
};

export default AddFriendButton
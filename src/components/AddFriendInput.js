import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

function AddFriendInput({ name, onInputChange, onInputSubmit }) {
  const handleChange = (e) => {
    onInputChange(e.target.value);
  };

  const handleSubmit = (e) => {
    const name = e.target.value.trim();
    if (e.which === 13) {
      onInputSubmit(name);
    }
  };

  return (
    <input
      type="text"
      autoFocus="true"
      className={classnames('form-control', styles.addFriendInput)}
      placeholder="Type the name of a friend"
      value={name}
      onChange={handleChange}
      onKeyDown={handleSubmit} />
  );
}

AddFriendInput.propTypes = {
  name: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onInputSubmit: PropTypes.func.isRequired
};

export default AddFriendInput

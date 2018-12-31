import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './SelectFriendGender.css';


function SelectFriendGender(props) {
  const gender = props.gender;

  const handleChange = (e) => {
    props.onSelect(e.target.value);
  };

  return(
    <select
      value={gender}
      onChange={handleChange}
      className={classnames('form-control', styles.selectFriendGender)}
    >
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  );
}

SelectFriendGender.propTypes = {
  gender: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default SelectFriendGender
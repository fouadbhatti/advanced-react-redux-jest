import React, { Component } from 'react';
import { AddFriendInput, SelectFriendGender, AddFriendButton } from '../components';
import PropTypes from 'prop-types';
import styles from './AddFriend.css';

class AddFriend extends Component {
  render () {
    return (
      <div>
        <AddFriendInput name={this.state.name} onInputChange={this.handleInputChange} onInputSubmit={this.handleInputSubmit} />
        <div className={styles.flex}>
          <SelectFriendGender gender={this.state.gender} onSelect={this.handleSelectChange}/>
          <AddFriendButton onButtonSubmit={this.handleButtonSubmit}/>
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: 'male'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleButtonSubmit = this.handleButtonSubmit.bind(this)
  }

  handleInputChange (input) {
    this.setState({ name: input });
  }

  handleSelectChange(gender) {
    this.setState({ gender });
  }

  handleInputSubmit (name) {
    if (name.length > 0) {
      this.addFriend(name);
      this.resetFields();
    }
  }

  handleButtonSubmit() {
    if (this.state.name.length > 0) {
      this.addFriend();
      this.resetFields();
    }
  }

  resetFields() {
    this.setState({
      name: '',
      gender: 'male'
    });
  }

  addFriend(name = this.state.name, gender = this.state.gender) {
    this.props.addFriend(name, gender);
  }
}

AddFriend.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriend;
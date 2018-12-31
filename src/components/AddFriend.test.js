import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AddFriend, AddFriendButton } from '../components';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    addFriend: jest.fn()
  };

  return { wrapper: shallow(<AddFriend {...props}/>), props }
}

describe('AddFriend Component Test', () => {
  it('should call addFriend if length of text is greater than 0 when return key hit', () => {
    const { wrapper, props } = setup();
    const input = wrapper.find('AddFriendInput');

    input.props().onInputSubmit('');
    expect(props.addFriend.mock.calls.length).toBe(0);

    input.props().onInputSubmit('Gigi Hadid');
    expect(props.addFriend.mock.calls.length).toBe(1);
  });

  it('should call addFriend if length of text is greater than 0 when button pressed', () => {
    const { wrapper, props } = setup();
    const input = wrapper.find('AddFriendInput');
    const button = wrapper.find('AddFriendButton');

    input.props().onInputSubmit('');
    button.props().onButtonSubmit();
    expect(props.addFriend.mock.calls.length).toBe(0);

    input.props().onInputChange('Quaid E Azam');
    button.props().onButtonSubmit();
    expect(props.addFriend.mock.calls.length).toBe(1);
  });


  it('should update state.name when input changes', () => {
    const { wrapper } = setup();
    const input = wrapper.find('AddFriendInput');

    input.props().onInputChange('Saturn');
    expect(wrapper.state().name).toBe('Saturn');
  });

  it('should update state.gender when gender changed', () => {
    const { wrapper } = setup();
    const select = wrapper.find('SelectFriendGender');

    select.props().onSelect('female');
    expect(wrapper.state().gender).toBe('female');

    select.props().onSelect('male');
    expect(wrapper.state().gender).toBe('male');
  });

  it('should check gender defaults to male', () => {
    const { wrapper } = setup();

    expect(wrapper.state().gender).toBe('male');
  });

  it('should check name defaults to empty', () => {
    const { wrapper } = setup();

    expect(wrapper.state().name.length).toBe(0);
  });
});
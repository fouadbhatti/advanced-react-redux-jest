import React from 'react';
import renderer from 'react-test-renderer';
import { SelectFriendGender } from '../components';

describe('SelectFriendGender Component Test', () => {
  const noop = () => {};

  it('renders as expected when male', () => {
    const componentTree = renderer.create(
      <SelectFriendGender
        gender={'male'}
        onSelect={noop}
      />)
      .toJSON();

    expect(componentTree).toMatchSnapshot();
  });


  it('renders as expected when female', () => {
    const componentTree = renderer.create(
      <SelectFriendGender
        gender={'female'}
        onSelect={noop}
      />)
    .toJSON();

    expect(componentTree).toMatchSnapshot();
  });
});
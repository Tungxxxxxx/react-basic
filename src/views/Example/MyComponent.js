import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React from 'react';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {
  state = {
    lastName: 'aaa',
    firstName: '',
  };
  handleOnchangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleOnchangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('>>>Check data input:', this.state);
    alert('Click me');
  };
  render() {
    return (
      <>
        <label htmlFor="lName">Lastname</label>
        <br />
        <input
          id="lName"
          type="text"
          value={this.state.lastName}
          onChange={(event) => this.handleOnchangeLastName(event)}
        />
        <br />
        <label htmlFor="fName">Firstname</label>
        <br />
        <input
          type="text"
          id="fName"
          value={this.state.firstName}
          onChange={(event) => {
            this.handleOnchangeFirstName(event);
          }}
        />
        <br />
        <br />
        <input type="submit" value="Submit" onClick={(event) => this.handleOnSubmit(event)} />
        <br />
        <br />
        <ChildComponent name={'Phạm Thanh Tùng'} age={30} />
        <br />
        <ChildComponent name={'Hoàng thị Thu Hà'} age={28} />
        <br />
        <ChildComponent name={'Phạm Đăng Hoàng Đức'} age={2} />
        <br />
      </>
    );
  }
}
export default MyComponent;

import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React from 'react';

class MyComponent extends React.Component {
  state = {
    name: 'Con me li ti',
    age: 1000,
  };
  handleOnchangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  render() {
    let info = [
      { id: 1, name: 'Tùng', age: 30 },
      { id: 2, name: 'Hà', age: 16 },
      { id: 3, name: 'Su', age: 2 },
    ];
    return (
      <>
        <p>Đây là sử dụng state</p>
        <input type="text" value={this.state.name} onChange={(event) => this.handleOnchangeName(event)} />
        <p>My name is {this.state.name}</p>
        <table className="abc">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{info[0].id}</td>
              <td>{info[0].name}</td>
              <td>{info[0].age}</td>
            </tr>
            <tr>
              <td>{info[1].id}</td>
              <td>{info[1].name}</td>
              <td>{info[1].age}</td>
            </tr>
            <tr>
              <td>{info[2].id}</td>
              <td>{info[2].name}</td>
              <td>{info[2].age}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}
export default MyComponent;

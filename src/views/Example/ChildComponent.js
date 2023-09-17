import React from 'react';
class ChildComponent extends React.Component {
  render() {
    console.log('>>>Check this props:', this.props);
    let { name, age } = this.props; //  tên biến trung với tên ky của props - destructuring
    return (
      <>
        {name} - {age}
      </>
    );
  }
}
export default ChildComponent;

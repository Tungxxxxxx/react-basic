import React from 'react';
class ChildComponent extends React.Component {
  render() {
    let arrJobs = this.props.state.arrJobs; //  tên biến trung với tên ky của props - destructuring
    console.log('>>>Check this props:', arrJobs);
    return (
      <>
        <div className="job-lists">
          {arrJobs.map((item, index) => {
            return <div key={item.id}>{`${item.title} - ${item.salary}`}</div>;
          })}
        </div>
      </>
    );
  }
}
export default ChildComponent;

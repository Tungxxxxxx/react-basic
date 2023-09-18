import React from 'react';
class ChildComponent extends React.Component {
  state = {
    display: true,
  };
  handleOnDisplay = () => {
    this.setState({
      display: !this.state.display,
    });
  };
  handleOnClickDel = (id) => {
    let check = window.confirm('Delete a job');
    if (check) {
      this.props.deleteJob(id);
    }
  };
  render() {
    let { arrJobs } = this.props; //  tên biến trung với tên ky của props - destructuring
    let { display } = this.state;
    let check = display === true ? 'display = true' : 'display = false';
    console.log(check);
    return (
      <>
        {display === false ? (
          <>
            <div className="job-lists">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {`${item.title} - ${item.salary}`}&nbsp;
                    <span className="x" onClick={() => this.handleOnClickDel(item.id)}>
                      x
                    </span>
                  </div>
                );
              })}
            </div>
            <button onClick={() => this.handleOnDisplay()}>Hide</button>
          </>
        ) : (
          <>
            <button onClick={() => this.handleOnDisplay()}>Show</button>
          </>
        )}
      </>
    );
  }
}
export default ChildComponent;

import React from 'react';

class AddComponent extends React.Component {
  state = {
    title: '',
    salary: '',
  };
  handleOnchangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleOnchangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    // console.log('>>>Check data input:', this.state);
    if (!this.state.title || !this.state.salary) {
      alert('Input is required');
    } else {
      let check = window.confirm('Add Job');
      if (check) {
        this.props.addJob({ id: Math.floor(Math.random() * 1001), title: this.state.title, salary: this.state.salary });
      }
    }
  };
  render() {
    return (
      <div>
        <form>
          <label htmlFor="lName">Title</label>
          <br />
          <input
            id="lName"
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleOnchangeTitle(event)}
          />
          <br />
          <label htmlFor="fName">Salary</label>
          <br />

          <input
            type="text"
            id="fName"
            value={this.state.salary}
            onChange={(event) => {
              this.handleOnchangeSalary(event);
            }}
          />
          <br />

          <input type="submit" value="Add" onClick={(event) => this.handleOnSubmit(event)} />
          <br />
        </form>
      </div>
    );
  }
}
export default AddComponent;

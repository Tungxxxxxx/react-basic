import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: 'sasdasdasd', title: 'Project manager', salary: '2000' },
      { id: '2123123', title: 'Developer', salary: '1000' },
      { id: 'sasdadrqwesdasd', title: 'Tester', salary: '1500' },
    ],
  };

  addJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
    console.log('>>>Check id:', job.id);
  };

  deleteJob = (id) => {
    this.setState({
      arrJobs: this.state.arrJobs.filter((item) => item.id !== id),
    });
  };

  render() {
    return (
      <>
        <AddComponent addJob={this.addJob} />

        <ChildComponent arrJobs={this.state.arrJobs} deleteJob={this.deleteJob} />
      </>
    );
  }
}
export default MyComponent;

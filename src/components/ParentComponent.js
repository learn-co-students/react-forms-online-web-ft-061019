import React from 'react';
import AltForm from './AltForm'
import DisplayForm from './DisplayForm'


class ParentComponent extends React.Component {
  state = {
    firstName: "Bob",
    lastName: "Cratchet",
  }
 
  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }
 
  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }
 
  render() {
    return (
      <div>
         <AltForm
         formData={this.state}
         handleFirstNameChange={this.handleFirstNameChange}
         handleLastNameChange={this.handleLastNameChange}
         />
         <DisplayForm formData={this.state} />
      </div>
    )
  }
}
 
export default ParentComponent;
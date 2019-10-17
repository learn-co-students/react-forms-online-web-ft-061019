import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
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
  
  handleFormChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
     event.preventDefault()
     const formData = {
       firstName: this.state.firstName,
       lastName: this.state.lastName
     }

     const dataArray = [...this.state.submittedData, formData]
     //this.props.passedInFunctionFromParentComponent(formData)
     console.log("formData Object that could be passed to callback: ", formData)
     this.setState({
       submittedData: dataArray
     })
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    console.log("state: ", this.state)
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="firstName" onChange={event => this.handleFormChange(event)} value={this.state.firstName} />
          <input type="text" name="lastName" onChange={event => this.handleFormChange(event)} value={this.state.lastName} />
          <input type="submit" value="Submit Name" />
        </form>
        {this.listOfSubmissions()}
      </div>
    )
  }
}

export default Form;
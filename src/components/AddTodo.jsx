import React, { Component } from 'react'

 class AddTodo extends Component {
    state={
        title:""
    }
    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({title:""})
    }

  render() {
    return (
      <div style={{margin:"1% 40%"}}>
        <form onSubmit={this.handleSubmit} >
        <input type="text" placeholder='Add Todo ....' name='title' value={this.state.title} onChange={this.handleChange}  />
        <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default AddTodo
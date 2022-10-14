import React, { Component } from 'react'

class Todo extends Component {
    getStyle = ()=>{
        return{
            textDecoration : this.props.todo.isDone ? "line-through" : "none",
            backgroundColor:"yellow",
            color:"black",
            border:"2px black solid"
        }
    }
  render() {
    const {title, id} = this.props.todo
    return (
      <div style={this.getStyle()}>
        <p style={{padding:"5px",margin:"5px"}}>
            <input type="checkbox" onChange={this.props.done.bind(this,id)} />
            {title}
            <button style={{backgroundColor:"red",height:"30px" ,float:"right"}} onClick={this.props.delTodo.bind(this,id)}>X</button>
        </p>
      </div>
    )
  }
}

export default Todo
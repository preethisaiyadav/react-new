import React, { Component } from 'react'

export class CompB extends Component {
  render() {
    return (
      <div>
        <h4>
            componentB
        </h4>
        <pre>{JSON.stringify(this.props)}</pre>
        <h4>Product_Name:{this.props.name}</h4>
        <h4>Product_id:{this.props.id}</h4>
        <h2>Color:{this.props.colors}</h2>
      </div>
    )
  }
}

export default CompB
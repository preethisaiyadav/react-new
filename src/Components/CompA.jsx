import React, { Component } from 'react'
import CompB from './CompB'
export class CompA extends Component {
      Product_Name="iphone"
      Product_id=101
      colors=["red,green,yellow"]
  render() {
    return (
      <div>
        <CompB name={this.Product_Name}
        id={this.Product_id}
        color={this.colors}/>
      </div>
    )
  }
}

export default CompA
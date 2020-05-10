import { Component } from 'react'

export default class TestNoStatic extends Component {
  noStaticFunction = () => {
    console.log('noStaticFunction')
  }

  render() {
    return <h1>TestNoStatic</h1>
  }
}

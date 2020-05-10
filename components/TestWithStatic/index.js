import { Component } from 'react'

export default class TestWithStatic extends Component {
  // static defaultProps = { foo: 'bar' }

  withStaticFunction = () => {
    console.log('withStaticFunction')
  }

  render() {
    return <h1>TestWithStatic</h1>
  }
}

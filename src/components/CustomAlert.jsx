import { Component } from 'react'
import { Alert, Button } from 'react-bootstrap'

class CustomAlert extends Component {
  state = {
    show: true,
  }

  handleShowAlert = () => {
    this.setState({
      show: false,
    })
  }
  render() {
    return (
      <Alert show={this.state.show} variant='secondary'>
        <Alert.Heading>Hey, Nice to see you!</Alert.Heading>
        <p>
          Welcome to our book haven. Explore our collection, and let your next
          favorite book find you!
        </p>
        <hr />
        <div className='d-flex justify-content-end'>
          <Button
            onClick={() => {
              this.handleShowAlert()
            }}
            variant='outline-secondary'
          >
            Start Navigation!
          </Button>
        </div>
      </Alert>
    )
  }
}

export default CustomAlert

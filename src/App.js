import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import { Component } from 'react'
import CustomAlert from './components/CustomAlert'
import MySlider from './components/MySlider'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import fantasyBook from './data/books/fantasy.json'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header>
          <MyNavbar />
        </header>
        <main>
          <CustomAlert />

          <MySlider fantasyBook={fantasyBook} />
        </main>
      </div>
    )
  }
}

export default App

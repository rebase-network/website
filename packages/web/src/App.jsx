import 'bootstrap/dist/css/bootstrap.min.css';
import '/public/assets/css/theme.min.css';

import './App.css'
import RouterLink from './router'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App(props) {

  return (
    <>
      <div className='App'>
        <Navbar/>
        {props.children}
        <Footer/>
      </div>
    </>
  )
}

export default App

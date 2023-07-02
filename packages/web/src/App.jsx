import 'bootstrap/dist/css/bootstrap.min.css';
import '/public/assets/css/theme.min.css';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AuthProvider from './components/AuthProvider/AuthProvider';

function App(props) {
  return (
    <>
      <AuthProvider>
        <div className="App">
          <Header />
          {props.children}
          <Footer />
        </div>
      </AuthProvider>
    </>
  );
}

export default App;

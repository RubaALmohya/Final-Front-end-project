import './App.css';

import Header from './Components/Basic/Header';
import Footer from './Components/Basic/Footer';
import Routers from './Components/Routers';



function App() {
  return (
    <div className="App">
      <Header />
       <Routers />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Header from './Header/header';
import Footer from './Footer/footer';
import { SpaceX } from './spacex/index';

function App() {
  return (
    <div className="App">
      <Header/>
      <SpaceX/>
      <Footer/>
    </div>
  );
}

export default App;

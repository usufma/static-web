
import './App.css';
import Banner from './Banner';
import AboutUs from './AboutUs';
import Products from './prod';
import ContactUs from './contactUs';

function App() {
  return (
    <div className="App">
      <header>
      <Banner/>
      </header>
      <AboutUs/>
      <Products/>
      <ContactUs/>
  
    </div>
  );
}

export default App;

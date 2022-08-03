import Header from './component/header';
import Section from './component/secsion';
import Services from './component/services';
import AboutUs from './component/aboutUs';
import Professional from './component/professional';
import Contact from './component/contact';
import Footer from './component/footer';


function App() {
  return (
    <div className="App">
      <Header/> 
      <Section/>
      <Services/>
      <AboutUs/>
      <Professional/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;

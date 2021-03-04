import React from 'react';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import News from './components/news/News';
import Career from './components/career/Career';
import Industries from './components/Industries/Industries';
import Services from './components/services/Services';
import Consumer from './components/consumer/Consumer';
import Navbar from './components/header/Navbar';
import Navbar2 from './components/header2/Navbar2';
import Footer from './components/footer/Footer'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
function App() {
  return (
   <>
   <Router>
   <Navbar />
    <Navbar2 />
     <Switch>
   
       <Route exact path='/' component={Home} />
       <Route exact path='/about' component={About} />
       <Route exact path='/news' component={News} />
       <Route exact path='/career' component={Career} />
       <Route exact path='/contact' component={Contact} />
       <Route exact path='/service' component={Services} />
       <Route exact path='/industrie' component={Industries} />
       <Route exact path='/consumer' component={Consumer} />
     </Switch>
     <Footer />
   
   </Router>

   </>
  );
}

export default App;
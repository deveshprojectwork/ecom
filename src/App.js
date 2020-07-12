import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Login from './components/Login';
import Jsonuser from './components/Jsonuser';
import News from './components/News';
function App() {
  return (
    <div>
      <Router>
        <Header/>
         <section>
           <Switch>
             <Route path="/" exact component={Main}/>
             <Route path="/contact-us" exact component={Contact}/>
             <Route path="/login" exact component={Login}/>
             <Route path="/news" exact component={News}/>
             <Route path="/json" exact component={Jsonuser}/>
           </Switch>
         </section>
        <Footer/>
        </Router>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import AuthProvider from './Component/AuthProvider/AuthProvider';
import PrivateRoute from './Component/PriviteRoute/PriviteRoute';
import Service from './Component/Services/Service';
import SingleService from './Component/SingleService/SingleService';
import NotFound from './Component/NotFound/NotFound';
import Footer from './Component/Footer/Footer';
import About from './Component/About/About';
import Offer from './Component/Offer/Offer';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute exact path='/services'>
              <Service></Service>
            </PrivateRoute>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/singleService/:id'>
                <SingleService></SingleService>
            </Route>
            <Route path='/offer'>
              <Offer></Offer>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

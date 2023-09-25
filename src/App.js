import React from 'react'
import GlobalContainer from './Component/GlobalContext/GlobalContainer'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './routes/Home/Home';

function App() {
  return (
    <GlobalContainer>
      <Router>
        <Switch>

            {/*  <Route path="/product/:productId" component={ProductPage} />

          <Route path="/cart" component={Cart} />

          <Route path="/signin" component={Signin} />

          <Route path="/signup" component={Signup} />

          <Route path="/about" component={About} /> */}

          <Route path="/" component={Home} />

        </Switch>
      </Router>

    </GlobalContainer>
  )
}

export default App

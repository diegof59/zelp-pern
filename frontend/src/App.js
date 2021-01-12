import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import RestaurantDetails from './pages/RestaurantDetails'
import RestaurantUpdate from './pages/RestaurantUpdate'

function App(props){
  
  return(
    <Router>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/restaurants/:id" component={RestaurantDetails}/>
        <Route path="/restaurants/:id/update" component={RestaurantUpdate}/>
      </Switch>
    </Router>
  )
}

export default App
import react from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Submitform from "./submitform";
import logo from "./logos/logo.png";
import Profile from "./profile";
class App extends react.Component {
  render() {
    const { store } = this.props;
    // console.log(store);
    return (
      <Router>
      <Switch>
      <Route path="/profile">
        <Profile />
      </Route>
        <Route exact path="/">
          <div className="homepageBody">
             <img className="banner" src={logo} />
            <Submitform store={store} />
          </div>
        </Route>
      </Switch>
      </Router>
    );
  }
}
export default App;

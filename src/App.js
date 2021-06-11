import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Posts from "./components/posts";
import Komp from "./components/JKhome";

function App() {

  return (
      <div className="container-fluid">
        <div className="container">
            <div className="content">
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/home" exact component={Komp} />

                </Switch>
            </div>
        </div>
      </div>
  );
}

export default App;

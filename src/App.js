import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import NotFound from "./components/NotFound";
import EditUser from "./components/EditUser";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/all" component={AllUsers}/>
        <Route exact path="/add" component={AddUser}/>
        <Route exact path="/edit/:id" component={EditUser}/> /*dynamic routing*/
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;

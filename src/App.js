import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import SingleCocktail from './Pages/SingleCocktail/SingleCocktail';
import NavBar from './Components/NavBar';
import { useState } from 'react';
import { useEffect } from 'react';
import Axios from "axios";
import Search from './Components/Search';

function App() {
  const [drinks, setDrinks] = useState([]);
  const [loadDrinks, setLoadDrinks] = useState(true);
  const getDrink = () => {
    Axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
      .then((res) => {
        setDrinks(res.data);
        setLoadDrinks(false)
      })
      .catch((err) => console.log(err))
  };
  useEffect(() => {
    getDrink()
  }, [])
  const [search, setSearch] = useState("")
  return (
    <div className="App">
      <NavBar />
      <Search setSearch={setSearch}  />
      <Switch>
        <Route exact path="/" render={() => <Home search={search} drinks={drinks} loadDrinks={loadDrinks} />} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/detail/:id" component={SingleCocktail} />
      </Switch>
    </div>
  );
}

export default App;

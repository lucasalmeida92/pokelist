import React, { Component } from 'react';
import { HashRouter,  Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import PageContent from './components/PageContent';
import ListPage from './containers/ListPage';
import PokemonDetailsPage from './containers/PokemonDetailsPage';
import './App.scss';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <PageContent>
            <Switch>
              <Route exact path="/" component={ListPage} />
              <Route exact path="/pokemon/:pokemonId" component={PokemonDetailsPage} />
              <Route component={ListPage} />
            </Switch>
          </PageContent>
        </div>
      </HashRouter>
    );
  }
}

export default App;

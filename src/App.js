import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';



import { Provider } from 'react-redux';
import store from './store/index';

import Home from './pages/home';
import SongList from './pages/songList';
import RankList from './pages/rankList';
import Search from './pages/search';
import PlayList from './pages/playList';
import PlayBar from './pages/playBar/index';


function App() {
  return (
      <Provider store={store}>
        <Router>
             <Switch> 
                <Route path='/search' component={Search}/>
                <Route path='/songList' component={SongList}/>
                <Route path='/rankList' component={RankList}/>
                <Route path='/playList/:id' component={PlayList}/>
                <Route path='/' component={Home}/>
            </Switch> 
            
        </Router>
        <PlayBar/>
      </Provider>
  )
    
}

export default App;

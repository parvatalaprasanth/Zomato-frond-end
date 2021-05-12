import './App.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import Main from './Main';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react'

//const mystore=createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, allReducers);


let store = createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
let persistor = persistStore(store)
 


function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Main/>
    </PersistGate>
    </Provider>
  );
}

export default App;

import {combineReducers} from 'redux';
import mainreducer from './reducer';

const allReducers=combineReducers({
    main:mainreducer

});


export default allReducers;
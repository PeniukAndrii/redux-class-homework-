import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {store} from './Redux/ReduxStore/ReduxStore'
import User from "./User/User";



class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <User/>
                </div>
            </Provider>
        );
    }
}

export default App;
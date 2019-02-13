import React, { Component, Fragment } from 'react';
import SongList from "../SongList/SongList";

class App extends Component {

    render() {
        return(
            <Fragment>
                <section className='container-fluid'>
                    <h1>Search Songs</h1>
                </section>
                <section className='container-fluid'>
                   <SongList />
                </section>
            </Fragment>
        );
    }
}

export default App;

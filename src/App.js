import React, {Component} from 'react';
import AppHeader from './components/AppHeader'
import RentsList from './components/RentsList'
import './App.css';

class App extends Component {
    state = {
         rents: [
             {
                 userId: 2,
                 machineId: 2,
                 startDate: "2019-05-20",
                 endDate: "2020-05-20",
                 _links: {
                     self: {
                         href: "http://localhost:8095/rents/1"
                     },
                     rents: {
                         href: "http://localhost:8095/rents"
                     }
                 }
             },
             {
                 userId: 3,
                 machineId: 1,
                 startDate: "2019-07-12",
                 endDate: "2021-08-29",
                 _links: {
                     self: {
                         href: "http://localhost:8095/rents/2"
                     },
                     rents: {
                         href: "http://localhost:8095/rents"
                     }
                 }
             },
             {
                 userId: 1,
                 machineId: 2,
                 startDate: "2018-04-25",
                 endDate: "2019-02-17",
                 _links: {
                     self: {
                         href: "http://localhost:8095/rents/3"
                     },
                     rents: {
                         href: "http://localhost:8095/rents"
                     }
                 }
             },
             {
                 userId: 2,
                 machineId: 3,
                 startDate: "2021-08-29",
                 endDate: "2022-02-04",
                 _links: {
                     self: {
                         href: "http://localhost:8095/rents/4"
                     },
                     rents: {
                         href: "http://localhost:8095/rents"
                     }
                 }
             }
         ]
     };

    render() {
        return (
            <div className="App">
                <AppHeader/>
                <main className={"ui main text container"}>
                    <RentsList rents={this.state.rents} />
                </main>
            </div>
        );
    }
}

export default App;

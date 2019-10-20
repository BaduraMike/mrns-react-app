import React, {Component} from 'react';
import RentItem from "./RentItem";

class RentsList extends Component {
    render() {
        return this.props.rents.map((rent) => (
            <div className={"ui relaxed divided list selection"}>
                <RentItem key={rent.id} rent={rent}/>
            </div>
        ));
    };
}

export default RentsList;
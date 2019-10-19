import React, {Component} from 'react';
import RentItem from "./RentItem";

class RentsList extends Component {
    render() {
        return (

            <div className={"ui relaxed divided list selection"}>
                <RentItem
                    userId={3}
                    machineId={5}
                    startDate={"12-05-2018"}
                    endDate={"12-05-2019"}
                    selfHref={"http://localhost:8090/users/3"}
                />
                <RentItem
                    userId={27}
                    machineId={2}
                    startDate={"10-10-2018"}
                    endDate={"12-12-2019"}
                    selfHref={"http://localhost:8090/users/1"}
                />
            </div>
        );
    };
}

export default RentsList;
import React, {Component} from 'react';
import Avatar from "./Avatar";

class RentItem extends Component {
    render() {
        const {userId, machineId, startDate, endDate, selfHref} = this.props;

        return (
            <li className={"item"}>
                <Avatar userId={userId}/>
                <div className={"content"}>
                    <h4 className={"header"}>Rent</h4>
                    <div className={"description"}>User: <b>{userId}</b></div>
                    <div className={"description"}>Machine: <b>{machineId}</b></div>
                    <div className={"description"}>From: <b>{startDate}</b></div>
                    <div className={"description"}>To: <b>{endDate}</b></div>
                    <div className={"description"}>Link: <b>{selfHref}</b>
                    </div>
                </div>
            </li>
        );
    };
}

export default RentItem;
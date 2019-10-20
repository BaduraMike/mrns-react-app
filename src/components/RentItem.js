import React, {Component} from 'react';
import Avatar from "./Avatar";

class RentItem extends Component {
    render() {
        const userUrl = "http://localhost:8080/users/" + this.props.rent.userId;
        const machineUrl = "http://localhost:8080/machines/" + this.props.rent.machineId;

        return (
            <li className={"item"}>
                <Avatar userId={this.props.rent.userId}/>
                <div className={"content"}>
                    <h4 className={"header"}>Rent</h4>
                    <div className={"description"}>User: <b>{this.props.rent.userId}</b></div>
                    <div className={"description"}>Machine: <b>{this.props.rent.machineId}</b></div>
                    <div className={"description"}>From: <b>{this.props.rent.startDate}</b></div>
                    <div className={"description"}>To: <b>{this.props.rent.endDate}</b></div>
                </div>
                <a href={userUrl} className={"description"}><u>Link to User</u></a>
                <a href={machineUrl} className={"description"}><u>Link to Machine</u></a>
            </li>
        );
    };
}

export default RentItem;
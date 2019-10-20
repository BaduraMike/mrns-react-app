import React, {Component} from 'react';

class AppHeader extends Component {
    render() {
        return (
            <header className={"ui menu"}>
                <nav className={"ui container"}>
                    <a href={"rents"} className={"header item"}>
                        All Rents
                    </a>
                    <a href={"machines"} className={"header item"}>
                        All Machines
                    </a>
                    <a href={"users"} className={"header item"}>
                        All Users
                    </a>
                    <div className={"header item"}>
                        <button className={"ui button"} onClick={this.onAddRentClickHandler}>
                            Add Rent
                        </button>
                    </div>
                    <div className={"header item"}>
                        <button className={"ui button"} onClick={this.onAddMachineClickHandler}>
                            Add Machine
                        </button>
                    </div>
                    <div className={"header item"}>
                        <button className={"ui button"} onClick={this.onAddUserClickHandler}>
                            Add User
                        </button>
                    </div>
                </nav>
            </header>
        );
    };
    static onAddRentClickHandler() {
        alert("By clicking 'Add Rent' you will be able to add a new rent item")
    }
    static onAddMachineClickHandler() {
        alert("By clicking 'Add Machine' you will be able to add a new machine")
    }
    static onAddUserClickHandler() {
        alert("By clicking 'Add Use'r you will be able to add a new rent user")
    }

}

export default AppHeader;
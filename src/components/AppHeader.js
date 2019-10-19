import React, {Component} from 'react';

class AppHeader extends Component {
    render() {
        return (
            <header className={"ui menu"}>
                <nav className={"ui container"}>
                    <a href={"#"} className={"header item"}>
                        All Rents
                    </a>
                    <div className={"header item"}>
                        <button className={"ui button"}>Add Rent</button>
                    </div>
                </nav>
            </header>
        );
    };
}

export default AppHeader;
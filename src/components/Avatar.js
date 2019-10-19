import React, {Component} from 'react';

class Avatar extends Component {
    render() {
        const {userId} = this.props;
        const imgUrl = 'https://api.adorable.io/avatars/80/' + userId + '.png';

        return (
            <img src={imgUrl} alt={"Contractor face."} className={"ui mini rounded image"}/>
        );
    };
}

export default Avatar;
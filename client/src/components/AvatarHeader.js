import React, {Component} from 'react';
import {connect} from 'react-redux';

import Avatar from '@material-ui/core/Avatar';

class AvatarHeader extends Component {

    render (){

        const {user_profile} = this.props;
        return (
            <div className="avatar-header">
                <Avatar
                    alt={user_profile.displayName}
                    src={user_profile.photoURL}
                />
            </div>
        )
    }
}

const MapStateToProps = state => {
    const {
        user_profile
    }=state.authReducer;

    return {
        user_profile
    };
}

export default connect(MapStateToProps)(AvatarHeader);
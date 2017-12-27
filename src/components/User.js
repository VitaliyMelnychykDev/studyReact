import React, {Component} from 'react';
import Info from './Info';

class User extends Component {
    render() {
        return (
            <div>
                <h3>User</h3>
                <p>Here is user page</p>
                <Info/>
            </div>
        );
    }
}

export default User;

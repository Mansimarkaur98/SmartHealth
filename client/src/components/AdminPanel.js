import React, {Component} from 'react';
import ManageDoctors from './AdminPanel/ManageDoctors';
import ManageInventory from './AdminPanel/ManageInventory';

class AdminPanel extends Component {
    render (){
        return (
            <div>
                <h4>Return Admin Panel</h4>
                <ManageDoctors/>
                <ManageInventory/>
            </div>
        )
    }
}

export default AdminPanel;
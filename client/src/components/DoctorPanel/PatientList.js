import React, {Component} from 'react';
import { database } from '../../firebase/config';

class PatientList extends Component {

    componentDidUpdate(){
        const list = database.ref('/USERS/PATIENTS/patients_list').on('value', (snapshot) => {
            console.log(snapshot.val());
        })

        console.log(list);
    }

    render (){
        return (
            <h2>Patient List</h2>
        )
    }
}

export default PatientList;
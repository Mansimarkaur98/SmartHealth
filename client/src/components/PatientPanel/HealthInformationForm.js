import React, {Component} from 'react';

class SecondaryInformationForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            height: "",
            weight: "",
            blood_group: "",
            allergies: "",
            medications: {
                medication_name: "",
                dose: "",
                frequency:""
            },
            emergency_contact: {
                name: "",
                relationship: "",
                address: "",
                mobile: ""
            }
        };
    }

    render(){
        return (
            <div>
                <form>
                    
                </form>
            </div>
        )
    }
}

export default SecondaryInformationForm
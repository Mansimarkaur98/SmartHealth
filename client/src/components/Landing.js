import React, {Component} from 'react';

class Landing extends Component {

    constructor(props){
        super(props);
        this.state = {
            val: 'New'
        }
    }

    onChange(e){
        e.preventDefault();
        this.setState({val: e.target.value})
    }

    render () {
        return (
            <div>
                <h1>Landing</h1>
                <hr/>
                <form>
                    <input type="text" value={this.state.val} onChange={this.onChange.bind(this)}/>
                </form>
                {this.state.val}
            </div>
        )
    }
}

export default Landing;
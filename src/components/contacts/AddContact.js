import React, { Component } from 'react'

class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: ''
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {

        const { name, email, phone } = this.state;

        return (
            <div className="row">
                <div className="col s12 m6 l4">
                    <div className="card blue darken-2">
                        <div className="card-content">
                            <span className="card-title white-text">Add Contact</span>
                            <form className="container" onSubmit={this.onFormSubmit} style={{ margin: "0px" }}>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="name" name="name" type="text" placeholder="Name" className="validate white-text" 
                                        value={name} onChange={this.onChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="email" name="email" type="email" placeholder="Email" className="validate white-text" 
                                        value={email} onChange={this.onChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="phone" name="phone" type="text" placeholder="Phone" className="validate white-text" 
                                        value={phone} onChange={this.onChange} />
                                    </div>
                                </div>
                                <button className="btn waves-effect blue darken-4" type="submit" name="action">Submit</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddContact;
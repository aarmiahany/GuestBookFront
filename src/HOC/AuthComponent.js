import React from 'react';
import swal from 'sweetalert';

function AuthComponent (WrappedComponent, formType){
    return class extends React.Component{ 

        constructor(props){
            super(props);
            this.state = {
                userData: {}
            }
        }

        _handleChange = evt => {
            this.setState({ userData : {...this.state.userData,  [evt.target.name]: evt.target.value }});
        }

       _handleSubmit = evt => {
            evt.preventDefault();
            // validate user inputs
            const { username, email, password, phone } = this.state.userData;

            if(formType === 'signup'){
                if(!username || !email || !password || !phone){
                    return swal("Could not create your account", "Please Fill in all the inputs", "error");
                }
                if(username && username.length < 3) {
                    return swal("Could not create your account", "Username should be greater than 3 Characters", "error");
                }
                if(phone && phone.length < 11) {
                    return swal("Could not create your account", "Invalid Phone", "error");
                }
            }else if(formType === 'signin'){
                if(!email || !password){
                    return swal("Could not create your account", "Please Fill in all the inputs", "error");
                }
            }
            if(password && password.length < 3){
                return swal("Could not create your account", "Please Enter A Strong Password", "error");
            }
        }

        render(){
            return(
                <WrappedComponent 
                _handleSubmit={this._handleSubmit}
                _handleChange={this._handleChange}
                userData={this.state.userData}
                {...this.props}/>
            )
        }
    }
}

export default AuthComponent;
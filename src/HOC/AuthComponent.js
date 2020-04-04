import React from 'react';
import swal from 'sweetalert';
import axios from 'axios';

function AuthComponent (WrappedComponent, formType){
    return class extends React.Component{ 

        constructor(props){
            super(props);
            this.state = {
                userData: {},
                show: false
            }
        }

        _handleChange = evt => {
            this.setState({ userData : {...this.state.userData,  [evt.target.name]: evt.target.value }});
        }

       _handleSubmit = evt => {
            evt.preventDefault();
            let _this = this;
            // validate user inputs
            const { username, email, password, phone } = this.state.userData;

            if(formType === 'signup'){
                if(!username || !email || !password || !phone){
                    return swal("Could not create your account", "Please Fill in all the inputs", "error");
                }
                if(username && username.length < 3) {
                    return swal("Could not create your account", "Username should be greater than 3 Characters", "error");
                }
                if(phone.length < 11 ||  phone.length > 11) {
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

         this.setState({ show: true}, () => {
                if(formType === 'signup'){
                    let userData = this.state.userData;
                    axios.post("/user/create", userData)
                    .then(res => { 
                        _this.setState({ show: false});
                        let d = JSON.parse(res.data.msg);
                        if(d.msg === 'User Already Exists'){
                            swal("Info!", 'User Already Exists' , "info");
                        }else{
                            swal("Done!", "User Created Successfully" , "success"); 
                            this.props.history.push("/signin");
                        }})
                  .catch(ex =>  {_this.setState({ show: false}); swal("An Error Ocurried", "Could Not Create A New User", "error")})
                }
    
                if(formType === 'signin'){
                    let userData = this.state.userData;
                    axios.post("/user/login", userData)
                    .then(res => {
                        _this.setState({ show: false});
                        let parsedData = JSON.parse(res.data.msg);
                        sessionStorage.setItem("userData", JSON.stringify(parsedData.user));
                        sessionStorage.setItem("accessToken", JSON.stringify(parsedData.token));
                        return this.props.history.push("/messages");
                    })
                    .catch(ex => {_this.setState({ show: false}); swal("Error", "Could not login user", "error")})
                }
            });
        }

        render(){
            return(
                <WrappedComponent 
                _handleSubmit={this._handleSubmit}
                _handleChange={this._handleChange}
                userData={this.state.userData}
                showSpinner={this.state.show}
                {...this.props}/>
            )
        }
    }
}

export default AuthComponent;
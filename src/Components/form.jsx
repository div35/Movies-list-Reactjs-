import React, { Component } from 'react';
class Form extends Component {
    state = { account: { username: "", password: "" } };

    handleChange1 = obj => {
        let key = obj.currentTarget.value;
        let newAccount = this.state.account;
        if(obj.currentTarget.name === "email")
         newAccount.username = key;
        else if(obj.currentTarget.name === "password")
         newAccount.password = key;
        this.setState({account : newAccount})
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.account.username);
        console.log(this.state.account.password);
    }

    handlebutton = () =>{
        if(this.state.account.username == "" || this.state.account.password == ""){
            return true;
        }
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input onChange={this.handleChange1} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onChange={this.handleChange1} name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" disabled={this.handlebutton()}>Submit</button>
            </form>
        )
    }
}
export default Form;
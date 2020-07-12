import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props){
        super(props);
        this.state={isLogin:false, elsis:"good"}
    }

    onSubmit = ()=>{
        //console.log("onSubmit" + e);
        this.setState({
            isLogin:true
        })
        console.log("onSubmit end" + this.state.isLogin);
    }

    render() {
        //console.log(this.props.myname.address[0].city)
        console.log("render 1 :"+this.state.isLogin + this.state.elsis);
        const {myaddress} = this.props.myname.address;

        const {isLogin} = this.state.isLogin;

        var address = this.props.myname.address.map(function(data){
            return (
                <div>
                    <table border="3">
                        <tr><th>name</th><th>age</th><th>city</th></tr>
                        <tr><td>{data.name}</td><td>{data.age}</td><td>{data.city}</td></tr>
                    </table>
   
                </div>
            )
        })
       //console.log(address.length)
        return (
            <div>
               this is CLIHD RAHUL<br/>
               {this.props.hello}<br/>
               {this.props.myname.name}
                {
                   address
                }
              <button  onClick={this.onSubmit}>submit</button>

              <p id="plg" > this si best</p>
            </div>
        )
    }
}

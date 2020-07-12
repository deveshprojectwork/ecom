import React, { Component, Children } from 'react'
import Child from './Child';

 class Parent extends Component {
    constructor(){
        super();
        this.state={
            usname:"devesh is my name",
            address:[
                        {name:"devesh",  age:30, city:"mumbai"},
                        {name:"Rahul",  age:37, city:"london"},
                        {name:"Ajay",  age:20, city:"delhi"}
            ]
        }
       

	}
    render() {
        const hello = "this is good country";
        return (
            <div>
                 {/* <ChildB hello={hello} myname="ROHIT" city="Noida" /> */}
                 <Child hello={hello} myname={this.state}/>
                ssdsd
            </div>
        )
    }
}

//  const ChildB = ({hello,myname,city})=><h1>{hello} {myname} {city} </h1>;

export default Parent;
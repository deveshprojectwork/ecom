import React, { Component } from 'react'
import Loader from "react-loader" //first used shows the image if loading is less
export class Jsonuser extends Component {
    constructor(props){
        super(props);
        this.state = {jsonUserData:[], loader:false};
    }

    componentDidMount()
    {
        const URL="https://jsonplaceholder.typicode.com/users55";
        fetch(URL)
        .then(res => res.json())
        .then(data=>
            {
            //console.log("AHU" + data);
            this.setState({jsonUserData:data,loaded:true});
            //console.log("AHU" + jsonUser1);
            })
    }
   
    render() {
        const {jsonUserData}=this.state;
        //console.log("AHU" + jsonUserData);
        return (
            <div>
                    <div id="contact-page" className="container">
                        <div className="bg">
                            <div className="row">    		
                                <div className="col-sm-12">    			   			
                                    <h2 className="title text-center">Json PlaceHolder Data</h2>    			    				    				
                                    <Loader loaded={this.state.loaded}>
                                        <table  className="table">
                                            <thead>
                                                <tr>
                                                    <th>S.No</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>website</th>
                                                    <th>Phone</th>
                                                </tr>
                                            </thead> 
                                            {jsonUserData.length>0?
                                          
                                            <tbody>
                                                  {jsonUserData.map((item,index) =>
                                                <tr>
                                                    <td>{item+1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.website}</td>
                                                    <td>{item.phone}</td>
                                                </tr>
                                             )}</tbody>:
                                                <tr>
                                                <td colspan={5} className="text-center">No data found</td>
                                                </tr>
                                            }
                                        </table>    
                                    </Loader>    
                                </div>		 		
                            </div>    	
                        </div>
                </div>  
            </div>
        )
    }
}

export default Jsonuser

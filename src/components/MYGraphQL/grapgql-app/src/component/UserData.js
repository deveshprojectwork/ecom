import React, { Component } from "react";

class UserData extends Component{ 
    constructor(){
        super();
        this.state = {jsonUserData:[], loader:false};
    }

    componentDidMount()
    {
        const URL="http://localhost:3000/getweight";
        fetch(URL)
        .then(res => res.json())
        .then(data=>
            {
            console.log("AHU" + data);
            this.setState({jsonUserData:data,loaded:true});
            })
    }
    render(){
        const {jsonUserData}=this.state;
        return(
            <div>
                            <div className="col-sm-12">    			   			
                                    <h2 className="title text-center">Json PlaceHolder Table Example</h2>    			    				    				
                                        <table  className="table" border="1" width="50%" align="center">
                                            <thead>
                                                <tr>
                                                    <th>S.No</th>
                                                    <th>Name</th>
                                                    <th>Weight</th>
                                                </tr>
                                            </thead> 
                                            {jsonUserData.length>0?
                                            <tbody>
                                              {jsonUserData.map((item,index) =>
                                                <tr>
                                                    <td>{item.ID}</td>
                                                    <td>{item.empName}</td>
                                                    <td>{item.empWeight}</td>
                                                </tr>
                                             )}</tbody>:
                                                <tr>
                                                <td colspan={5} className="text-center">No data found</td>
                                                </tr>
                                            }
                                        </table>    
                                         <h1>List Exmaple</h1>
                                        <ui>
                                            {jsonUserData.map((item,index)=>
                                                <li>{item.empName}</li>
                                            )}
                                        </ui>
                                    
                                        {this.state.loaded? "<h1>Correct</h1>":"<h1>Wrong</h1>"}

                                        <table>
                                            <th>
                                                <td>Name</td>
                                                <td>Weight</td>
                                            </th>
                                            
                                            {jsonUserData.map((item,index)=>
                                            <tr>
                                                <td>{item.empName}</td>
                                                <td>{item.empWeight}</td>
                                            </tr>
                                            )}
                                           
                                        
                                        </table>
                                </div>	
            </div>
        )
    }
}

export default UserData;
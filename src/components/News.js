import React, { Component } from 'react'
import Axios from 'axios';
export class News extends Component {
    constructor(props){
        super(props);
        this.state = {newsarticle:[]}
    }
    componentWillMount()
    {
        //Change the dates
        //const url="http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-26&sortBy=publishedAt&apiKey=ce9d278934764885b47a5bb76793f88d";
        const url = "http://newsapi.org/v2/top-headlines?country=in&apiKey=c8990a41932a4d509a9c268258f9c026"
        Axios.get(url)
        .then(res=>{
            console.log(res.data)

            if (res.data.status == "ok"){
                this.setState({newsarticle:res.data.articles})
            }
        })
       
    }

    render() {
        const {newsarticle} = this.state;
        return (
            <div>
                <div id="contact-page" className="container">
                    <div className="bg">
                        <div className="row">    		
                            <div className="col-sm-12">    			   			
                                <h2 className="title text-center">Latest News</h2>    			    				    				
                                 {newsarticle.map(item=>
                                    <div>
                                        <h3>{item.title}</h3>     
                                        <img src={item.urlToImage} width="300px" height="150px" />
                                        <article>{item.description}</article>   
                                        <hr />
                                    </div>
                                 )}
                            </div>			 		
                        </div>    	
                    </div>
                </div>  
            </div>
        )
    }
}

export default News


// index.js:1 ./src/components/News.js
//   Line 34:37:  Expected an assignment or function call and instead saw an expression  no-unused-expressions

// {newsarticle.map(item=>{ })  //remove {}
//0120 4728 728
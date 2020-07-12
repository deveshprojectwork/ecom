import React, { Component } from 'react'
import Slider from './Slider';
import Sidebar from './Sidebar';
import Axios from 'axios';
//note: dynamically adding 5 image and the adding them to local storage for cart
export class Main extends Component {
	constructor(props){
		super(props);
		this.state = {pdata:[]};
	}

	componentDidMount()
	{
		Axios.get("products.json") // access since it is kept in global folder
		.then(res=>{
			this.setState({pdata:res.data})
		})
	}

	addCart=(pid)=>
	{
		if(localStorage.getItem('mycart')!=undefined)
		{
				let arr=JSON.parse(localStorage.getItem('mycart')); ///convert JSON to string
				if(arr.includes(pid))
				{
					alert("Product Already Added")
				}
				else{
						arr.push(pid);
						localStorage.setItem('mycart',JSON.stringify(arr)); ///convert string to JSON
						alert("Add cart Successfully")
				}
		}
		else{
				let arr=[];
				arr.push(pid);
				localStorage.setItem('mycart',JSON.stringify(arr));
				alert("Add cart Successfully")
		}
	}
    render() {
		const {pdata} = this.state;
        return (
            <div>
				<Slider/>
				<section>
					<div className="container">
						<div className="row">
						<Sidebar/>
							<div className="col-sm-9 padding-right">
												<div className="features_items">
													<h2 className="title text-center">Features Items</h2>
													{pdata.map(pro=>
													<div className="col-sm-4">
														<div className="product-image-wrapper">
															<div className="single-products">
															{/* {"pid":101,"pname":"A","price":45678,"image":"product1.jpg"}, */}
																	<div className="productinfo text-center">
																	<img src={`images/home/${pro.image}`} alt="" />
																	<h3 className="orange">RS. {pro.price}</h3>
																	<p>{pro.pname}</p>
																	<a href="javascript:void(0)" className="btn btn-default add-to-cart" onClick={()=>this.addCart(pro.pid)}>
																		<i className="fa fa-shopping-cart"></i>Add to cart</a>
																	</div>
															</div>
														</div>
													</div>
													)}
												</div>
											</div>
											</div>
						</div>
					</section>
            </div>
        )
    }
}

export default Main

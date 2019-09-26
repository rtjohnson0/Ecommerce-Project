import React from 'react'
import './styles.css'
import Nav from './nav'
import Footer from './footer.js'


export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            products: []
        };
    }


    componentDidMount() {
        fetch('http://localhost:3001/api/products')
            .then((res) => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        products: data
                    }, console.log(data));
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                });
            }
            
    // fetchClothing = () => {
    //     let newproducts = []
    //     fetch(/api/productfilter)
    // }
    
    render() {
        const { error, isLoaded, products } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
           
            return (
                
               
                <main role="main">
                
                <section class="jumbotron text-center">
                    <div class="container">
                        <h1 class="jumbotron-heading">The "EB" Collections</h1>
                            <p class="lead text-muted">If a game is scheduled for release far in the future, the vendor may not even give us a date. In those cases, we rely on the collective wisdom of our buying staff to estimate a date based on their knowledge of the industry and the vendor's
                            history. We guarantee that we will always post the best release date information available at the time of our posting. We know that you want that hot new game yesterday, and we want to be the company that gets it to you quicker than
                            anyone else.</p>
        
                    </div>
                </section>
                <p>Type something in to see if we have any of the platforms or prices you are looking for:</p>
                <input id="myInput" type="text" placeholder="Search.." />   
              <div>   
                <div class="album py-5 bg-dark">
                    <div className="container">
                        <div className ="row">
                         {products.map((products, index) => (
                            

                            <div className="col-md-4">
                                <div className ="card mb-4 shadow-sm">
                                    <img src={products.URL} alt={products.product_name} height="350" width="100%"/>
                              
                                        <div className="card-body bg-dark">
                                          <p className="card-text">{products.des_box}</p> 
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div class="btn-group">
                                                    <button type="button" class="btn btn-sm btn-outline-light">View</button>
                                                        <button type="button" class="btn btn-sm btn-outline-light">Buy</button>                               
                                                        </div>
                                                    </div>
                                             <small class="text-muted">{products.price}</small>
                                            </div>                          
                                        </div>                          
                                    </div>
                                    
                        ))}
                       
                         </div>
                    </div>
                </div>
             </div>
                    
                
                  </main>          
            );
        }
    }
}


// <Route exact path: ="/" component={HOme}
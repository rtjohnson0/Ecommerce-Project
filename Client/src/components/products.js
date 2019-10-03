import React from 'react'
import './styles.css'
import Nav from './nav'
import Footer from './footer.js'
import ReactDom from 'react-dom'


export default class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            products: []


        };
        //Fetches an api that returns data that only has the category of "Systems"
        this.gameSystems = (e) => {
            fetch('/api/products/Systems')
                .then((res) => res.json()) //takes the response and turns it into a json objet
                .then(
                    (data) => {
                        this.setState({ // returns the empty product array with data
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

            //fetches the data with prices high to low and places them in DESC order
            this.highToLow = (e) => {
                fetch('/api/productFilter/High')
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
            //fetches the data with prices low to high and places them in ASCorder
            this.lowToHigh = (e) => {
                fetch('/api/productFilter/Low')
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

                console.log("this is changing")
            }
            //Returns all the products back to the page and places them back on the screen back by their product id's
            this.allProducts = (e) => {
                fetch('/api/products')
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
                console.log("this is changing")
            }

            // returns all the data with the category = 'Sports'
            this.sportsProducts = (e) => {
                fetch('/api/products/Sports')
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
                console.log("this is changing")
            }
            // returns all the data with the category = 'Shooters'

            this.shootingProducts = (e) => {
                fetch('/api/products/Shooters')
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
                console.log("this is changing")
            }

        }

    }
    // When page renders it will fetch all the products and place the data in an empty array which will be mapped out.
    componentDidMount() {
        fetch('/api/products')
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



    render() {
        const { error, isLoaded, products } = this.state; // move the state down 



        if (error) {
            return <div>Error: {error.message}</div>; // If error then return error message
        } else if (!isLoaded) {
            return <div>Loading...</div>; // if the page doesnt load return 'Loading...'
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
                    <p>Click a product or price to see if we have any of the platforms or prices you are looking for:</p>
                    <div className="btn-product_cont">
                        <button className="btn-product" onClick={this.allProducts}>All</button>
                        <button className="btn-product" onClick={this.gameSystems}>Systems</button>
                        <button className="btn-product" onClick={this.sportsProducts}>Sports Games</button>
                        <button className="btn-product" onClick={this.shootingProducts}>Shooters</button>
                        <button className="btn-product" onClick={this.highToLow}>High-to-Low</button>
                        <button className="btn-product" onClick={this.lowToHigh}>Low-To-High</button>
                    </div>

                    <div>
                        <div class="album py-5 bg-dark">
                            <div className="container">
                                <div className="row">
                                    {products.map((products, index) => (


                                        <div className="col-md-4">
                                            <div className="card mb-4 shadow-sm">
                                                <img src={products.URL} alt={products.product_name} height="350" width="100%" />

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
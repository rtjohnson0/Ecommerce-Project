import React from 'react'
import { async } from 'q';



export default class Contact extends React.Component {
    constructor(props) {
        super(props)

        this.fetchPost = (firstName, lastName, email, address, state, zip) => { // creating parameters for contact page to be able to use them for my query for the POST method


            try {
                fetch('api/newContact', {

                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ // turns my req body into a json object string
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        address: address,
                        state: state,
                        zip: zip
                    })
                })
            }
            catch (error) {
                throw error;
            }
        }
    }
    render() {
        return (

            <main role="main" className="inner cover">
                <form onSubmit={this.fetchPost} className="cmxform" id="commentForm" method="POST" action='/api/newcontact'>
                    <fieldset>
                        <legend>Please provide your name, email address (won't be published) and a comment</legend>
                        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden ">
                            <div className="my-3 p-3 ">


                                <p>
                                    <label for="cname">Firstname (required, at least 2 characters)</label>
                                    <input id="firstName" name="firstName" minlength="2" type="text" />
                                </p>
                                <p>
                                    <label for="cname">Lastname (required, at least 2 characters)</label>
                                    <input id="lastName" name="lastName" minlength="2" type="text" />
                                </p>
                                <p>
                                    <label for="cemail">E-Mail (required)</label>
                                    <input id="email" type="email" name="email" required />
                                </p>
                                <p>
                                    <label for="address">Address</label>
                                    <input id="address" name="address" placeholder="Address" />
                                </p>
                                <p>
                                    <label for="state">State</label>
                                    <input id="state" name="state" placeholder="State -- 2 Characters" />
                                </p>
                                <p>
                                    <label for="zip">Zip</label>
                                    <input id="zip" name="zip" placeholder="Zip" />
                                </p>


                                <p>
                                    <label for="ccomment">Your comment (required)</label>
                                    <textarea id="ccomment" name="comment" required></textarea>
                                </p>

                                <p>
                                    <input className="submit" type="submit" value="Submit" />
                                </p>
                            </div>
                        </div>
                    </fieldset>
                </form>

                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                    <div className="col-md-5 p-lg-5 mx-auto my-5">
                        <h1 className="cover-heading">Cover your page.</h1>
                        <p className="lead">Before contacting us we recommend that you check out our FAQ page where we have answers to the most commonly asked questions about the EDGE Rewards Program. If you still have questions, please call us at 1-855-4EB-EDGE (1-855-432-3343)
                or send an email to help@ebgames.ca.</p>
                        <p className="lead">
                            <a href="#" className="btn btn-lg btn-success">Learn more</a>
                        </p>
                    </div>
                </div>
            </main>


        )
    }
}



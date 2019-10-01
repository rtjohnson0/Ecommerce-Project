import React from 'react'

const Contact = () => {

    return (

        <main role="main" className="inner cover">
            <form className="cmxform" id="commentForm" method="get" action="#">
                <fieldset>
                    <legend>Please provide your name, email address (won't be published) and a comment</legend>
                    <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden ">
                        <div className="my-3 p-3 ">


                            <p>
                                <label for="cname">Name (required, at least 2 characters)</label>
                                <input id="cname" name="name" minlength="2" type="text" />
                            </p>
                            <p>
                                <label for="cemail">E-Mail (required)</label>
                                <input id="cemail" type="email" name="email" required />
                            </p>
                            <p>
                                <label for="password">Password</label>
                                <input type="password" id="password" name="password" placeholder="Password" />
                            </p>
                            <p>
                                <label for="confirm_password">Confirm password</label>
                                <input type="password" id="confirm_password" name="confirm_password" placeholder="Confirm password" />
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

export default Contact
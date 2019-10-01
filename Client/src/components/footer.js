import React from 'react'
import './styles.css'


class Footer extends React.Component {

    render() {

        return (
            <footer className="container py-5">
                <div className="row ">


                    <div className="col-6 col-md ">
                        <h5>Reggie J's</h5>
                        <ul className="list-unstyled text-small ">
                            <li><a className="text-muted " href="# ">The Coolest</a></li>
                            <li><a className="text-muted " href="# ">Website</a></li>
                            <li><a className="text-muted " href="# ">You have</a></li>
                            <li><a className="text-muted " href="# ">Ever Seen</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md ">
                        <h5>Website</h5>
                        <ul className="list-unstyled text-small ">
                            <li><a className="text-muted " href="# ">Bootstrap</a></li>
                            <li><a className="text-muted " href="# ">Jquery</a></li>
                            <li><a className="text-muted " href="# ">CSS</a></li>
                            <li><a className="text-muted " href="# ">JavaScript</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md ">
                        <h5>Visit Us</h5>
                        <ul className="list-unstyled text-small ">
                            <li>
                                <a href="https://www.facebook.com " className="fa fa-facebook text-muted " target="_blank "></a>
                            </li>
                            <li>
                                <a href="https://twitter.com " className="fa fa-twitter " target="_blank "></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com " className="fa fa-instagram " target="_blank "></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com " className="fa fa-linkedin " target="_blank "></a>
                            </li>


                        </ul>
                    </div>

                </div>
            </footer>

        );
    }
}

export default Footer
import React from 'react';
import './Footer.css';
import { List } from 'semantic-ui-react';
import './image';

const Footer = () => {
    return (
        <>
            <div className="footer-container" id='footerId'>

                <div className="content-1">

                    <div className="sub-content-1">
                        <h2>Explore</h2>
                        <p>Home</p>
                        <p>Questions</p>
                        <p>Articles</p>
                        <p>Tutorials</p>
                    </div>

                    <div className="sub-content-1">
                        <h2>Support</h2>
                        <List>
                            <List.Item>FAQs</List.Item>
                            <List.Item>Help</List.Item>
                            <List.Item>Contact Us</List.Item>
                        </List>
                    </div>

                    <div className="sub-content-1">
                        <h2>Stay Connected</h2>
                        <img src={require('./Images/1.jpg')} alt="burwood" />
                        <img src={require('./Images/2.jpg')} alt="burwood" />
                    </div>

                </div>

                <div className="content-2">
                    <h2>Deakin 2024</h2>

                    <div className="sub-content-2">
                        <p>Privacy Policy</p>
                        <p>Terms</p>
                        <p>Code of Conducts</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;

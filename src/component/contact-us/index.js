import React from 'react';
import {Form, FormControl, Col, Button, Glyphicon} from 'react-bootstrap';


const ContactUs = () => (
	<div>
		<div>
			<Col sm={2}/>
			<Col sm={4} className="contact-user-form">
				<Form horizontal>
					<Col sm={12} className="form-div-heading">
						<h1>Contact Us</h1>
					</Col>
					<Col sm={12} className="form-div-img">
						<Glyphicon glyph="envelope" className="icon-contact" />
					</Col>
					<Col sm={12} className="form-div">
						<label htmlFor="email"> Name </label>
						<FormControl type="email" name="email" placeholder="Email" />
					</Col>
					<Col sm={12} className="form-div">
						<label htmlFor="email"> Email </label>
						<FormControl type="password" placeholder="Email" />
					</Col>
					<Col sm={12} className="form-div">
						<label htmlFor="email"> Mobile Number </label>
						<FormControl type="password" placeholder="Password" />
					</Col>
					<Col sm={12} className="form-div">
						<label htmlFor="adderess"> Adderess </label>
						<FormControl type="password" placeholder="Adderess" />
					</Col>
					<Col sm={12} className="form-div-btn">
						<Button bsStyle="info" type="submit" className="sign-in">Submit</Button>
					</Col>
  
				</Form>
			</Col>
			<Col sm={1}/>
			<Col sm={4} className="contact-form">
				<Col sm={12} className="form-div-heading">
					<h1>Contact Information</h1>
				</Col>
				<Col sm={12} className="form-div-img">
					<Glyphicon glyph="earphone" className="icon-contact" />
				</Col>
				<Col sm={12} className="form-div-heading">
					<strong> You can reach us out at below adderess or 
					you can call us anytime.
					</strong>
					<div className="addr-div">
						<i className="font-color-address">
							<p>Scholar Coaching Institute,</p>
							<p>Defence Colony, Chinour</p>
							<p>Near Sai Shikshayantan School,</p>
							<p>Shahjanhanpur, UP (242001)</p>
						</i>
					</div>
				</Col>
				<Col sm={12} className="form-div-heading">
					<h4><b>Call Us</b></h4>
					<div>
						<i className="font-color-address">
							<p>
								<Glyphicon glyph="phone" />  8765469745
							</p>
							<p>
								<Glyphicon glyph="phone" />  9936508287
							</p>
						</i>
					</div>
					<br/>
					<br/>
					<br/>
					<br/>
				</Col>
			</Col>
		</div>
	</div>
);

export default ContactUs;
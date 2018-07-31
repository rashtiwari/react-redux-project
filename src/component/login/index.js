import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Form, FormControl, Col, Button} from 'react-bootstrap';
import userimage from '../../images/img_avatar2.png';

const Login = () => (
	<div>
		<Col sm={5} className="login-form">
			<Form horizontal>
				<Col sm={12} className="form-div-heading">
					<h3> LOGIN FORM </h3>
				</Col>
				<Col sm={12} className="form-div-img">
					<img src={userimage} alt="Avatar" className="avatar" />
				</Col>
				<Col sm={12} className="form-div">
					<label htmlFor="email"> Username </label>
					<FormControl type="email" name="email" placeholder="Email" />
				</Col>
				<Col sm={12} className="form-div">
					<label htmlFor="email"> Password </label>
					<FormControl type="password" placeholder="Password" />
				</Col>
				<Col sm={12} className="form-div-btn">
					<Button bsStyle="info" type="submit" className="sign-in">Login</Button>
				</Col>
  
			</Form>
		</Col>
	</div>
);

const mapDispatchToProps = dispatch => bindActionCreators({
	changePage: () => push('/about-us')
}, dispatch);

export default connect(
	null, 
	mapDispatchToProps
)(Login);

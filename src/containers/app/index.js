import React from 'react';
import { Route } from 'react-router-dom';
import logo from '../../images/logo_img.png';
import '../../style/App.css';
import Home from '../../component/home';
import About from '../../component/about';
import Login from '../../component/login';
import NavInstance from '../../component/header';
import ContactUs from '../../component/contact-us';


const App = () => (
	<div className="App">
		<header className="App-header">
			<a  href="/">
				<img src={logo} className="App-logo" alt="logo" />
			</a>
			<div className="pull-right">
				<a  href="/" className="btn-sign-up" >Home</a>
				<a  href="/login" className="btn-sign-up" >Login</a>
			</div>
		</header>
		<NavInstance />
		<main>
			<Route exact path="/" component={Home} />
			<Route exact path="/about-us" component={About} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/exams" component={Login} />
			<Route exact path="/study-notes" component={Login} />
			<Route exact path="/video-tutorial" component={Login} />
			<Route exact path="/news" component={Login} />
			<Route exact path="/interview" component={Login} />
			<Route exact path="/contact-us" component={ContactUs} />
		</main>
	</div>
);

export default App;

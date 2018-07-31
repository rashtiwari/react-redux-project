import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Home = () => (
	<div>
        Home
	</div>
);

const mapDispatchToProps = dispatch => bindActionCreators({
	changePage: () => push('/about-us')
}, dispatch);

export default connect(
	null, 
	mapDispatchToProps
)(Home);

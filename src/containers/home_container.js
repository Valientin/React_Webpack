import React from 'react';
import { connect } from 'react-redux';

import {getItems} from '../actions';

class HomeContainer extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
		this.props.dispatch(getItems())
    }
    
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }

	render(){
		return(
			<div>
				<h1>Hello HomeContainer!</h1>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		items: state.items
	}
}

export default connect(mapStateToProps)(HomeContainer);
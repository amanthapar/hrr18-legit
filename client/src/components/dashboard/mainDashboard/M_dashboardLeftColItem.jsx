// Will be the indivisual class, student, or assignment
import React from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router'


import getClass from '../../../actions/getClass.js';

class DashboardLeftColItem extends React.Component {
    constructor(props){
        super(props)
    }

    getClass(id){
        localStorage.setItem('classId', id);
        browserHistory.push('/class');
    }

    render(){
        return (
            <a onClick={this.getClass.bind(this, this.props.classDetails.id)}>
                <div className="dashboardLeftColItem clearfix">
                    <div>
                        <h6>Title</h6>
                        <p>{this.props.classDetails.name}</p>
                    </div>
                    <div>
                        <h6>Grade</h6>
                        <p>{this.props.classDetails.grade}</p>
                    </div>
                    <div>
                        <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
                    </div>
                </div>
            </a>
        );
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getClass }, dispatch);
}

export default connect(null, mapDispatchToProps)(DashboardLeftColItem);
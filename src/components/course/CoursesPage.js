import React, {PropTypes} from 'react';
import CourseForm from './CourseForm';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/CourseActions';

class CoursePage extends React.Component{

    courseRow(course,index){
        return <div key={index}>{course.title}</div>;
    }

    render(){
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <CourseForm {...this.props}/>
            </div>
        );
    }
} 

CourseForm.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    
};


function mapStateToProps(state, ownProps) {
    return {
        courses:state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return{
        actions: bindActionCreators(courseActions,dispatch)
    };
    
}


export default connect(mapStateToProps,mapDispatchToProps)(CoursePage);


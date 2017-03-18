import React, {PropTypes} from 'react';
import CourseForm from './CourseForm';
import {connect} from 'react-redux';


class CoursePage extends React.Component{

    courseRow(course,index){
        return <div key={index}>{course.title}</div>;
    }

    render(){
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <CourseForm/>
            </div>
        );
    }
} 

function mapStateToProps(state, ownProps) {
    return {
        courses:state.courses
    };
}



export default connect(mapStateToProps)(CoursePage);
import React from 'react';
import axios from 'axios';
import StudentList from './StudentList'
import SingleStudent from './SingleStudent'


class Main extends React.Component {
    constructor () {
        super();
        this.state = {
            students: [],
            selectedStudent: {}
        };
        this.changeStudent = this.changeStudent.bind(this)
    }
    async componentDidMount () {
        try {
            const response = await axios.get('/student/');
            const allStudents = response.data;
            this.setState({students: allStudents});
        } catch (err) {
            console.log('Something Broke! Here\'s the error: ' + err)
        }
    }
    changeStudent(student){
        this.setState({selectedStudent: student})
    }
    render () {
        return (
            <div>
                <h1>
                    Students
                </h1>
                <StudentList students={this.state.students} changeStudent={this.changeStudent} />
                {
                    this.state.selectedStudent.id ? <SingleStudent students={this.state.students} selectedStudent={this.state.selectedStudent} /> : ''
                }
            </div>
        )
    }
}

export default Main;

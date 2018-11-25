import React from 'react';

// ADD LINK TO `Details` THAT TRIGGERS A `setState` THAT CHANGES `selectedStudent: student`
const StudentList = (props) => {
    const {students, changeStudent} = props
    return (
        <table>
            <tbody>
                <tr>
                    <td><h4>Name</h4></td>
                    <td><h4>Tests</h4></td>
                </tr>
                {students.map(student => {
                    return (
                    <tr key={student.id}>
                        <td>{student.fullName}</td>
                        <td>
                            <p onClick={
                                function() {
                                    return changeStudent(student)
                                }}
                            >
                                Details
                            </p>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default StudentList
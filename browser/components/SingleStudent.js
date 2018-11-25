import React from 'react';

const SingleStudent = (props) => {
    const {students, selectedStudent} = props;
    const addedGrades = selectedStudent.tests.reduce((addedGrade, test) => {
        return (addedGrade += test.grade);
    }, 0);
    console.log('addedGrades: ', addedGrades)
    const avgGrade = Math.floor(addedGrades / selectedStudent.tests.length);
    return (
        <div>
            <h2>{selectedStudent.fullName}</h2>
            <h2>Average Grade  {avgGrade}%</h2>
            <table>
                <tbody>
                    <tr>
                        <td><h4>Subject</h4></td>
                        <td><h4>Grade</h4></td>
                    </tr>
                    {selectedStudent.tests.map(test => {
                    return (
                    <tr key={test.id}>
                        <td>{test.subject}</td>
                        <td>{test.grade}%</td>
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default SingleStudent
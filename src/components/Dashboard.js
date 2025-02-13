import React, { useState } from 'react';
import useStore from './store';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const { isAuthenticated, userName } = useStore(); // Fetch username
    const navigate = useNavigate();
    const [marks, setMarks] = useState({ subject1: "", subject2: "", subject3: "", subject4: "", subject5: "" });
    const [submittedMarks, setSubmittedMarks] = useState([]);

    if (!isAuthenticated) {
        navigate('/');
        return null;
    }

    const handleChange = (e) => {
        setMarks({ ...marks, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMarks = Object.values(marks).map((mark) => (mark !== "" ? Number(mark) : 0));
        setSubmittedMarks(newMarks);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h3>Enter 5 Subjects Marks</h3>
            <form onSubmit={handleSubmit}>
                {Object.keys(marks).map((subject, index) => (
                    <div key={index}>
                        {subject}: <input type="text" name={subject} value={marks[subject]} onChange={handleChange} />
                    </div>
                ))}
                <button type="submit">Submit Marks</button>
            </form>

            <h3>Marks Table</h3>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
                <table border="1" style={{ width: '50%' }}>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submittedMarks.map((mark, index) => (
                            <tr key={index}>
                                <td>Subject {index + 1}</td>
                                <td>{mark}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p><strong>Logged-in User:</strong> {userName}</p> {/* Display username */}
            </div>
        </div>
    );
};

export default Dashboard;

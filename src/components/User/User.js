import React from 'react';
import './User.css';

const User = (props) => {
    // console.log(props);
    const { email, first_name, last_name, gender, img, job_title, salary } = props.user;
    const fullName = `${first_name} ${last_name}`;
    const handleAddFriend = props.handleAddFriend;

    // const count = props.user;
    // const totalSalary = count.reduce((sum, user) => sum + user.salary, 0);


    return (
        <div className="user-container">
            <img src={img} alt="" />
            <h3>Name: {fullName}</h3>
            <p>{gender}</p>
            <p>Job: {job_title}</p>
            <p>{email}</p>
            <div className="flex-area">
                <h3>Salary: ${salary}</h3>
                <button onClick={() => handleAddFriend(props.user)}>Add Friend</button>
            </div>
        </div>
    );
};

export default User;
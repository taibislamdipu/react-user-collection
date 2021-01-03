import React from 'react';

const Cart = (props) => {
    console.log('cart props', props);

    const count = props.count;
    const totalSalary = count.reduce((sum, user) => sum + user.salary, 0);

    const style = {
        top: '0px',
        position: 'sticky',
        paddingTop: '100px'
    }

    return (
        <div className="cart-container" style={style}>
            <h2>Total Add : {count.length}</h2>
            <h2>Total Salary : {totalSalary}</h2>
        </div>
    );
};

export default Cart;
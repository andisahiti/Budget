import React from 'react'
import classes from './Expenses.css'


const Expenses = React.memo((props) => {
    return (

        <div
            className={classes.item + ' ' + classes.clearfix} id="exp">
            <div className={classes.item__description}>{props.description}</div>
            <div className={classes.right + ' ' + classes.clearfix}>
                <div className={classes.item__value + ' ' + classes.exp}>{props.value}</div>
                <div className={classes.item__percentage}>{props.percentage}%</div>
                <div className={classes.item__delete}>
                    <button
                        style={{
                            fontSize: 14,
                            borderRadius: '100%',
                            margin: 'auto',
                            border: '1px solid'
                        }}
                        onClick={props.clicked}
                        className={classes.item__delete__btn + ' ' + classes.exp}>X</button
                    >
                </div>
            </div>
        </div>
    )
})


export default Expenses;


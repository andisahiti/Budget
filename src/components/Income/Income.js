import React from 'react'
import classes from './Income.css'

const Income = React.memo((props) => {
    return (
        <div
            className={classes.item + ' ' + classes.clearfix} id="inc">
            <div className={classes.item__description}>{props.description}</div>
            <div className={classes.right + ' ' + classes.clearfix}>
                <div className={classes.item__value + ' ' + classes.inc}>{props.value}</div>
                <div className={classes.item__delete}>
                    <button
                        style={{
                            fontSize: 14,
                            borderRadius: '100%',
                            margin: 'auto',
                            border: '1px solid'
                        }}
                        onClick={props.clicked}
                        className={classes.item__delete__btn + ' ' + classes.inc}>X</button>
                </div>
            </div>
        </div>
    )
})


export default Income;


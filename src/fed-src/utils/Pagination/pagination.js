import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './pagination.css';


const Pagination = (props) => {

    const [pagesCount, setPagesCount] = useState(null);
    useEffect( () => {
        const newArray = Array.from(Array(Math.ceil(props.numOfItems / 10)).keys())
        setPagesCount(newArray)
    }, [props.numOfItems])


    const userAction = (value) => {
        if (value  < 1){
            return null
        }
        if (value > pagesCount.length){
            return null
        }
        props.action(value);
       
    }

    useEffect(() => {

    }, [])
    return (
        <div className={'pagination'}>
            <div className={'item-count'}> {props?.title} {props.numOfItems}</div>

            <div className={'legend'}>
                <button onClick={() => userAction(props.page - 1)} className={'btn prev-action'}> &#60; </button>
                <div className ='btn-container'>
                    {pagesCount && pagesCount.map( (a, i)=> <button key={i}  onClick={() => userAction( i+ 1)} className={`btn ${props.page === (i + 1) ? 'active' : ''}`}> {(i+1)}</button>)}
                </div>
                <button onClick={() => userAction(props.page + 1)} className={'btn next-action'}> &#62; </button>
            </div>

            {props?.itemsPer && (
                <div className={'items-per'}>
                    {/* // create drop down */}
                </div>
            )}
        </div>
    )
}

Pagination.propTypes = {
   
        title: PropTypes.string,
        itemsPer:PropTypes.number,
        numOfItems: PropTypes.number.isRequired,
        page: PropTypes.number.isRequired,
    
}

export default Pagination;
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './pagination.css';


const Pagination = (props) => {

    const [pagesCount, setPagesCount] = useState([1,2]);
    const [page, setPage] = useState(1)


    const userAction = () => {
        // props.action
    }

    useEffect(() => {

    }, [])
    return (
        <div className={'pagination'}>
            <div className={'item-count'}> {props?.title} {props.numOfItems}</div>

            <div className={'legend'}>
                <button onClick={userAction} className={'btn prev-action'}> &#60; </button>
                <div className ='btn-container'>
                    {pagesCount.map( (a, i)=> <button key={i}  onClick={userAction} className={`btn ${page === (i + 1) ? 'active' : ''}`}> {(i+1)}</button>)}
                </div>
                <button onClick={userAction} className={'btn next-action'}> &#62; </button>
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
    props: PropTypes.shape({
        title: PropTypes.string,
        itemsPer:PropTypes.number,
        numOfItems: PropTypes.array.isRequired,
    }),
}

export default Pagination;
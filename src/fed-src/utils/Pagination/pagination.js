import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './pagination.css';


const Pagination = (props) => {

    const [pages, setPages] = useState([1,2]);

    useEffect(() => {

    }, [])

const {numOfItems} = props
    return (
        <div className={'pagination'}>
            <div className={'item-count'}> {props?.title} 10</div>

            <div className={'legend'}>
                <div> &#60; </div>
                <div> {pages.map( (a, i)=> <button key={i}> {(i+1)}</button>)} </div>
                <div> &#62; </div>
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
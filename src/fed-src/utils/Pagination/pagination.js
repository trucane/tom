import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './pagination.css';

import { useAppContext, useAppUpdateContext } from '../../utils/Context/AppContext';
import { Fragment } from 'react';
const Pagination = (props) => {

    const state = useAppContext()
    const updatePage = useAppUpdateContext()
    const [pagesCount, setPagesCount] = useState(null);


    useEffect( () => {
        const newArray = Array.from(Array(Math.ceil(state.users.length / 10)).keys())
        setPagesCount(newArray)
    }, [state.users])


    const userAction = (value) => {
        if (value  < 1 || value === state.page){
            return null
        }
        if (value > pagesCount.length){
            return null
        }
        updatePage(value);
       
    }

    return (
        <Fragment>
            {state.users && state.users[0] && (
                <div className={'pagination'}>
                    <div className={'item-count'}> {props?.title} {state.users.length}</div>
        
                    <div className={'legend'}>
                        <button onClick={() => userAction(state.page - 1)} className={'btn prev-action'}> &#60; </button>
                        <div className ='btn-container'>
                            {pagesCount && pagesCount.map( (a, i)=> <button key={i}  onClick={() => userAction( i+ 1)} className={`btn ${state.page === (i + 1) ? 'active' : ''}`}> {(i+1)}</button>)}
                        </div>
                        <button onClick={() => userAction(state.page + 1)} className={'btn next-action'}> &#62; </button>
                    </div>
        
                    {props?.itemsPer && (
                        <div className={'items-per'}>
                            {/* // create drop down */}
                        </div>
                    )}
                </div>
                
            )}
        </Fragment>
    )
}

// Pagination.propTypes = {
   
//         title: PropTypes.string,
//         itemsPer:PropTypes.number,
//         numOfItems: PropTypes.number.isRequired,
//         page: PropTypes.number.isRequired,
    
// }

export default Pagination;
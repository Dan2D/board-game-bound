import React from 'react';
import { connect } from 'react-redux';
import {newPage} from "../../Store/Actions/gamesActions";

const mapDispatchToProps = dispatch => {
    return {
        newPage: pg => {
            dispatch(newPage(pg));
        }
    }
}

function Pagination(props) {
    const {newPage} = props;
   let numOfPgs = Math.ceil(props.results / 15);
   let pgArr = [];

   function handlePgClick(i) {
       window.scrollTo(0,0);
        newPage(i);
   }
   for (let i = 1; i <= numOfPgs; i++){
    pgArr.push(<button key={`page-${i}`} onClick={() => handlePgClick(i)}>{i}</button>)
   }

    return (
        <div>
            {pgArr}
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Pagination)

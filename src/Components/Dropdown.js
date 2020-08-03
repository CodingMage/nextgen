import React from 'react';
// import ReactDOM from 'react-dom';
// import { isShowing1, isShowing, hide, hide1 } from './useDropdown';




function Dropdown({ isShowing1, isShowing, hide, hide1 }, props) {

    // return (
    //     isShowing ? (
    //         <div>
    //             {props.children}
    //             <h1>kkdd</h1>
    //         </div>
    //     ) : null
    // )
    if (isShowing) {
        return (
            <div>
                {props.children}
                <h1>dd</h1>
            </div>
        )
    } else if (isShowing1) {
        return (
            <h1>cool</h1>
        )
    } else {
        return (
            null
        )

    }
}



// } isShowing ? 
// return(
//     <div>
//           <ul className={`dropdown ${open1 ? '' : 'open1'}`}>
//                             <li><Wave /> <span>Side Menu</span></li>
//                             <li><Wave /> <span>Simple Menu</span></li>
//                             <li><Wave /> <span>Top Menu</span></li>

//                         </ul>
//     </div>
// )
// : null;

export default Dropdown;

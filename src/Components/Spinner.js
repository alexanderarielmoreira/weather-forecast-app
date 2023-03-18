//Styles
import '../assets/css/Spinner.css'; 

import React from "react";

const Spinner = ()=> {

    return(
        <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div> 
        </div>
    );
}

export default Spinner; 
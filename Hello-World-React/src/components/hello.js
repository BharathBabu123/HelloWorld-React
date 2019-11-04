import React from 'react';

export const Hello = () =>{
    // return(
    //     <div>
    //         <h1>Hello Akram</h1>
    //     </div>
    // )
    
    return React.createElement(
        'div', 
        {id:'hello' , className:'dummyclass'},
        React.createElement('h1',null,'Hello Akram.A') 
    )


}
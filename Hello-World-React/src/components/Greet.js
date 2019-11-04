import React from 'react'

// export function Greet(){
//     return<h1>Hello Anudeep</h1>
// }


// arrow function here also u export and import it in app.js
// props.children should write inside the div only with out div wont work
export const Greet = (props) =>{ 
console.log(props)
// props are immutable i.e, value cant be changed
// props.name=",lkjlknj"
return( 
<div>
<h1>Hello {props.name} and {props.college}</h1>

{props.children}
</div>
)
}

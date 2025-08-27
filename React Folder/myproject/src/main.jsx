import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
// import { Greet, Greet1, Greet2, Name } from './Component/Greet.jsx'
// import { Personalinfo } from './Component/props.jsx'
// import { ClickMehod, ClickMehod1, ClickMehod2, ClickMehod3, ClickMehod4 } from './Component/EventHandling.jsx'
// import { Greeting, Greeting1, Greeting2 } from './Component/ConditionalRendering.jsx'
import Demo from './Component/array.jsx'
 import FacultiDemo from './Component/Lab 17/faculties.jsx'
import StudentDemo from "./Component/Lab 17/Student.jsx";
import A from "./Component/Lab 18/Property_Drill.jsx";
import Parent from "./Component/Lab 18/Card.jsx";

//          Lab 14

// function Hello() {
//     return (
//         <>
//             <h1>Hello World!!</h1>
//         </>
//     )
// }

// class Greet1  extends React.Component {
//     render() {
//         return (
//             <>
//                 <h2>Welcome to React!</h2>
//             </>
//         );
//     }
// }

// function Navbar() {
//     return (
//         <>
//             <nav class="navbar navbar-expand-lg bg-body-tertiary">
//                 <div class="container-fluid">
//                 <div class="navbar-nav">
//                     <a class="nav-link" aria-current="page" href="#">Home</a>
//                     <a class="nav-link" href="#">Features</a>
//                     <a class="nav-link" href="#">Pricing</a>
//                     <a class="nav-link">About</a>
//                 </div>
//                 </div>
//             </nav>
//         </>
//     );
// }

// function Footer() {
//     return (
//         <>
//             <footer className="text-center text-lg-start bg-light text-muted">
//                 <div className="text-center p-4">
//                     © 2025 My Project
//                 </div>
//             </footer>
//         </>
//     );
// }


//     Lab 16



createRoot(document.getElementById('root')).render(
    <StrictMode>

        {/*Lab 14*/}
        {/* <Navbar />
        <Hello />
        <Greet1 />
        <Footer /> */}


         {/*Lab 15*/}
        {/* <Greet />
        <Greet1 />
        <Greet2 />
        <h1>{Name}</h1> */}


        {/*Lab 16*/}
        {/* <Personalinfo /><br />
        <hr />
        <br /><br />
        <h1>Event Handling</h1><br /><br />
        <ClickMehod />
        <ClickMehod1 />
        <ClickMehod2 />
        <ClickMehod3 />
        <ClickMehod4 /><br />
        <hr />
         <br /><br />
        <h1>Conditional Rendering</h1><br /><br />
        <Greeting isdisplay={true} />
        <Greeting1 isdisplay={false} /><br />
        <Greeting2 isdisplay={false} /> */}

        {/*Lab 17*/}
        {/* <h1>Array Map Method</h1>
        <Demo />

        <h1>Faculty Demo</h1>
        <FacultiDemo />

        <h1>Student Demo</h1>
        <StudentDemo /> */}


         {/*Lab 18*/}
        <A />
        <Parent /> 



  </StrictMode>,
)

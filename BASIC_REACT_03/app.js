//myTask--001

// const compo1=React.createElement('div',{id:"first_container"},[
//    React.createElement('div',{id:"data1"},[
//       React.createElement('h1',{id:"heading0"},"This is jana"),
//        React.createElement('h2',{id:"heading1"},"this is also jana")
//     ]),
//     React.createElement('div',{id:"datas"},[
//         React.createElement('h1',{id:"heading2"},"This is jana"),
//          React.createElement('h2',{id:"heading3"},"this is also jana")
//       ])

// ]);
// const root=ReactDOM.createRoot(document.getElementById("main"));
// root.render(compo1);
// console.log(compo1);


//myTask--002

import React from "react";
import  ReactDOM  from "react-dom/client";



const create_component2=React.createElement('div',{class:"parent_class"},[
    React.createElement('div',{class:"sub_parent"},[
       React.createElement('p' ,{class:"Para_1"},"jana this is under sub_parent2_para"),
       React.createElement('h2',{class:"parent_2"},"ohh this is under jana parent2 and heading")
    ]),
    React.createElement('div',{class:"sub_parent"},[
        React.createElement('p' ,{class:"Para_1"},"this is under sub_parent2_para"),
        React.createElement('h2',{class:"parent_2"},"this jana is under parent2 and heading")
     ])

]);


const root_rendering2=ReactDOM.createRoot(document.getElementById("main"));

root_rendering2.render(create_component2);
import React from 'react'


export const SquadData = [

    {
        title: 'Home',
        path: '/',
        card: <AiIcons.AiFillHome />,
        cName: 'squad-position'
    },
]


// return (
//     {SquadData.map((squad, index) => {
//         return (
//             <div key={index} className={squad.cName}>
//                 <Link to={squad.path}>
//                     {squad.card}
//                     <span>{squad.position}</span>
//                 </Link>
//             </div>
//         )
//     })}
// )
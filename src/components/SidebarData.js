import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


export const SidebarData = [

    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Meta Squads',
        path: '/squads',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Meta Players',
        path: '/players',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Starting Guide',
        path: '/guide',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Stats Guide',
        path: '/stats',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Tips & Tricks',
        path: '/tips',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
<<<<<<< HEAD
        title: 'Register',
        path: '/register',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    }
=======
        title: 'Sign In',
        path: '/signin',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
        {
        title: 'Register',
        path: '/form',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
>>>>>>> 1653ec7ab6889c8afa63ba18839e7205879b3d5b
]
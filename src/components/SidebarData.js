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
        title: 'Player Card',
        path: '/playercard',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'PlayerDetails',
        path: '/PlayerDetails',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },


    {
        title: 'Tips & Tricks',
        path: '/tips',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/login',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
        {
        title: 'Register',
        path: '/register',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
]
import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GoIcons from "react-icons/go";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";

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
        icon: <RiIcons.RiTeamFill />,
        cName: 'nav-text'
    },
    {
        title: 'Meta Players',
        path: '/players',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Squad Creator',
        path: '/squadcreator',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'User Squads',
        path: '/usersquads',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    // {
    //     title: 'Starting Guide',
    //     path: '/guide',
    //     icon: <IoIcons.IoIosPaper />,
    //     cName: 'nav-text'
    // },
    // {
    //     title: 'Stats Guide',
    //     path: '/stats',
    //     icon: <FaIcons.FaCartPlus />,
    //     cName: 'nav-text'
    // },
    // {
    //     title: 'PlayerDetails',
    //     path: '/PlayerDetails',
    //     icon: <BsIcons.BsPersonLinesFill />,
    //     cName: 'nav-text'
    // },
    // {
    //     title: 'Tips & Tricks',
    //     path: '/tips',
    //     icon: <FaIcons.FaEnvelopeOpenText />,
    //     cName: 'nav-text'
    // },
    // {
    //     title: 'Login',
    //     path: '/login',
    //     icon: <GoIcons.GoSignIn />,
    //     cName: 'nav-text'
    // },
    {
        title: 'Register',
        path: '/register',
        icon: <MdIcons.MdAccountBox />,
        cName: 'nav-text'
    },
]
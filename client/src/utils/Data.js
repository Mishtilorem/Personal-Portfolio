import {FaReact,FaNode, FaCss3Alt, FaBootstrap} from 'react-icons/fa'
import {SiJavascript, SiMongodb} from 'react-icons/si';
import Project1 from '../assets/Project1.png';
export const Skills = [
    {
        id:0,
        tech: 'React JS',
        icon: <FaReact />,
    },
    {
        id:1,
        tech: 'Node JS',
        icon: <FaNode />,

    },
    {
        id:2,
        tech: 'CSS',
        icon: <FaCss3Alt />,
    },
    {
        id:3,
        tech:'JavaScript',
        icon:<SiJavascript />,
    },
    {
        id:4,
        tech: 'Bootstrap',
        icon: <FaBootstrap />,
    },
    {
        id: 5,
        tech:'MongoDB',
        icon: <SiMongodb />,
    },
];

export const projectDetails = [
    {
        id:0,
        project_name: "Expense Tracker",
        project_desc: " An expense-tracking application, embedded with a chart to track transactions.You can set a target/goal to track how much you need to achieve the same.It's provided with History Section where one can check your recent transactions and check your vault.",
        tech_stack: ['React JS','Node','Express','MongoDB'],
        project_img: Project1,
        project_url: '#',
        reverse:false
    },
     {
        id:1,
        project_name: "Task-Manager",
        project_desc: " Web Application for simplifying task assigning among a team/group",
        tech_stack: ['React JS','Node','Express','MongoDB'],
        project_img: ss55,
        project_url: '#',
        reverse:true,
     },
]
export const navLinks =[
    {
        id:0,
        name: 'Home',
        href: 'Home'
    },
    {
        id:1,
        name: 'My Skills',
        href: 'Skills'
    },
    {   id:2,
        name: 'Projects',
        href: 'Projects',
    },
    {   id:3,
        name: 'My Contact',
        href: 'Contact',
    },
]
export const socialLinks =[
    {
        id:0,
        name: 'gmail',
        href: 'mishtikesar12@gmail.com',
    }
]

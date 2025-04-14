import { FiHome } from "react-icons/fi";
import { FaList,FaRegStar  } from "react-icons/fa";
import { IoPricetagOutline } from "react-icons/io5";
import { FaRegFolder } from "react-icons/fa6";
import { SlPeople } from "react-icons/sl";
import { ImStatsBars } from "react-icons/im";
import { LuMessageSquareText } from "react-icons/lu";
import { FaRegQuestionCircle } from "react-icons/fa";
import { PiMedalThin } from "react-icons/pi";
import { MdOutlinePerson } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
export const sideNavbarComponents = [
    {
        name:"Dashboard",
        thumbnailUrl:<FiHome/>,
        component:"Dashboard",
        path:"/"
    },
        {
        name:"Orders",
        thumbnailUrl:<FaList/>,
        component:"Orders",
        path:"/orders"
    },
        {
        name:"Products",
        thumbnailUrl:<IoPricetagOutline/>,
        component:"Products",
        path:"/products"
    },
        {
        name:"Categories",
        thumbnailUrl:<FaRegFolder/>,
        component:"Categories",
        path:"/categories"
    },
        {
        name:"Customers",
        thumbnailUrl:<SlPeople />,
        component:"Customers",
        path:"/customers"
    },
        {
        name:"Reports",
        thumbnailUrl:<ImStatsBars />,
        component:"Reports",
        path:"/reports"
    },
        {
        name:"Coupons",
        thumbnailUrl:<FaRegStar />,
        component:"Coupons",
        path:"/coupons"
    },
    {
        name:"Inbox",
        thumbnailUrl:<LuMessageSquareText/>,
        component:"Inbox",
        path:"/inbox"
    }
]

export const otherInfo = [
    {
        name:"Knowledge Base",
        thumbnailUrl:<FaRegQuestionCircle />,
        component:"KnowledgeBase"
    },
    {
        name:"Product Updates",
        thumbnailUrl:<PiMedalThin />,
        component:"ProductUpdates"
    }
]

export const settings = [
    {
        name:"Person Settings",
        thumbnailUrl: <MdOutlinePerson/>,
        component:"PersonSettings"
    },
    {
        name:"Global Settings",
        thumbnailUrl: <MdOutlineSettings/>,
        component:"GlobalSettings"
    },
]
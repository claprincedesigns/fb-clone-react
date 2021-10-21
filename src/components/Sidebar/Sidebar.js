import React from 'react';
import './Sidebar.css';
import SidebarRow from "./SidebarRow/SidebarRow";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import {useStateValue} from "../../StateProvider";


function Sidebar() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow title={user.displayName} src={user.photoURL} />
            <SidebarRow title="COVID-19 Information Center" Icon={LocalHospitalIcon} />
            <SidebarRow title="Pages" Icon={EmojiFlagsIcon} />
            <SidebarRow title="Friends" Icon={PeopleIcon} />
            <SidebarRow title="Messenger" Icon={ChatIcon} />
            <SidebarRow title="Marketplace" Icon={StorefrontIcon} />
            <SidebarRow title="Videos" Icon={VideoLibraryIcon} />
            <SidebarRow title="Marketplace" Icon={ExpandMoreOutlinedIcon} />
        </div>
    )
}

export default Sidebar


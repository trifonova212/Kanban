import {IconChevron} from "../../../assets/icons/iconChevron";
import {IconProfile} from "../../../assets/icons/iconProfile";
import css from './Profile.module.css'
import {useState} from "react";

export const Profile = () => {
    const [isProfileVisible, setProfileVisible] = useState(false);

    const handleClick = () => {
        setProfileVisible(!isProfileVisible)
    }

    return (
        <div className={css.profile}
             onClick={handleClick}>
            <IconProfile/>
            <div className={`${css.chevron} ${isProfileVisible ? css.up : ''}`}>
                <IconChevron/>
            
                </div>
            {isProfileVisible && <div className={css.menu}>
                <div className={css.prof}>Profile</div>
                <div className={css.log}>Log Out</div>
            </div>
            }
        </div>
    )
}

export default Profile
 


import c from './Profile.module.css'
import MyPosts from "./Posts/Myposts";
import ProfileInfo from "./Posts/profileInfo/profileInfo";


const Profile = () => {
    return (
        <div >
            <ProfileInfo/>
            <MyPosts />
        </div>
    )
}

export default Profile;
import c from './profileinfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={c.profile__wrapper}>
            <div>
                <img className={c.img}
                     src='https://sun1-89.userapi.com/impg/R6UhXdjvd9bmQmPTnoorZtYnK_u0urTmQl4wqg/B33CmkAUCrI.jpg?size=1111x652&quality=96&sign=d5ca788d32d5c1693326806bceb73ea8&type=album'/>
            </div>
            <div className={c.avatar__wrapper}>
                Ava + description
            </div>
        </div>

    )
}

export default ProfileInfo;
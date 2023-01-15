import c from './post.module.css'

const Post = (props) => {
    return (
        <div className={c.item}>
            <div className={c.wrapper}>
                <img className={c.img}
                     src="https://proprikol.ru/wp-content/uploads/2021/12/kartinki-naruto-na-avu-24-1024x775.jpg"/>
                <p>{props.message}</p>
            </div>
            <div>
                <span className={c.like}>{props.Likecount} likes</span>
            </div>
        </div>
    )
}
export default Post;
import c from './MyPosts.module.css'
import Post from "./post/post";

let postInfo = [{message:'hello z', likeCount:'10'},{message:'hello x', likeCount:'15'},{message:'hello c', likeCount:'20'}]

let messagePost = postInfo
     .map(post => <Post message={post.message} Likecount={post.likeCount}/>)

const MyPosts = (props) => {
    return (
        <div className={c.Posts__wrapper}>
            MyPosts
            <div>
                <textarea></textarea>
                <br/>
                <button>Add post</button>
            </div>
            <div className={c.posts}>
                {messagePost}
            </div>
        </div>
    )
}

export default MyPosts;
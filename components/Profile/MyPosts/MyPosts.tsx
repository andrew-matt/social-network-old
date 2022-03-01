import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../Redux/State";

export type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (newMessage: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current?.value)
        }
    }

    return <div className={s.postsBlock}>
        <div>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    </div>
}

export default MyPosts;
import { useState } from "react";
import { usePosts } from "../context/PostContext";
import { useTheme } from "../context/ThemeContext";

const PostCard =({post}) => {
    const { updatePost, deletePost} =usePosts();
    const{theme} = useTheme();

    const [isEditiong , setIsEditiong] =useState(false);
    const[title,setTitle] = useState(post.title);
    const[body,setBody] = useState(post.body);

    const handleSave =() =>{
        updatePost(post.id, { ...post, title, body });
        setIsEditiong(false);
    };

    return(
        <div className={`post-card ${theme}`}>
            {isEditiong ? (
                <>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea value={body} onChange={(e) => setBody(e.target.value)} />
                    <button onClick={handleSave}>Save</button>
                </>
            ) : (
                <>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <button onClick={() => setIsEditiong(true)}>Edit</button>
                    <button onClick={() => deletePost(post.id)}>Delete</button>
                </>
            )}
        </div>
    );
};

export default PostCard;
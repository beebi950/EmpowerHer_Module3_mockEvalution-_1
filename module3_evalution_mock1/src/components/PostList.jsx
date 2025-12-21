import { createContext ,useContext, useEffect,useState} from "react";
import React from "react";
import {usePosts} from "./PostContext";
import { useTheme } from "./ThemeContext";

const PostList = ( ) => {
    const { posts } = usePosts();

    return(
        <div className="post-list">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;




// const PostContext = createContext();

// export const PostProvider =({children}) => {
//     const [posts,setPosts] = useState([]);

//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(res => res.json())
//         .then(data => setPosts(data.slice(0,20)));
//     },[]);

//     const updatePost =(id, updatePost) => {
//         setPosts(prev => prev.map(post => (post.id === id ?updatedPost :post))
//         );
//     };

//     const deletePost = (id) => {
//         setPosts(prev => prev.filter(post => post.id !==  id))
//     };

//     return(
//         <PostContext.Provider value={{posts,updatePost,deletePost}}>
//             {children}
//         </PostContext.Provider>
//     );
// };

// export const usePosts= () => useContext(PostContext);
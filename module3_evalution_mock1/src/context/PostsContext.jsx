import{createContext, useContext, useEffect,useState} from "react";

const PostsContext=createContext();

export const PostsProvider =({childern}) => {
    const [posts, setPosts] =userState([]);
    useInsertionEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res =>res.json())
        .then(data => setPosts(data.slice(0,20)));
    },[]);

    const updatePost =(id,updatedPost) => {
        setPosts(prev =>
            prev.map(post => (post.id === id ? updatedPost : post))
        );
    };

    const deletePost =(id) => {
        setPosts(prev => prev.filter(post => post.id !== id));
    };

    return(
        <PostsContext.Provider value={{posts,updatePost,deletePost}}>
            {childern}
        </PostsContext.Provider>

    );
};

export const usePosts =() => useContext(PostsContext);
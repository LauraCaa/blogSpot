import Posts from "@/utils/blog.json";
export default function Post({isOpen, toggleIsOpen}) {
    return(
        <div className="posts-body">
            {Posts.map((post)=> (
                <div key={post.id} className="post" onClick={()=> toggleIsOpen(!isOpen, post)}>
                    <img src={post.image} alt="post image"/>
                    <h2>{post.name}</h2>
                    <p>{post.content}</p>
                    <span>{post.createdAt}</span>
                </div>
            ))}
        </div>
    )
};
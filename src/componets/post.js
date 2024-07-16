import Data from "@/utils/blog.json";

export default function Post({isOpen, toggleIsOpen}) {
    return(
        <div className="posts-body">
            {Data.map((post) => (
                <div key={post.id} className="post" onClick={() => toggleIsOpen(!isOpen, post)}>
                    <img src={post.image} alt="post image"/>
                    <h4>{post.name}</h4>
                    <p>{post.content}</p>
                    <span>{post.createdAt}</span>
                </div>
            ))}
        </div>
    )
};
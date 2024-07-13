import Data from "@/utils/blog.json";

export default function Post() {
    return(
        <div className="posts-body">
            {Data.map((post) => (
                <div key={post.id} className="post">
                    <img src={"https://placehold.co/250x150"} alt="post image"/>
                    <h4>{post.name}</h4>
                    <p>{post.content}</p>
                    <span>{post.createdA}</span>
                </div>
            ))}
        </div>
    )
};
import Post from "../post/Post";

function Posts({ posts }) {
    return (
        <div className="flex flex-wrap">
            { posts.map((p) => (
                <Post post = {p} className="w-1/3 p-4" />
            ))}
        </div>
    )
}

export default Posts;
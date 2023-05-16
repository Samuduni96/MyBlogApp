import Post from "../post/Post";
import { useRouter } from 'next/router';

function Posts({ posts }) {
    const router = useRouter();
    const { postId } = router.query;

    if (postId) {
        return <h1>Post {postId}</h1>;
      }

    return (
        <div className="flex flex-wrap">
            {posts.map((p) => (
                <Post post={p} key={p.id} className="w-1/3 p-4" />
            ))}
        </div>
    );
}

export default Posts;
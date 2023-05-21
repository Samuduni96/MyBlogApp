import Post from "../post/Post";
import { useRouter } from "next/router";

function Posts({ posts }) {
  const router = useRouter();
  const { postId } = router.query;

  if (postId) {
    return <h1>Post {postId}</h1>;
  }

  return (
    <div className="flex flex-wrap m-6 mx-24 space-x-20">
      {posts.map((p,index) => (
        <div key={index}>
          <Post post={p} className="w-1/3 p-4" />
        </div>
      ))}
    </div>
  );
}

export default Posts;

import { useRouter } from "next/router";
import Link from "next/link";

function Post({post}) {
    return (
        <div className="max-w-sm mx-auto my-2 overflow-hidden rounded shadow-lg">
            { post.photo && (
            <img className="w-full h-60 object-cover" 
                    src={ post.photo } 
                    alt="image_1"/>
            )}
            <div className="px-6 py-4">
                <div className="mb-4 text-center text-xl font-bold">{ post.title}</div>
                <div className="mb-4 text-center text-sm text-gray-400">
                    <span>{ new Date(post.createdAt).toDateString() }</span>
                </div>
                    <p className="text-base h-10 overflow-hidden text-overflow whitespace-nowrap overflow-ellipsis text-gray-600">
                        { post.desc }
                    </p>
            </div>
            <div className="text-center">
                <button className="px-4 py-2 my-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent">
                    <Link href={`/post/${post._id}`}>Read More...</Link>
                </button>
            </div>           
        </div>
    );
};

export default Post;
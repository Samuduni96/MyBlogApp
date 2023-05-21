import { useRouter } from "next/router";
import Link from "next/link";
import Modal from "react-modal";
import axios from "axios";
import { useEffect, useState } from "react";

const Post = ({post,key}) => {
  const PF = "http://localhost:5000/images/";
  const [isOpen, setIsOpen] = useState(false);
  const [postData, setPost] = useState(null);
  const viewData = { Photo: "", Title: "" };
  const viewMore = async () => {
    debugger;
    try {
      await axios
        .get(`http://localhost:5000/api/posts/${post.Id}`)
        .then((res) => {
          if (res) {
            setIsOpen(true);
          }
          setPost(res.data);
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <div  className="max-w-6xl mt-6 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <img
            className="w-full h-100 object-cover"
            src={PF + post.photo}
            alt="single_image"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600">
                Author: <b>{post.username}</b>
              </span>
              <span className="text-sm text-gray-600">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="text-base text-gray-700 mb-4">{post.desc}</p>
            <div className="flex justify-end">
              <button className="px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded mr-2 hover:bg-blue-500 hover:text-white hover:border-transparent">
                Update
              </button>
              <button className="px-4 py-2 font-semibold text-red-700 bg-transparent border border-red-500 rounded  hover:bg-red-500 hover:text-white hover:border-transparent">
                Delete
              </button>
              <button onClick={() => setIsOpen(false)} className="px-4 py-2 mx-2 font-semibold text-black-700 bg-transparent border border-gray-800 rounded  hover:bg-gray-800 hover:text-white hover:border-transparent">
                Close
              </button>
            </div>
          </div>
        </div>  
      </Modal>
     
      <div className="max-w-sm my-2 overflow-hidden rounded shadow-lg">
        {post.photo && (
          <img
            className="w-full h-60 object-cover"
            src={PF + post.photo}
            alt="image_1"
          />
        )}
        <div className="px-6 py-4">
          <div className="mb-4 text-center text-xl font-bold">
            {post ? post.title : ""}
          </div>
          <div className="mb-4 text-center text-sm text-gray-400">
            <span>{new Date(post.createdAt).toDateString()}</span>
          </div>
          <p className="text-base h-10 overflow-hidden text-overflow whitespace-nowrap overflow-ellipsis text-gray-600">
            {post ? post.desc : ""}
          </p>
        </div>
        <div className="text-center">
          <button
            onClick={
              () => setIsOpen(true)
            }
            className="px-4 py-2 my-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent">
            Read More...
          </button>
        </div>
      </div>
    </>
  );
};

export default Post;

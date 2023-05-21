import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "@/context/Context";


function BlogForm() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
          username: user.user.username,
          title,
          desc,
        };
        console.log("User:", user);
        console.log("Username:", user.username);
        if (file) {
          const data = new FormData();
          const filename = Date.now() + file.name;
          data.append("name", filename);
          data.append("file", file);
          newPost.photo = filename;

          const config = {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          };

          try {
            const uploadResponse =  await axios.post("http://localhost:5000/api/upload", data, config);
            console.log("Upload response:", uploadResponse.data);
          } catch (err) {
            console.error("Upload error:", err);
          }
        }
        try {
          const createResponse = await axios.post("http://localhost:5000/api/posts/create", newPost);
          console.log("Create response:", createResponse.data);
          window.location.replace("/home");
        } catch (err) {
            console.error("Create error:", err);
        }
      };

    return (
        <div>
        <form className="max-w-5xl w-full mx-auto mt-6" onSubmit = {handleSubmit}>
            <span className="text-3xl flex flex-col items-center font-bold mb-6">ADD BLOG</span>
            <div className="mb-6">
                { file && (<img className="w-full h-64 object-cover" src={URL.createObjectURL(file)}
                    alt=""/>)}
            </div>
            <div className="mb-6">
                <label className="block uppercase text-gray-500 text-xs font-bold mb-2">
                    Title
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50" 
                        type="text" 
                        placeholder="Title"
                        autoFocus={true}
                        onChange={e=>setTitle(e.target.value)} />
            </div>
            <div className="mb-6">
                <label className="block uppercase text-gray-500 text-xs font-bold mb-2">
                    Image
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50" 
                        type="file"
                        id="fileInput" 
                        onChange={(e) => setFile(e.target.files[0])} />
            </div>
            <div className="mb-6">
                <label className="block uppercase text-gray-500 text-xs font-bold mb-2">
                    Description
                </label>
                <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50" 
                        type="text" 
                        placeholder="Tell your story..."
                        onChange={e=>setDesc(e.target.value)}></textarea>
            </div>
            <button className="px-4 py-2 my-1 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent" 
                type="submit">
                    Publish
                </button>
        </form>
        </div>
    )
};

export default BlogForm;
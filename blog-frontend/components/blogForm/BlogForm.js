function BlogForm() {
    return (
        <form className="max-w-5xl w-full mx-auto mt-6">
            <span className="text-3xl flex flex-col items-center font-bold mb-6">ADD BLOG</span>
            <div className="mb-6">
                <img className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""/>
            </div>
            <div className="mb-6">
                <label className="block uppercase text-gray-500 text-xs font-bold mb-2">
                    Title
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50" 
                        type="text" 
                        placeholder="Title" />
            </div>
            <div className="mb-6">
                <label className="block uppercase text-gray-500 text-xs font-bold mb-2">
                    Image
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50" 
                        type="file"
                        id="fileInput" 
                        placeholder="image" />
            </div>
            <div className="mb-6">
                <label className="block uppercase text-gray-500 text-xs font-bold mb-2">
                    Description
                </label>
                <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50" 
                        type="text" 
                        placeholder="Tell your story..."></textarea>
            </div>
            <button className="px-4 py-2 my-1 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent">
                    Publish
                </button>
        </form>
    )
};

export default BlogForm;
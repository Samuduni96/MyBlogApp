function Home() {
    return (
        <div className="relative">
            <div className="absolute top-6 left-0 w-full text-center">
                <span className="text-6xl font-bold tracking-wider text-gray-600 uppercase ml-4 mt-4">Blog</span>
            </div>
            <img className="w-full h-96 object-cover" src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" alt="header_image"/>
        </div>
    )
};

export default Home;
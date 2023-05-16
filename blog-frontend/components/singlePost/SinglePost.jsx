import { useRouter } from 'next/router';

function SinglePost() {
  const router = useRouter();
  const currentRoute = router.pathname;
  console.log(currentRoute);
    return (
        <div className="max-w-5xl mt-6 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <img className="w-full h-60 object-cover" src="https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80" alt="single_image"/>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit</h1>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600">Author: <b>Samuduni</b></span>
            <span className="text-sm text-gray-600">15/05/2023</span>
          </div>
          <p className="text-base text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quaerat! Architecto qui animi ducimus, asperiores nisi amet nemo
            iusto neque ab libero ullam, reprehenderit eius possimus facilis quod unde vitae. Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Cum, quaerat! Architecto qui animi ducimus, asperiores nisi amet nemo iusto neque ab libero ullam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quaerat! Architecto qui animi ducimus, asperiores nisi amet nemo
            iusto neque ab libero ullam, reprehenderit eius possimus facilis quod unde vitae. Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Cum, quaerat! Architecto qui animi ducimus, asperiores nisi amet nemo iusto neque ab libero ullam, 
            reprehenderit eius possimus facilis quod unde vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quaerat! 
            Architecto qui animi ducimus, asperiores nisi amet nemo iusto neque ab libero ullam, reprehenderit eius possimus facilis quod 
            unde vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quaerat! Architecto qui animi ducimus, asperiores nisi 
            amet nemo iusto neque ab libero ullam, reprehenderit eius possimus facilis quod unde vitae. Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Cum, quaerat! Architecto qui animi ducimus, asperiores nisi amet nemo iusto neque ab libero ullam, 
            reprehenderit eius possimus facilis quod unde vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quaerat! 
            Architecto qui animi ducimus, asperiores nisi amet nemo iusto neque ab libero ullam, reprehenderit eius possimus facilis quod 
            unde vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quaerat! Architecto qui animi ducimus, asperiores 
            nisi amet nemo iusto neque ab libero ullam, reprehenderit eius possimus facilis quod unde vitae.
          </p>
          <div className="flex justify-end">
            <button className="px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded mr-2 hover:bg-blue-500 hover:text-white hover:border-transparent">
              Update
            </button>
            <button className="px-4 py-2 font-semibold text-red-700 bg-transparent border border-red-500 rounded  hover:bg-red-500 hover:text-white hover:border-transparent">
              Delete
            </button>
          </div>
        </div>
      </div>
    )
}

export default SinglePost;
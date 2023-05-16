import Link from "next/link";

function RegisterForm() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1611326236006-51eb558e9554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")' }}>
            <div className="max-w-2xl w-full mx-auto">
            <span className="text-3xl flex flex-col items-center font-bold mb-8">Register</span>
        <form className="rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
                   type="text" 
                   placeholder="Enter your username..." />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
                   type="text" 
                   placeholder="Enter your email..." />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                   type="password" 
                   placeholder="Enter your password..." />
          </div>
          <div className="max-w-full">
  <div className="flex items-center justify-between text-center">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
      type="button">
      Register
    </button>
    </div>
    <div className="text-center mt-4">
    <button className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
      <Link href="/login">Login</Link>
    </button>
    </div>
</div>
        </form>
      </div>
      </div>
    )
};

export default RegisterForm;
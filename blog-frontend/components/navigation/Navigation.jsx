import Link from "next/link";

const Navigation = () => {
    return (
        <nav>
            <ul className="flex justify-end items-center py-4 bg-gray-200">
                <li className="mr-20 text-lg text-gray-600 hover:text-blue-500">
                    <Link href="/home">HOME</Link>
                </li>
                <li className="mr-20 text-lg text-gray-600 hover:text-blue-500">
                    <Link href="/addBlog">ADD BLOG</Link>
                </li>
                <li className="mr-20 text-lg text-gray-600 hover:text-blue-500">
                    <Link href="/single">MY PROFILE</Link>
                </li>
                <li className="mr-20 text-lg text-gray-600 hover:text-blue-500">
                    <Link href="/login">LOG OUT</Link>
                </li>
            </ul> 
        </nav>
    )
}

export default Navigation;


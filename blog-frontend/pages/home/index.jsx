import Header from '@/components/header/Header';
import Navigation from '@/components/navigation/Navigation';
import Posts from '@/components/posts/Posts';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("http://localhost:5000/api/posts");
            console.log(res);
            setPosts(res.data);
        }
        fetchPosts();
    },[])

    return (
        <div>
            <Navigation/>
            <Header/>
            <Posts posts={ posts }/>
        </div>
    )
}

export default Home;
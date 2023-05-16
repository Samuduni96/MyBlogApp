import { Fragment } from "react";
import Head from "next/head";
import BlogItem from "@/components/post/Post";

function HomePage() {
  return (
    <Fragment>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Metal+Mania&family=Montserrat&display=swap" rel="stylesheet"/>
      </Head>
      <h1>Blog Page</h1>
      {
        // <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        // { posts.map( (post) => (
        // <div key = { post._id }>
        // <BlogItem  
        //   title = { post.title } 
        //   image = { post.photo } 
        //   description = { post.desc } 
        //   details = { post.username }
        //   slug = { post.slug }/>
        //   </div>
        // ))}
        // </div>
      }
    </Fragment>
  );
};

// export async function getServerSideProps() {
//   const res = await fetch('http://localhost:5000/api/posts');
//   const posts = await res.json();

//   return {
//     props: { posts },
//   };
// }

export default HomePage;
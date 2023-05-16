import { Fragment } from "react";
import BlogForm from "@/components/blogForm/BlogForm";
import Navigation from "@/components/navigation/Navigation";

function AddBlog() {
    return (
        <Fragment>
            <Navigation/>
            <BlogForm/>
        </Fragment>
    )
};

export default AddBlog;
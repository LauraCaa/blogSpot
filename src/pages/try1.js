import "@/assets/try1.css";
import Post from "@/componets/try1/posts";
import Modal from "@/componets/try1/modal";
import { useState } from "react";
export default function Try1() {
    const[isOpen, setIsOpen]= useState(false);
    const[currentPost, setCurrentPost]= useState(null);

    function toggleIsOpen(value, post) {
        setIsOpen(value)
        setCurrentPost(post)
    };
    return(
        <main>
            <div className="posts-container">
                <div className="posts-header">
                    <h1>Noticias deportivas</h1>
                </div>
                <Post isOpen={isOpen} currentPost={currentPost} toggleIsOpen={toggleIsOpen}></Post>
            </div>
            <Modal isOpen={isOpen} currentPost={currentPost} toggleIsOpen={toggleIsOpen}></Modal>
        </main>
    )
};
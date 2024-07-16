import "@/assets/styles.css";
import Post from "@/componets/post";
import Modal from "@/componets/modal";
import {useState} from "react";

export default function Home() {
  const[isOpen, setIsOpen] = useState(false);
  const[currentPost, setCurrentPost] = useState(null);

  function toggleIsOpen(value, post) {
    setIsOpen(value)
    setCurrentPost(post)
  };
  return( 
    <main>
      <div className="posts-container">
        <div className="posts-header">
          <h1>Latest Post</h1>
        </div>
          <Post isOpen={isOpen} toggleIsOpen={toggleIsOpen}></Post>
      </div>
      <Modal currentPost={currentPost} isOpen={isOpen}  toggleIsOpen={toggleIsOpen}></Modal>
    </main>
  );
}

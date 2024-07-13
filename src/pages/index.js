import "@/assets/styles.css";
import Post from "@/componets/post";
import Modal from "@/componets/modal";
export default function Home() {
  return (
    <main>
      <div className="posts-container">
        <div className="posts-header">
          <h1>Latest Post</h1>
        </div>
          {/* <Post></Post> */}
      </div>
      <Modal></Modal>
    </main>
  );
}

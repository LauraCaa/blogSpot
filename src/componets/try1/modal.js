export default function Modal({isOpen, toggleIsOpen, currentPost}) {
    return(
        <>  
        {currentPost && (
            <div className={`modal-wrapper ${isOpen ? "display-flex": null}`} onClick={()=> toggleIsOpen(!isOpen)}>
                <div className="modal" onClick={(event)=> event.stopPropagation()}>
                    <span onClick={()=> toggleIsOpen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </span>
                    <img src={currentPost.image} alt="post image"/>
                    <h2>{currentPost.name}</h2>
                    <div className="modal-body">
                        <p>{currentPost.content}</p>
                        <span>{currentPost.createdAt}</span>
                    </div>   
                </div>
            </div>
        )}  
        </>
    )
};
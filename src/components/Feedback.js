import React, {useState} from "react"

function Feedback (props) {
    
    const [showingComments, setShowingComments]= useState(true)
    function changeState(){
        setShowingComments(!showingComments)
    }
    const videoComments = props.comments.map((comment) => {
        return<CommentCreator 
            key ={comment.id} 
            comment = {comment.comment} 
            user = {comment.user}/> 
    });
    return (
        <div>
            <h1>Comments</h1>
            <button onClick= {changeState} > {showingComments ? "Hide": "Show"} Comments</button>
            <ul>{showingComments ? videoComments: null}</ul>
        </div>
    );
}
    function CommentCreator({comment, user}){
        return <>   
        <h3> {user} </h3>
        <p>{comment}</p>
        </>
        ;
    }       



export default Feedback;
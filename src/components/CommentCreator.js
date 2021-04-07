import React, {useState} from "react"
function CommentCreator(props){
    const [downvoteAmount,setdownvoteAmount] = useState(0)  
    function handleDownvote(){
        setdownvoteAmount(downvoteAmount + 1) 
    }

    const [upvoteAmount, setUpvoteAmount] = useState(0)
    function handleUpvote(){
        setUpvoteAmount(upvoteAmount + 1) 
    }
    return <>   
    <h3> {props.user} </h3>
    <p>{props.comment}</p>
    <button onClick={handleUpvote}>{upvoteAmount}👍🏿</button>
    <button onClick={handleDownvote}>{downvoteAmount}👎🏿</button>
    <button>Delete</button>
    </>
    ;
}       
export default CommentCreator;
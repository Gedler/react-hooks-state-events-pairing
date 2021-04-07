import React, {useState} from "react"


function VideoContent (props) {
    const [downvoteAmount,setdownvoteAmount] = useState(185)
    function handleDownvote(){
        setdownvoteAmount(downvoteAmount + 1) 
    }

    const [upvoteAmount, setUpvoteAmount] = useState(9210)
    function handleUpvote(){
        setUpvoteAmount(upvoteAmount + 1) 
    }
    return ( 
        <div id="video-content" >
             <iframe
        width="919"
        height="525" 
        src= {props.video}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
        />
            <h1>{props.name}</h1>
            <p>{props.views} views | {props.date}</p>
            <span>
            <button onClick ={handleUpvote}>{upvoteAmount}👍🏿</button> 
            <button onClick ={handleDownvote}>{downvoteAmount}👎🏿</button>
            </span>
            
            </div>
    )
}

export default VideoContent;
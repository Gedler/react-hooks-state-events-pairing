function VideoContent (props) {
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
            <button>{props.upvotes}👍🏿</button> 
            <button>{props.downvotes}👎🏿</button>
            </span>
            <button>Hide Comments</button>
            </div>
    )
}

export default VideoContent;
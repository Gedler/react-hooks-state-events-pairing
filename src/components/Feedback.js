import React, {useState} from "react"
import CommentCreator from "./CommentCreator"
function Feedback (props) {
    const [showingComments, setShowingComments]= useState(true)
    function changeState(){
        setShowingComments(!showingComments)
    }
    // const videoComments = props.comments.map((comment) => {
    //     return<CommentCreator 
    //     key ={comment.id} 
    //     comment = {comment.comment} 
    //     user = {comment.user}/> 
    // });
    const [searchText,setSearchText] = useState("")
    const filteredComments = props.comments.filter((comment)=>{
       
        return(comment.user.toLowerCase().includes(searchText.toLowerCase())
        
        );
    })
    const displayComments = filteredComments.map((comment)=>{
        return<CommentCreator 
        key ={comment.id} 
        comment = {comment.comment} 
        user = {comment.user}/> 

    })
    function searchHandler(event){
        console.log(filteredComments)
        setSearchText(event.target.value);

    }
    return (
        <div>
            <h1>Comments</h1>
            <input onChange={searchHandler} type="text" placeholder="Search..." />
            <button onClick= {changeState} > {showingComments ? "Hide": "Show"} Comments</button>
            <ul>{showingComments ?  displayComments: null}</ul>
        </div>
    );
}
    



export default Feedback;
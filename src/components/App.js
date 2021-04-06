import video from "../data/video.js";
import Feedback from "./Feedback.js";
import VideoContent from "./VideoContent.js";


function App() {
  console.log("Here's your data:", video);
  

  return (
    
    <div className="App">
      <VideoContent
      video = {video.embedUrl}
      name = {video.title}
      views = {video.views}
      date = {video.createdAt}
      upvotes = {video.upvotes}
      downvotes= {video.downvotes}
      />
  <Feedback
  
  comments = {video.comments}
  />
      </div>
  );
}

export default App;

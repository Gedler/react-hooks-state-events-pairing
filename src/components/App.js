import video from "../data/video.js";
import Feedback from "./Feedback.js";
import VideoContent from "./VideoContent.js";


function App() {
  

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

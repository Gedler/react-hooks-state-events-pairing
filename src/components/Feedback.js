function Feedback (props) {
    const videoComments = props.comments.map((comment) => {
        console.log(comment)
    })
    return (
        <div>
            <h1>2 Comments</h1>
            <h3><stong>{props.user}</stong> </h3>
            <p>first</p>
            <h3><strong>{props.user}</strong></h3>
            <p>What a great tutorial!</p>
        </div>
    );
}

export default Feedback;
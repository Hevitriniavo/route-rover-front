
const PostList = () => {
    const session = localStorage;
    const handleClick = () => {
        console.log(session);
    }
    return (
        <div className="container mx-auto">
            <div>PostList</div>
            <button type="button" onClick={handleClick} className="px-4 py-2 bg-blue-400">click me !</button>
        </div>
    )
}

export default PostList
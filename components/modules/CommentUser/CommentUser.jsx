
const CommentUser = ({ img, username, body }) => {

    return (
        <div className="testimonial-item">
            <div className="d-flex align-items-center mb-3">
                <img className="img-fluid" src={img} alt="user" />
                <div className="ml-3">
                    <h4>{username}</h4>
                    <i>User</i>
                </div>
            </div>
            <p className="m-0">{body}</p>
        </div>
    )
}

export default CommentUser
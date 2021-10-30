class CommentTemplate {
    constructor(type) {
        this.type = type;

        this.getCommentFromLs = getCommentFromLs(this.type) || []
    }
    createComment(hikeName, comment) {
        //newComment is a object
        const newComment = {
            name: hikeName,
            date: new Date(),
            content: comment
        };

        this.comments.push(newComment);
        saveToLs(this.type, this.comments);
    }


}

function saveToLs(key) {
    window.localStorage.setItem(key, JSON.stringify(info))
}

function getCommentFromLs(key) {
    return JSON.parse(window.localStorage.getItem(key));
}

const commentForm = `
<div>
<h2></h2>
<input type="text" id="commentInput"/>
<button id="submitComment">Submit Comment</button>
</div>
`;
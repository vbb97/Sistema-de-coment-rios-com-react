import { useEffect, useState } from 'react';
import {
    Container, 
    Modal,
    Box,
    Buttons
} from './style';
import Add from '../Add';
import Comment from '../Comment';

import { 
    getComments as getCommentsApi, 
    createComment as createCommentApi,
    getCurrentUser as getCurrentUserApi
} from "../../api";

const Main = () => {
    const currentUser = getCurrentUserApi().userId;
    const [backendComments, setBackendComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null);
    const [modal, setModal] = useState(false);
    const [commentToDelete, setCommentToDelete] = useState(null);
    const rootComments = backendComments.filter((backendComment) => (
        backendComment.replyingTo === null
    ));

    const getReplies = (username) => 
        backendComments
            .filter((backendComment) => backendComment.replyingTo === username)
            .sort(
                (a, b) =>
                    new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );
    
    const addComment = (text, userParent) => {
        createCommentApi(text, userParent).then((comment) => {
            setBackendComments([comment, ...backendComments]);
        });
        setActiveComment(null);
    };

    const deleteComment = (commentId) => {
        const updatedComments = backendComments.filter((backendComment) => (
            backendComment.id !== commentId
        ));
    setBackendComments(updatedComments);
    };

    const updateComment = (text, commentId) => {
        const updatedComments = backendComments.map((backendComment) => {
            if(backendComment.id === commentId) {
                return { ...backendComment, content: text }
            };
            return backendComment;
        });
        setBackendComments(updatedComments)
        setActiveComment(null);
    };

    const score = (operation, commentId) => {
        const updatedCommentsScore = backendComments.map((backendComment) => {
            if(backendComment.id === commentId) {
                if(operation === 'plus') {
                    return {...backendComment, score: backendComment.score + 1}
                } else {
                    return {...backendComment, score: backendComment.score - 1}
                }
            }
            return backendComment;
        });
        setBackendComments(updatedCommentsScore)
    }

    const delet = (commentId) => {
        document.body.style.overflowY = 'hidden';
        setModal(true);
        setCommentToDelete(commentId);
    }

    const handleDelete = (exclude) => {
        if (!exclude) {
            document.body.style.overflowY = 'visible';
            setModal(false);
        } else {
            deleteComment(commentToDelete);
            setModal(false);
        }
    }

    useEffect(() => {
        getCommentsApi().then((data) => {
            setBackendComments(data)
        })  
    }, []);

    return (
        <Container>
            {modal && 
                <Modal>
                    <Box>
                        <h2>Delete comment</h2>
                        <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
                        <Buttons>
                            <button onClick={() => handleDelete (false)} className='cancel'>NO, CANCEL</button>
                            <button onClick={() => handleDelete(true)} className='delete'>YES, DELETE</button>
                        </Buttons>
                    </Box>
                </Modal>
            }
            
            {rootComments.map((backendComment) => (
                <Comment
                    key={backendComment.id}
                    currentUser={currentUser}
                    comment={backendComment}
                    name={backendComment.user.username}
                    userParent={backendComment.user.username}
                    created={backendComment.createdAt}
                    avatar={backendComment.user.image.png}
                    content={backendComment.content}
                    score={score}
                    replies={getReplies(backendComment.user.username)}
                    addComment={addComment}
                    delet={delet}
                    updateComment={updateComment}
                    activeComment={activeComment}
                    setActiveComment={setActiveComment}
                    setModal={setModal}
                />
            ))}

            <Add 
                handleSubmit={addComment}
                label='SEND'
            />
        </Container>
    );
};

export default Main;

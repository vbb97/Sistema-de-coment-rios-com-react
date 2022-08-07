import { useState } from 'react';
import Add from '../Add';
import { Container, RootComments, Left, Icon, Right, Top, Info,
         Avatar, Name, Time, Actions, ActionsCurrentUser, ActionsCurrentUserBottom, Delete, Edit, Reply, Arrow, Button, Text, Tag, Bottom, BottomLeft, BottomActions, BottomReply, ReplyComments, ActionCurrentUser
       } from "./style";

const Comment = ({
    currentUser,
    comment,
    name,
    userParent,
    avatar,
    content,
    score,
    replies,
    addComment,
    delet,
    updateComment,
    activeComment,
    setActiveComment,
    
}) => {
        const [likeOrDislike, setLikeorDislike] = useState(null);
        const createdAt = new Date(comment.createdAt).toLocaleDateString();
        const isReplying = activeComment &&
                           activeComment.id === comment.id &&
                           activeComment.type === 'replying';

        const isEditing = activeComment &&
                          activeComment.id === comment.id &&
                          activeComment.type === 'editing';

        const handleScore = (operator) => {
            if(likeOrDislike === operator) return;
            if(likeOrDislike === null && operator === 'minus') return;
            score(operator, comment.id);
            setLikeorDislike(operator);
        }

        return (
            <Container>
                <RootComments>
                    <Left>
                        <Icon onClick={() => handleScore('plus')} src="./images/icon-plus.svg"/>
                        <h4>{comment.score}</h4>
                        <Icon onClick={() => handleScore('minus')}  src="./images/icon-minus.svg"/>
                    </Left>
                    <Right>
                        <Top>
                            <Info>
                                <Avatar src={avatar}/>
                                <Name>{name}</Name>
                                {currentUser === comment.user.userId &&
                                    <span>you</span>
                                }
                                <Time>{createdAt}</Time>
                            </Info>
                            <Actions>
                                {currentUser === comment.user.userId &&
                                    <ActionsCurrentUser>
                                        <Delete onClick={() => delet(comment.id)}>
                                            <img src='./images/icon-delete.svg'/>
                                            <span>Delete</span>
                                        </Delete>
                                        <Edit onClick={() => setActiveComment({id: comment.id, type: 'editing'})}>
                                            <img src='./images/icon-edit.svg'/>
                                            <span>Edit</span>
                                        </Edit>
                                    </ActionsCurrentUser>
                                }
                                {currentUser !== comment.user.userId &&
                                    <Reply onClick={() => setActiveComment({id: comment.id, type: 'replying'})}>
                                        <Arrow/>
                                        <Button>Reply</Button>
                                    </Reply>
                                }
                            </Actions>                           
                        </Top>
                        <Text>
                            {comment.tag && 
                                <Tag>{comment.tag}</Tag>
                            }
                            <p>{content}</p>
                        </Text>
                    </Right>
                    <Bottom>
                        <BottomLeft>
                            <Icon onClick={() => handleScore('plus')} src="./images/icon-plus.svg"/>
                            <h4>{comment.score}</h4>
                            <Icon onClick={() => handleScore('minus')}  src="./images/icon-minus.svg"/>
                        </BottomLeft>

                        {currentUser === comment.user.userId &&
                            <BottomActions>
                                <ActionsCurrentUserBottom>
                                    <Delete onClick={() => delet(comment.id)}>
                                        <img src='./images/icon-delete.svg'/>
                                        <span>Delete</span>
                                    </Delete>
                                    <Edit onClick={() => setActiveComment({id: comment.id, type: 'editing'})}>
                                        <img src='./images/icon-edit.svg'/>
                                        <span>Edit</span>
                                    </Edit>
                                </ActionsCurrentUserBottom>
                            </BottomActions>
                        }

                        {currentUser !== comment.user.userId &&
                            <BottomReply onClick={() => setActiveComment({id: comment.id, type: 'replying'})}>
                                <Arrow/>
                                <Button>Reply</Button>
                            </BottomReply>
                        }
                        
                    </Bottom>
                </RootComments>

                {isReplying &&
                    <Add
                        handleSubmit={(text) => addComment(text, userParent)}
                        label='Reply'
                    />
                }

                {isEditing && 
                    <Add
                        handleSubmit={(text) => updateComment(text, comment.id)}
                        initialText={comment.content}
                        label='Update'
                    />
                }

                {replies.length !== 0 &&
                    <ReplyComments>
                        {replies.map((reply) => (
                            <Comment
                                key={reply.id}
                                currentUser={currentUser}
                                comment={reply}
                                name={reply.user.username}
                                userParent={reply.replyingTo}
                                created={reply.createdAt}
                                avatar={reply.user.image.png}
                                content={reply.content}
                                score={score}
                                replies={[]}
                                addComment={addComment}
                                delet={delet}
                                updateComment={updateComment}
                                activeComment={activeComment}
                                setActiveComment={setActiveComment}
                        />
                        ))}
                    </ReplyComments>
                }
            </Container>

        );
};

export default Comment;
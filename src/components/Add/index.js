import { useState } from 'react';
import { Container, Avatar, Form, Input, Button } from './style';

const Add = ({
    handleSubmit,
    initialText = '',
    label
}) => {
    const [text, setText] = useState(initialText);

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(text);
        setText('')
    };

    return(
        <Container>
            <Avatar/>
            <Form onSubmit={(e) => onSubmit(e)}>
                <Input value={text} onChange={(e) => setText(e.target.value)} placeholder='Add a comment...'/>
                <Button>{label}</Button>
            </Form>
            
        </Container>
    );
};

export default Add;
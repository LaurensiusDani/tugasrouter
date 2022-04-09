import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    DivContainer,
    DivBox,
} from '../styles/user2';

const User: FC = () => {
    const history = useHistory(); 
    const [counter, setIsCounter] = useState<number>(0);

    useEffect(() => {
        console.log("counter: ", counter);
        return () => {
            console.log("unmounting !")
        }
    }, [counter]); 

    return (
        <DivContainer>
            <DivBox>
                <button type="button" onClick={() => setIsCounter(counter + 1)}>click me</button>
            </DivBox>
            <DivBox>
                <button type="button" onClick={() => history.push('/')}>move to home</button>
            </DivBox>
            <DivBox>3</DivBox>
            <DivBox>4</DivBox>
        </DivContainer>
    )
}

export default User;
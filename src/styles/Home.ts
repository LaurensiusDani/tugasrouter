import styled from 'styled-components';

interface IHomeButtonInfo {
    isEven: boolean;
}

export const HomeButtonInfo = styled.button<IHomeButtonInfo>`
    padding: 15 px;
    font-size: 16 px;
    width: auto;
    border: 1px solid transparent;
    border-radius: 8px;
    margin: auto;
    display: block:
    background-color: aquamarine; ${(p) =>p.isEven ? 'aquamarine' : 'grey' };
    color: black;
    text-decoration: none;
    transition : transform 0.25s;
    cursor: pointer;

    ${(p) => p.isEven ? null : 'font-size: 16px;'}
    background-color: ${(p) => p.isEven ? 'aquamarine' : 'grey' };

    &:hover {
        transform: scale(1.25, 1.25);
    }
`

export const Container = styled.div`
    display: flex;
    max-width: 1080px;
    margin-right: 5vw;
    margin-left: 5vw
`

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
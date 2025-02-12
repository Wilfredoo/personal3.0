import React from 'react';
import styled from 'styled-components';

const scriptsList = [
    { title: "Anoche", link: "https://unmarred-guanaco-c5d.notion.site/Anoche-Am-Abend-Davor-1618bbbaaabf803bad04da84f9c20f90?pvs=4" },
    { title: "The Last Day in the Life of the Man Who Died", link: "https://mega.nz/file/9C0RRLRJ#mNxlDbNfm_ndiHJVGkTDbkdbO9bAjgGg_0n9aF2DMSU" },
    { title: "The Invasion", link: "https://mega.nz/file/EG8VzT4I#rRGd7QXUQkZoPWQLLTZqAv8BnZm2RQyY9LoYkPJ2Jig"},
    { title: "Man's Perspective", link: "https://unmarred-guanaco-c5d.notion.site/Script-3-1-16a8bbbaaabf80c99b15e7ac04e56e44?pvs=4" }
];

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    background-color: #FDF4F5;
        font-family: 'Special Elite', cursive;

        @import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');

`;

const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
`;

const ScriptList = styled.ul`
    list-style: none;
    padding: 0;
`;

const ScriptItem = styled.li`
    margin: 30px 0;
`;

const ScriptLink = styled.a`
    font-size: 1.2rem;
    color: black;
    margin-bottom: 2rem;
    text-decoration: none;
    transition: color 0.3s ease;
        font-family: 'Special Elite';

    &:hover {
        color: black;
    }
`;

const Scripts = () => {
    return (
        <Container>
            <ScriptList>
                {scriptsList.map((script, index) => (
                    <ScriptItem key={index}>
                        <ScriptLink href={script.link} target="_blank" rel="noopener noreferrer">
                            {script.title}
                        </ScriptLink>
                    </ScriptItem>
                ))}
            </ScriptList>
        </Container>
    );
};

export default Scripts;

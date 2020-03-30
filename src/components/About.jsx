import React from 'react';
import ChatBot from 'react-simple-chatbot/dist/react-simple-chatbot';
import Grid from '@material-ui/core/Grid';
import Header from './header'


export default function About() {

    return (
        <>
            <Header />
            <p></p>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <ChatBot headerTitle="A.Rajab Bot"
                    steps={[
                        {
                            id: '1',
                            message: 'You are in the right place, this is my about page :)',
                            trigger: '2',
                        },
                        {
                            id: '2',
                            options: [
                                { value: 1, label: 'Who are you?', trigger: 'whoAmI' },
                                { value: 2, label: 'What do you do?', trigger: 'work' },
                                { value: 3, label: 'What is this?', trigger: 'portfolio' },
                                { value: 4, label: 'stop it!', trigger: 'stop' },

                            ],
                        },
                        {
                            id: 'stop',
                            message: 'Thank you for checking me up! Bye',
                            end: true
                        },
                        {
                            id: 'whoAmI',
                            message: 'I am a computer engineering student, based in Istanbul, like to create simple cool things',
                            trigger: '2',
                        },
                        {
                            id: 'work',
                            message: 'I have done few projects that you can check them from the projects tab beside that you can hire me if you liked any of them!',
                            trigger: '2'
                        },

                        {
                            id: 'portfolio',
                            message: 'This is a simple bot just to show an about page about me, why i decided to use a bot? cause who does not like to interact with other people? yeah this is not a machine its me :P',
                            trigger: '2'
                        },
                    ]}
                /> </Grid></>
    );
}
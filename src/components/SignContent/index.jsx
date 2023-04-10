import React, { useState } from "react";
import './sign.css';
import { Menu, Form, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { createClient } from "@supabase/supabase-js";


function SignContent() {
    const supabase = createClient('https://fzzbffjgesbywijwlztg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6emJmZmpnZXNieXdpandsenRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExMTg0ODQsImV4cCI6MTk5NjY5NDQ4NH0.CUYU0u1DTvOYm3jYZhKZ690cwOYFEAn66Y9fh7H-NqI');
    const [activeItem, setActiveItem] = React.useState('register');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    async function loginWithGoogle() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
          })
    }

    async function logout() {
        const { error } = await supabase.auth.signOut()
    }

   

    return (

        <Container className="sign-bg">

            <Menu widths="2">
                <Menu.Item
                    active={activeItem === 'register'}
                    onClick={() => setActiveItem('register')}
                >
                    Sign Up

                </Menu.Item>
                <Menu.Item
                    active={activeItem === 'signin'}
                    onClick={() => setActiveItem('signin')}
                >
                    Sign In

                </Menu.Item>
            </Menu>
            <Form>
                <Form.Input
                    label="信箱"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="請輸入信箱" />

                <Form.Input
                    label="密碼"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="請輸入密碼"
                    type="password"
                />

                <Form.Button>
                    {activeItem === 'register' && '註冊'}
                    {activeItem === 'signin' && '登入'}
                </Form.Button>

                <Form.Button
                    onClick={loginWithGoogle}>
                    {activeItem === 'register' && 'GOOGLE註冊'}

                </Form.Button>

                 

            </Form>


        </ Container >

    );
}

export default SignContent;
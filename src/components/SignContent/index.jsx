import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import GoogleLogin from 'react-google-login';
import styles from './sign.module.css';
import FacebookLogin from "react-facebook-login";

const supabaseUrl = 'https://fzzbffjgesbywijwlztg.supabase.coL'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6emJmZmpnZXNieXdpandsenRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExMTg0ODQsImV4cCI6MTk5NjY5NDQ4NH0.CUYU0u1DTvOYm3jYZhKZ690cwOYFEAn66Y9fh7H-NqI'

const supabase = createClient(supabaseUrl, supabaseAnonKey)
const auth = supabase.auth

function SignContent() {
    const [user, setUser] = useState(null)

    const handleGoogleLogin = async (googleData) => {
        const { id_token } = googleData.tokenObj
        const { user, error } = await auth.signIn({ provider: 'google', idToken: id_token })
        if (error) {
            console.log(error)
        } else {
            setUser(user)
        }
    };

    const handleFacebookLogin = async (response) => {
        const { user, session, error } = await supabase.auth.signIn({
            provider: "facebook",
            access_token: response.accessToken,
        });

        if (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.sscontainer}>
            {user ? (
                <div>
                    <p>Welcome, {user.email}!</p>
                    <button onClick={() => auth.signOut()}>Log out</button>
                </div>
            ) : (
                <div className={styles.loginbtn}>

                    <h1>SIGN / UP</h1>
                    <p>僅提供第三方登入，請點選以下按鈕進行登入或註冊</p>

                    <GoogleLogin
                        className={styles.googlebtn}
                        clientId="385222933114-q7stf2500ss3l833uj7p1d0al33ks9tp.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={handleGoogleLogin}
                        onFailure={(err) => console.log(err)}
                        cookiePolicy={"single_host_origin"}
                    />

                    <FacebookLogin
                        className={styles.facebookbtn}
                        appId="3442618096011898"
                        fields="name,email,picture"
                        callback={handleFacebookLogin}
                        textButton="Login with Facebook"
                    />

                </div>
            )}
        </div>
    )
}

export default SignContent

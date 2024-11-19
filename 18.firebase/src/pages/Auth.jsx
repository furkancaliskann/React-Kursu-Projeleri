import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from 'react-toastify';
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();

function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginWithGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, provider)
            // const credential = GoogleAuthProvider.credentialFromResult(response);
            // const token = credential.accessToken;
            const user = response.user;
            if (user) {
                navigate("/");
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    const login = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            const user = response.user;
            if (user) {
                navigate("/");
            }
        } catch (error) {
            toast.error("Giriş yapılamadı : " + error.message);
        }
    }

    const register = async () => {
        try {
            //const auth = getAuth();
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const user = response.user;
            if (user) {
                toast.success("Kullanıcı oluşturuldu");
                setEmail('');
                setPassword('');
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className='auth'>
            <h3 className='auth-header'>Giriş Yap / Kayıt Ol</h3>
            <div className='input-div'>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email adres' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Şifre' />
            </div>
            <div>
                <button onClick={loginWithGoogle} className='google-button' > <FaGoogle style={{ marginTop: '2px' }} />Google ile giriş yap</button>
                <button onClick={login} className='login-button' >Giriş yap</button>
                <button onClick={register} className='register-button' >Kayıt ol</button>
            </div>
        </div>
    )
}

export default Auth
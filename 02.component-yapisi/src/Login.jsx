import React from 'react'

export const users = [
    {
        username: "enes",
        password: "1"
    },
    {
        username: "aysenur",
        password: "2"
    }
]

function Login() {
    //Fragment
    return (
        <div>
            <div>
                <p>Kullanıcı Adınız</p>
                <input type='text' />
            </div>

            <div>
                <p>Şifreniz</p>
                <input type='text' />
            </div>

            <button>Giriş Yap</button>
        </div>
    )
}

export default Login
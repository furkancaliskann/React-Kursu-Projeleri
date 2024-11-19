import React from 'react'
import TextField from '@mui/material/TextField';

function MUITextField() {
    return (
        <div>
            <div>
                <TextField label="İsim" variant='outlined' />
                <TextField label="İsim" variant='filled' />
                <TextField label="İsim" variant='standard' />
            </div>

            <div style={{ marginTop: '30px' }}>
                <TextField label="İsim" variant='outlined' color='warning' />
            </div>

            <div style={{ marginTop: '30px' }}>
                <TextField label="İsim" variant='outlined' color='warning' helperText='İsminizi Giriniz' />

                <TextField label="Şifre" variant='outlined' color='warning' helperText='Şifrenizi kimseye göstermeyin' />
            </div>
        </div>
    )
}

export default MUITextField
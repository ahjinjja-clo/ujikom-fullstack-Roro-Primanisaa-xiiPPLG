import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PasswordInput, TextInput } from '@mantine/core';

const Login = () => {
    const navigate = useNavigate(); // Menambahkan useNavigate
    const data = [{
        "id": 1,
        "name": "Dokyeom",
        "password": "carat" 
    }];
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault(); 
        if (username === data[0].name && password === data[0].password) {
            alert("Login berhasil!");
            navigate('/dashboard'); // Arahkan ke halaman setelah login
        } else {
            alert("Invalid username or password");
        }
    };
    
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={login}> {/* Tambahkan onSubmit */}
            <label>Username:</label>
            <TextInput 
                value={username} 
                onChange={(e) => setUsername(e.currentTarget.value)} 
                placeholder="Masukkan username anda" 
            />
            <br/>
            <label>Password:</label>
            <PasswordInput 
                value={password} 
                onChange={(e) => setPassword(e.currentTarget.value)} 
                placeholder="Masukkan password anda"  
            />
            <br/>
            <input type="submit" value="Login" />
        </form>
    </div>
  );
}

export default Login;

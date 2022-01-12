import React, { useState } from 'react';
import '../styles/Header.css'
import logo from '../styles/dlLogo.png';


const Header = ({setCategoriesp}) => {
    
    const [value, setValue] = useState('');

    const changeValue = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value.trim().length > 2 ){
            setCategoriesp(cat => [value, ...cat])
            setValue('');
        }
    }

    return (
        <div>
            <div className="logo">
                <img src={logo} alt="a" height="100px"/>
            </div>
            
            <form onSubmit={handleSubmit} className="header">
                <input value={value} onChange={changeValue} placeholder="Buscar gif" type="text"/>
                <button type="submit" >Search</button>
            </form>
        </div>
        
    )
}

export default Header;
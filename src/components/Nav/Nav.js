import React, { useState } from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {fetchSearch, clearSearched} from '../../Redux/actions/gamesAction';


const Nav = () => {

    const [searched, setSearched] = useState("");


    const dispatch = useDispatch();

    const handleChange = e=>{
        setSearched(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        dispatch(fetchSearch(searched));

    }

    const clearSearchedByIcon = ()=>{
       dispatch(clearSearched());

       setSearched("");
       
    }

    return (
        <StyledNav>
                <Logo onClick={clearSearchedByIcon}>
                    <img 
                    src="https://vignette.wikia.nocookie.net/sonic/images/9/96/Mania_Icon.JPG/revision/latest?cb=20171018101321" alt="aaa"
                    style={{width:"50px"}}
                    />
                    <h1>Game Mania</h1>
                </Logo>

                <form className="search" onSubmit={handleSubmit}>
                    <input value={searched}  onChange={handleChange} type="text"/>
                    <button type="submit">Search</button>
                </form>
        </StyledNav>
    )
}

const StyledNav = styled(motion.div)`
    padding: 3rem 5rem;
    text-align: center;
    input{
        width: 30%;
        font-size: 1rem;
        margin-top: 1rem;
        border: 1px solid lightgray;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.3);
        padding:14px;
        outline:none;
        font-weight: bold;
        align-items: center;
        
    }
    button{
        font-size: 1.5rem;
        border: none;
        padding: 1rem 2rem;
        cursor: pointer;
        margin-top: 10px;
        background: #ff7676;
        color: white;
        outline:none;
        margin-left: 5px;
    }
`
const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    cursor: pointer;
    padding: 1rem;
    img{
        height: 2rem;
        width: 2rem;
        object-fit: contain;
        border-radius: 50%;
        }
`

export default Nav

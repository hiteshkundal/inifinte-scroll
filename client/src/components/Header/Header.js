import React, { useState, useEffect } from 'react';
import Logo from '../../assets/logo.png';
import LogoWhite from '../../assets/logo-white.png'
import Toggle from '../Toggle/Toggle';

import style from './Header.module.scss';

const Header = () => {
    const [changeHeight, setChangeHeight] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        console.log(theme);
        if (theme) {
            document.documentElement.setAttribute('data-theme', theme);
            if (theme === 'dark') {
                document.getElementById("checkbox").checked = true;
                setIsDarkMode(true);
            }
        }
    }, [])

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.getElementById("checkbox").checked = true;
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            document.getElementById("checkbox").checked = false;
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 73) {
            setChangeHeight(true);
        } else if (window.scrollY === 0) {
            setChangeHeight(false)
        }

    })

    const toggleHandle = () => {
        setIsDarkMode((prevMode) => !prevMode);
    }

    const extractClassName = changeHeight ? `${style.Header} ${style.HeaderShrink}` : `${style.Header}`;

    return (
        <header className={extractClassName}>
            <div className={style.InnerContainer}>
                <div className={style.Logo}>
                    <img src={isDarkMode ? LogoWhite : Logo} alt="logo" />
                    <div></div>
                    <h2>Scroll</h2>
                </div>
                <Toggle toggleHandle={toggleHandle} />
            </div>

        </header>
    )
}

export default Header;
import React, { useState } from 'react';
import Logo from '../../assets/logo.png';

import style from './Header.module.scss';

const Header = () => {
    const [changeHeight, setChangeHeight] = useState(false);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 73) {
            setChangeHeight(true);
        } else if (window.scrollY === 0) {
            setChangeHeight(false)
        }

    })
    const extractClassName = changeHeight ? `${style.Header} ${style.HeaderShrink}` : `${style.Header}`;

    return (
        <header className={extractClassName}>
            <div className={style.Logo}>
                <img src={Logo} alt="logo" />
                <div></div>
                <h2>Scroll</h2>
            </div>
        </header>
    )
}

export default Header;
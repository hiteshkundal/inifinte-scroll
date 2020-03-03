import React from 'react';

import style from './Toggle.module.scss';


const Toggle = (props) => {
    const {toggleHandle}  = props;

    return (
        <label className={style.ThemeSwitch} htmlFor="checkbox">
            <input type="checkbox" id="checkbox" onClick={toggleHandle} />
            <div className={style.Slider}></div>
        </label>
    )
}

export default Toggle;
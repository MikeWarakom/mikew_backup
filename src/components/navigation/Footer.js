import React from 'react';

const Footer = ({...otherProps}) => {
    return (
        <div className='gap-x-2 flex'>
            <a href="https://github.com/MikeWarakom">
                <img src="img/icons/gh.png" width="26" alt="gh" />
            </a>
            <a href="https://pl.linkedin.com/in/micha%C5%82-warakomski-72156653">
                <img src="img/icons/li.png" width="26" alt="li" />
            </a>
            <a href="https://www.facebook.com/warakomski.michal">
                <img src="img/icons/fb.png" width="26" alt="fb" />
            </a>
            <a href="https://www.instagram.com/michal.war/">
                <img src="img/icons/in.png" width="26" alt="in" />
            </a>
        </div>
    )
}

export default Footer;
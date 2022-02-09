import React from 'react';

const Footer = ({...otherProps}) => {
    return (
        <div className='gap-x-2 flex'>
                <div>
                    <a href="https://pl.linkedin.com/in/micha%C5%82-warakomski-72156653">
                        <img src="img/icons/li.svg" alt="li" />
                    </a>
                </div> 
                <div>
                <a href="https://www.facebook.com/warakomski.michal">
                        <img src="img/icons/fb.svg" alt="fb" />
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/michal.war/">
                        <img src="img/icons/in.svg" alt="in" />
                    </a>
                </div>
        </div>
    )
}

export default Footer;
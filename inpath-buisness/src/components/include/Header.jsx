import React from 'react';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className='px-40 p-6'>
      <div className=''>
        <img src={logo} alt="" className='' style={{ width: '8%' }} />
        <div className=''>
            <a href="">What we do</a>
            <a href="">How we do it</a>
            <a href="">Resources</a>
            <a href="">Plans</a>
        </div>
      </div>
    </div>
  );
};

export default Header;


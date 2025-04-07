import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-success text-white">
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mt-3'>&copy; {new Date().getFullYear()}. All rights reserved.</p>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;

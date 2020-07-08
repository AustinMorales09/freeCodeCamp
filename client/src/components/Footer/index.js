import React from 'react';
import PropTypes from 'prop-types';

import Link from '../helpers/Link';
import FooterCol from './FooterCol';

import { footerLinks } from './footerLinks';
import './footer.css';

const propTypes = {
  children: PropTypes.any
};

const ColHeader = ({ children, ...other }) => (
  <div className='col-header' {...other}>
    {children}
  </div>
);
ColHeader.propTypes = propTypes;

function Footer() {
  return (
    <footer className='site-footer'>
      <div className='footer-container'>
        <div className='footer-row'>
          <div className='footer-desc-col'></div>
          {/* {footerLinks.map(({ title, links }, index) => (
            <FooterCol
              key={`footer-col-${index}`}
              links={links}
              title={title}
            />
          ))} */}
        </div>
      </div>
    </footer>
  );
}

Footer.displayName = 'Footer';
export default Footer;

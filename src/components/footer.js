import React from 'react'
import Link from 'gatsby-link'

import { scale } from '../utils/typography'

const date = new Date()
const year = date.getFullYear()

class Menu extends React.Component {
  render() {
    return (
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-10 mx-auto'>
              <ul className='list-inline text-center'>
                <li className='list-inline-item'>
                  <a
                    href='mailto:sajjad@withpulp.com'
                    target='blank'
                    style={{
                      boxShadow: 'none',
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    <span className='fa-stack fa-lg'>
                      <i className='fas fa-circle fa-stack-2x'></i>
                      <i className='fas fa-envelope fa-stack-1x fa-inverse'></i>
                    </span>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a
                    href='https://www.instagram.com/metaterran/'
                    target='blank'
                    style={{
                      boxShadow: 'none',
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    <span className='fa-stack fa-lg'>
                      <i className='fas fa-circle fa-stack-2x'></i>
                      <i className='fab fa-instagram fa-stack-1x fa-inverse'></i>
                    </span>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a
                    href='https://github.com/sajjadhossain'
                    target='blank'
                    style={{
                      boxShadow: 'none',
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    <span className='fa-stack fa-lg'>
                      <i className='fas fa-circle fa-stack-2x'></i>
                      <i className='fab fa-github fa-stack-1x fa-inverse'></i>
                    </span>
                  </a>
                </li>
              </ul>
              <p
                className='copyright text-muted'
              >
                Built with ♥ in NYC. © {year}, <a href='http://withpulp.com' target='blank'>WithPulp</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Menu

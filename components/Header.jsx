import theme from '../styles/theme'
import {block} from 'bem-cn';
import Link from 'next/link'

const b = block('header');

const Header = () => (
  <div className={b()}>
    <nav>
      <ul>
        <li className={'header_signIn'}>
          <Link href="/sign-in">
            <a>Sign In</a>
          </Link>
        </li>
      </ul>
    </nav>
    <style jsx>{`
      nav {
        position: fixed;
        top:0;
        width: 100vw;
      }
      ul {
        list-style: none;
        padding: 3rem;
        margin: 0;
      }
      .header_signIn {
        background: ${theme.colors.link};
        display: inline-block;
        padding: .3rem;
        color:white;
        text-decoration: none;
        border-radius: 12px;
      }
    `}</style>
  </div>

);

export default Header;

import Link from 'next/link';
import Image from 'next/image';

import { Switch } from 'antd';
import cocktailLogo from '../../asstes/logo.png';
import './Navbar.scss';

const Navbar = ({ themeMode, onThemeChange }) => {
  const onChange = (checked) => {
    const newMode = checked ? 'dark' : 'light';
    onThemeChange(newMode);
  };

  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary ${themeMode}`}>
      <div className={`container-fluid ${themeMode}`}>
        <Link className='navbar-brand' href='/'>
          <Image src={cocktailLogo} alt='logo' className={themeMode} />
        </Link>
        <Switch
          className={themeMode}
          onChange={onChange}
          checked={themeMode === 'dark'}
        />
      </div>
    </nav>
  );
};

export default Navbar;

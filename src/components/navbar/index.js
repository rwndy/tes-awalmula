import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

const Navbar = () => {
  const router = useRouter()

  const menuItems = [
    {
      active: true,
      url: "/",
      icon: '/assets/icons/icon_home_black.svg',
      iconActive: '/assets/icons/icon_home_green.svg'
    },

    {
      active: false, 
      url: "#shopping",
      icon: '/assets/icons/icon_shopping_black.svg',
      iconActive: '/assets/icons/icon_shopping_green.svg'
    },
    {
      active: false,
      url: "#account",
      icon: '/assets/icons/icon_account.svg',
      iconActive: '/assets/icons/icon_account_green.svg'
    }
  ]

  return (
    <header className="bottom-navbar-wrapper">
      <nav className="bottom-navbar">
        {
            menuItems.map((menu, index) => (
              <Link key={index} href={menu.url}>
                <a className={ router.asPath === menu.url ? 'active' : '' }>
                  <img 
                    src=
                    { router.asPath === menu.url 
                      ? menu.iconActive 
                      : menu.icon 
                    } 
                    alt="icon" 
                  />
                </a>
              </Link>
            ))
          }
      </nav>
    </header>  
  );
};

export default Navbar;

'use client';

import { Dialog } from '@headlessui/react';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

const navigation = [
  { name: 'Recent Works', href: 'https://gallery.kevinsutandi.com/' },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Check if the page is scrolled beyond the top
        const atTop = window.scrollY < 50;

        setIsTop(atTop);

        // Hide navbar on scroll down, show on scroll up
        if (window.scrollY > lastScrollY) {
          // if scroll down
          setVisible(false);
        } else {
          // if scroll up
          setVisible(true);
        }

        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 p-3 duration-300 ${
        !visible && '-translate-y-full'
      } ${!isTop && 'bg-black'} duration-300 transition-all`}
    >
      <nav
        className='flex items-center justify-between p-6 md:px-8 '
        aria-label='Global'
      >
        <div className='flex md:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='text-white tracking-wider font-light text-2xl'>
              Kevin Sutandi
            </span>
          </a>
        </div>
        <div className='flex md:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white transition-transform duration-300'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars2Icon
              className={`h-6 w-6 ${mobileMenuOpen ? 'rotate-45' : 'rotate-0'}`}
              aria-hidden='true'
            />
          </button>
        </div>
        <div className='hidden md:flex md:gap-x-12'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-md font-light tracking-widest text-white'
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog
        as='div'
        className='md:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-50' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 '>
          <div className='flex items-center justify-between p-3'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='tracking-wider font-light text-black text-2xl'>
                Kevin Sutandi
              </span>
              <span className='sr-only'>Kevin Sutandi</span>
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon
                className='h-6 w-6 transition-all duration-300'
                aria-hidden='true'
              />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

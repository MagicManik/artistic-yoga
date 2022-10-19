import React, { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { FaTimes, } from "react-icons/fa";
import brandLogo from '../../../assets/images/brand-logo.png';
import userProfileImg from '../../../assets/icon/user-profile-img.png';
import './Navbar.css';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    return (
        <Disclosure as="nav" className={'bg-[#FFF3E9] z-50 sticky top-0 navbar-section'}>
            {({ open }) => (

                <div>
                    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div class="relative flex h-16 items-center justify-between">
                            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <FaTimes className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                    )}
                                </Disclosure.Button>

                                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div class="flex flex-shrink-0 items-center">
                                    <img className='w-full' src={brandLogo} alt="Your Company" />
                                </div>
                            </div>
                            <div class="hidden sm:ml-6 sm:block">
                                <div class="flex space-x-4">
                                    <a href="/" class="text-gray-900 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" aria-current="page">About Us</a>

                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-700">
                                                Our Programs
                                            </Menu.Button>
                                        </div>
                                    </Menu>
                                </div>
                            </div>
                            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <Menu as="div" className="relative">
                                    <div>
                                        <Menu.Button className="inline-flex w-full justify-center rounded-md pl-1 py-1 text-sm font-medium text-gray-700 focus:outline-none">
                                            <img className=' w-10' src={userProfileImg} alt="" />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-[#FCF7F3] rounded-[10px] ring-1 ring-black ring-opacity-5 focus:outline-none profile-dropdown-container">
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="/"
                                                            className={classNames(
                                                                active ? 'bg-[#FFF3E9] text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Dashboard
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="/"
                                                            className={classNames(
                                                                active ? 'bg-[#FFF3E9] text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Bookmarks
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="/"
                                                            className={classNames(
                                                                active ? 'bg-[#FFF3E9] text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            My Account
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <form method="POST" action="/">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                type="submit"
                                                                className={classNames(
                                                                    active ? 'bg-[#FFF3E9] text-gray-900' : 'text-gray-700',
                                                                    'block w-full px-4 py-2 text-left text-sm'
                                                                )}
                                                            >
                                                                Log out
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                </form>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div class="sm:hidden myx" id="mobile-menu">
                            <div class="space-y-1 px-2 pt-2 pb-3">
                                <a href="/" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

                                <a href="/" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

                                <a href="/" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

                                <a href="/" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </div>
            )
            }
        </Disclosure >
    );
};

export default Navbar;
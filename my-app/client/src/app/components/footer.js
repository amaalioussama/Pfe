import Image from 'next/image';
import Logo from '../../../public/logo.png';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-t from-black  via-black to-black">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="">
              <Image src={Logo} alt="Logo" className="w-40 h-30" />
              <p className="text-gray-500 dark:text-gray-400 font-medium mt-3">
                We’re just announced new feature <br /> that would help you increase your<br /> experience of using AI!
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">SOLUTIONS</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">content</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">languages</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">FIND US</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">GitHub</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">LinkedIn</a>
                  </li>
                  <br />
                  <li>
                    <a href="#" className="hover:underline">Facebook</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="mailto:fatimazahraelhadrachi@gmail.com" className="hover:underline">fatimazahraelhadrachi@gmail.com</a>
                  </li>
                  <li>
                    <a href="mailto:amaaliousama771@gmail.com" className="hover:underline">amaaliousama771@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 unicat™. All Rights Reserved.</span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path clipRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 9h-4v4h-2v-4H7V9h4V5h2v4h4v2Z" />
                </svg>
                <span className="sr-only">Twitter profile</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 2C5.03 2 1 6.03 1 11s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm4.95 15.36c-.52.13-1.07.23-1.65.27-1.88 0-3.58-.95-4.58-2.39-.19-.29-.37-.6-.53-.92s-.3-.64-.4-1c-.11-.39-.2-.79-.2-1.2 0-1.06.27-2.06.74-2.93-.09.02-.18.04-.27.06-.65-.55-1.47-.93-2.37-.93-1.8 0-3.26 1.46-3.26 3.26 0 .26.03.52.08.77-.88-.04-1.71-.27-2.43-.67s-1.39-.95-1.95-1.65s-.92-1.52-1.11-2.42c-.27.48-.42 1.03-.42 1.63 0 1.12.57 2.11 1.44 2.69-.53-.02-1.03-.16-1.47-.41v.04c0 1.57 1.12 2.88 2.61 3.17-.27.07-.55.11-.84.11-.2 0-.41-.02-.61-.05.41 1.29 1.61 2.22 3.03 2.24-1.11.87-2.51 1.39-4.04 1.39-.26 0-.52-.02-.78-.05 1.44.92 3.15 1.46 4.99 1.46 6.09 0 9.41-5.04 9.41-9.41l-.02-.43c.65-.47 1.22-1.01 1.67-1.61Z" />
                </svg>
                <span className="sr-only">LinkedIn profile</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

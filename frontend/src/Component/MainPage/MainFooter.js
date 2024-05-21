import React from 'react'
import './MainFooter.css'


function MainFooter() {
  return (
   <div>
  <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
  <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
  <footer className="relative bg-blueGray-200 pt-8 pb-6">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap text-left lg:text-left">
        <div className="w-full lg:w-6/12 px-4">
          <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
          <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
            Find us on any of these platforms, we respond 1-2 business days.
          </h5>
          <div className="mt-6 lg:mb-0 mb-6">
            <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <i className="fab fa-twitter" /></button><button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <i className="fab fa-facebook-square" /></button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <i className="fab fa-dribbble" /></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <i className="fab fa-github" />
            </button>
          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="flex flex-wrap items-top mb-6">
            <div className="w-full lg:w-4/12 px-4 ml-auto">
              <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
              <ul className="list-unstyled">
                <li>
                  <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#About Us" alt = " ">About Us</a>
                </li>
                <li>
                  <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#Blog" alt = " ">Blog</a>
                </li>
                <li>
                  <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#Github" alt = " ">Github</a>
                </li>
                <li>
                  <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#Free Content" alt = " ">Free Content</a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
              <ul className="list-unstyled">
                <li>
                  <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#MLT license" alt = " ">MIT License</a>
                </li>
                <li>
                  <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#Conditions" alt = " ">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#Privacy Policy" alt = " ">Privacy Policy</a>
                </li>
                <li>
                  <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#Contact Us" alt = " ">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-blueGray-300" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-blueGray-500 font-semibold py-1">
           <div className="text-blueGray-500 hover:text-gray-800" target="_blank" rel="noopener noreferrer"> Copyright © 2024 all rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

  )
}

export default MainFooter
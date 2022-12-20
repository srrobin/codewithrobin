
import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';

import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import "../style/prism-vsc-dark-plus.css";
import "../style/editor.css";

const codeSnippet = 
`
import React from "react";
import Hbg from "../images/webb.png";

const Hero = () => {
  return (
    <div className=" mt-20  bg-gradient-to-t from-slate-900 to-slate-900 min-h-[75vh] w-full bg-center relative">
      <img
        src={Hbg}
        alt=""
        className="absolute h-full w-full object-cover  mix-blend-overlay"
      />
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white dark:text-white">
            Payments tool for software companies
          </h1>
          <p className="max-w-2xl mb-6 font-light text-whitelg:mb-8 md:text-lg lg:text-xl text-white dark:text-gray-400">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>

          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex z-50">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;


  `
  ;


const ShowCode = () => {
    const [code, setCode] = useState(codeSnippet);
    return (
        <div className="max-w-[1240px] mx-auto my-16 px-4 text-center">
         <div className="window">
        <div className="title-bar">
          <div className="title-buttons">
            <div className="title-button"></div>
            <div className="title-button"></div>
            <div className="title-button"></div>
          </div>
        </div>
        <div className="editor_wrap">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) => highlight(code, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
        </div>
      </div>
        </div>
    );
};

export default ShowCode;
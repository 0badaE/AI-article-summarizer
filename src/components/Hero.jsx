import React from 'react'
import logo  from "../assets/logo.png";
import { FiGithub } from "react-icons/fi";


function Hero(){
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="site_logo" className="w-28 object-contain"/>

        <button
          type="button"
          onClick={()=> window.open("https://github.com/0badaE/AI-article-summarizer.git")}
          className= "black_btn"
        >
          <FiGithub size={20}/>
        </button>
      </nav>

      <h1 className="head_text">
          Summarize Articles with <br className="max-md:hidden"/><span className="blue_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
          Simplify your reading with <span className="blue_gradient text-md">Seela</span>, an article summarizer powered by GPT-4 that transforms lengthy articles into clear and concise summaries. 
      </h2>
    </header>
  )
}

export default Hero
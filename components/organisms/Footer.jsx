import React from 'react'

const Footer = () => {
  return (
    
    <footer className="bg-white dark:bg-gray-800">
        <div className="container px-6 py-8 mx-auto">
            <div className="text-center">
            <a href="#" className="text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Fernando</a>

            <p className="max-w-md mx-auto mt-2 text-gray-500 dark:text-gray-400">Quando é bom não tem melhor. - Erick Jaquin</p>

            </div>

            <hr className="my-10 dark:border-gray-500" />

            <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-400">© Copyright 2021. All Rights Reserved.</p>

            <div className="flex mt-3 -mx-2 sm:mt-0">
                <a href="#home" className="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Home </a>

                <a href="#about" className="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Sobre Mim </a>

                <a href="#projects" className="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Meus Projetos </a>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer

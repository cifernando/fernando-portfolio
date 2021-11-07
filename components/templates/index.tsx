import tw from "tailwind-styled-components"

export const ContainerPage = tw.div`
bg-white dark:bg-gray-800`

export const Header = tw.header`
bg-white dark:bg-gray-800`

export const Main = tw.main`
container flex flex-col px-6
py-4 mx-auto space-y-6 lg:h-128
lg:py-16 lg:flex-row lg:items-center
lg:space-x-6`

export const NavContainer = tw.div`
container p-6 mx-auto`

export const NavContent = tw.div`
flex items-center justify-center mt-6
text-gray-600 capitalize dark:text-gray-300`

export const NavTitle = tw.h1`
block text-2xl font-bold text-center
text-gray-800 dark:text-white
lg:text-3xl`

export const NavLink = tw.a`
border-b-2 border-transparent cursor-pointer
hover:text-gray-800 dark:hover:text-gray-200
hover:border-blue-500 mx-1.5 sm:mx-6`

export const NavLinkActive = tw.a`
text-gray-800 dark:text-gray-200 border-b-2
border-blue-500 mx-1.5 sm:mx-6 cursor-pointer`

export const HomeSection = tw.section`
flex flex-col items-center w-full lg:flex-row lg:w-1/2`

export const HomeContent = tw.div`
flex flex-col gap-4
max-w-lg lg:mx-12 lg:order-2`

export const HomeTitle = tw.h1`
text-3xl font-medium tracking-wide text-gray-800
dark:text-white lg:text-4xl`

export const HomeSubtitle = tw.h2`
text-gray-600 dark:text-gray-300`

export const ImageContainer = tw.section`
flex items-center justify-center w-full h-96 lg:w-1/2`

export const Image = tw.img`
object-cover w-full h-full max-w-2xl rounded-md`
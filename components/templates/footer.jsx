import tw from 'tailwind-styled-components'

export const FooterPage = tw.footer`
bg-white dark:bg-gray-800`
  
export const FooterContainer = tw.div`
container px-6 py-8 mx-auto`

export const FooterContent = tw.div`
text-center`
  
export const FooterTitle = tw.a`
text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300`

export const FooterDescription = tw.p`
max-w-md mx-auto mt-2 text-gray-500 dark:text-gray-400`

export const FooterHr = tw.hr`
my-10 dark:border-gray-500`

export const FooterContainerLinks = tw.div`
flex flex-col items-center sm:flex-row sm:justify-between`

export const FooterContentLinks = tw.div`
flex mt-3 -mx-2 sm:mt-0`

export const FooterLink = tw.a`
mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300`

export const FooterRights = tw.p`
text-sm text-gray-400`
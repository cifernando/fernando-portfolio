import tw from "tailwind-styled-components"

export const AboutContainer = tw.div`
lg:flex h-screen w-screen`
  
export const AboutContent = tw.div`
flex items-center justify-center w-full px-6 py-8 lg:h-128 lg:w-1/2`

export const AboutTitle = tw.h2`
text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl`

export const AboutTitleSpan = tw.span`
text-indigo-600 dark:text-indigo-400`

export const AboutDescription = tw.p`
text-lg text-justify text-gray-700 dark:text-white lg:text-base`

export const AboutButtonContainer = tw.div`
flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row`

export const AboutImageContainer = tw.div`
w-full h-full lg:w-1/2 lg:h-auto`
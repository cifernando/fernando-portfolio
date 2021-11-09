import tw from 'tailwind-styled-components';

export const Section = tw.section`
bg-gray-800 dark:bg-white`

export const SectionContainer = tw.div`
container px-6 py-8 mx-auto`

export const SectionContent = tw.div`
grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3`

export const SectionTitle = tw.h2`
mt-4 text-xl font-semibold text-white dark:text-gray-800`

export const SectionDescription = tw.p`
mt-2 text-justify text-gray-400 dark:text-gray-500`
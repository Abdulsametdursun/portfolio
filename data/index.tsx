export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
]

export const gridItems = [
  {
    id: 1,
    title:
      'I emphasize teamwork with clients, ensuring clear and open communication',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: 'I easily adapt to different time zones for seamless communication',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack better',
    description: `I'm always trying to make`,
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title:
      'A technology enthusiast with a strong passion for software development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Currently building a JS Websites',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Are you interested in starting a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
]

export const projects = [
  {
    id: 1,
    title: 'Blackjack 🃏',
    des: "This is a browser-based implementation of the classic Blackjack card game. The player plays against a dealer, aiming to reach a score of 21 without exceeding it. The game provides options to start a new game, get a card, or hold to compare the player's and dealer's scores.",
    img: '/p1.svg',
    iconLists: ['/javascript.svg', '/html.svg', '/css-3.svg'],
    link: 'https://gleaming-jalebi-d119bc.netlify.app/',
  },
  {
    id: 2,
    title: 'Animated Apple Iphone 3D Website 📱',
    des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.',
    img: '/p4.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    link: 'https://github.com/Abdulsametdursun/iPhone-Website',
  },
  {
    id: 3,
    title: 'ChatApp 💬',
    des: 'ChatApp is a messaging application designed to facilitate easy communication between users. This archive (ChatApp.rar) contains all necessary project files, including source code, dependencies, and other assets required to run the application. Features: Real-time messaging between users, User-friendly interface, Group chat capabilities, Secure communication with end-to-end encryption.',
    img: '/p3.svg',
    iconLists: [
      '/re.svg',
      '/vite.svg',
      '/firebase.svg',
      '/sass.svg',
      '/eslint.svg',
    ],
    link: 'https://leafy-sherbet-967e9c.netlify.app/',
  },
  {
    id: 4,
    title: 'Forkify - Recipe Application 🧾',
    des: 'This is a JavaScript-based Recipe Application that allows users to search for recipes, view detailed information, and bookmark their favorite recipes. The application is built using modern JavaScript features and API calls to retrieve and display recipe data dynamically.',
    img: '/p2.svg',
    iconLists: ['/javascript.svg', '/sass.svg', '/parsel.svg'],
    link: 'https://github.com/Abdulsametdursun/forkify',
  },
]

export const testimonials = [
  {
    quote:
      "Working with Abdulsamet was a seamless experience. His professionalism, responsiveness, and dedication to high-quality work made a significant impact on our project. His enthusiasm for development shines through in every detail. If you're looking to enhance your website and brand, Abdulsamet is the perfect choice.",
    name: 'Daniel Thompson',
    title: 'Developer at Mimcode',
  },
  {
    quote:
      'Abdulsamet was an excellent collaborator. His technical knowledge, combined with his ability to deliver efficient and scalable solutions, was invaluable. His clean coding practices and strong work ethic helped drive our project forward.',
    name: 'Sophia Martinez',
    title: 'Frontend Engineer at Udemig',
  },
  {
    quote:
      'Abdulsamet is a skilled developer who approaches every challenge with a problem-solving mindset. His ability to craft responsive and scalable applications is impressive, making him a key contributor to any development team.',
    name: 'Liam Becker',
    title: 'Software Engineer at Bordo Bilişim',
  },
  {
    quote:
      'I was impressed by Abdulsamet’s keen attention to detail and ability to transform complex requirements into well-structured, functional web applications. His consistency in delivering top-tier work makes him an asset to any project.',
    name: 'Emma Richardson',
    title: 'Lead Developer at Finarr',
  },
  {
    quote:
      'Abdulsamet is passionate about web development and has a sharp problem-solving ability. His commitment to delivering high-quality solutions sets him apart, and he’s always eager to refine and enhance his work.',
    name: 'Oliver Scott',
    title: 'Project Manager at Tasteify',
  },
]

export const workExperience = [
  {
    id: 1,
    title: 'NodeJS - Backend Developer - Mimcode',
    desc: 'Led backend development for an e-commerce platform, optimizing database architecture and reducing maintenance costs.',
    className: 'md:col-span-2',
    thumbnail: '/exp3.svg',
  },
  {
    id: 2,
    title: 'React-Frontend Developer - Udemig',
    desc: 'Built mobile-first web applications using Bootstrap and React, reducing bounce rates and increasing conversion rates.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
  {
    id: 3,
    title: 'Font-End - Test Case Development - Bordo Bilişim',
    desc: 'Managed version control, conducted cross-browser testing, and developed detailed test cases, reducing post-release bugs and ensuring seamless functionality.',
    className: 'md:col-span-2',
    thumbnail: '/exp2.svg',
  },
]

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
  },
  {
    id: 2,
    img: '/twit.svg',
  },
  {
    id: 3,
    img: '/link.svg',
  },
]

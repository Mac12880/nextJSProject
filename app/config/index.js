export const mainMenu = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'About',
        path: '/about',
    },
    {
        title: 'Find Classes',
        path: '/findClasses',
    },
    {
        title: 'College Admission Review',
        id: '1',
        subMenu: [
    {
        title: 'UPCAT',
        path: '/upcat',
    },
    {
        divider: true
    },
    {
        title: 'SAT',
        path: '/sat',
    },
    ]
    },
    {
        title: 'Login',
        path: '/login',
        button: true,
    },
    {
        title: 'Sign up',
        path: '/signup',
        button: true,
    },
]

export const site = {
    title: 'Marc\'s Next.js'
}
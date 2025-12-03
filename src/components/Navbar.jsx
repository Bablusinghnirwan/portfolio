import { AnimeNavBar } from './AnimeNavBar'
import { Home, User, Code, Briefcase, FolderGit2, Mail } from 'lucide-react'

export const Navbar = () => {
    const navItems = [
        { name: 'Home', url: '#hero', icon: Home },
        { name: 'About', url: '#about', icon: User },
        { name: 'Skills', url: '#skills', icon: Code },
        { name: 'Experience', url: '#experience', icon: Briefcase },
        { name: 'Projects', url: '#projects', icon: FolderGit2 },
        { name: 'Contact', url: '#contact', icon: Mail },
    ]

    return (
        <AnimeNavBar items={navItems} defaultActive="Home" />
    )
}

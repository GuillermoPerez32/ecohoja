import { useRemember } from '@inertiajs/react';
import { Moon, Sun } from 'lucide-react';
import { ComponentProps } from 'react';

const ThemeToggle = (props: ComponentProps<'div'>) => {
    const [theme, setTheme] = useRemember('light', 'theme');

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div {...props} onClick={() => toggleTheme()}>
            {theme === 'light' ? <Sun /> : <Moon />}
        </div>
    );
};

export default ThemeToggle;

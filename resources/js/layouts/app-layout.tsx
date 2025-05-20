import Header from '@/components/Header';
import SupportButton from '@/components/support-button';
import { Head } from '@inertiajs/react';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    title?: string;
    children: ReactNode;
}

export default ({ children, title }: AppLayoutProps) => (
    <>
        <Head title={title || 'Ecohoja'} />
        <Header />
        <SupportButton />
        {children}
    </>
);

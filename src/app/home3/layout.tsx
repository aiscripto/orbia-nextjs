
import type { ReactNode } from 'react';
import Header4 from '../Components/Header/Header4';
import Footer3 from '../Components/Footer/Footer3';

interface LayoutProps {
    children: ReactNode;
}

const layout = ({ children }: LayoutProps) => {
    return (
        <div className='main-page-area'>
            <Header4></Header4>
            {children}
            <Footer3></Footer3>
        </div>
    );
};

export default layout;
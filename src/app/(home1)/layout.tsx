import Header2 from '../Components/Header/Header2';
import type { ReactNode } from 'react';
import Footer1 from '../Components/Footer/Footer1';

interface LayoutProps {
    children: ReactNode;
}

const layout = ({ children }: LayoutProps) => {
    return (
        <div className='main-page-area'>
           <Header2></Header2>
            {children}
            <Footer1></Footer1>
        </div>
    );
};

export default layout;
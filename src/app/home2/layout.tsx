import type { ReactNode } from 'react';
import Header3 from '../Components/Header/Header3';
import Footer2 from '../Components/Footer/Footer2';

interface DefaultLayoutProps {
    children: ReactNode;
}

const DefalultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <div className='main-page-area'>
            <Header3></Header3>
            {children}
            <Footer2></Footer2>
        </div>
    );
};

export default DefalultLayout;
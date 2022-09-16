// * react
import React, { PropsWithChildren } from 'react';

// * components
import Header from './Header';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default Layout;

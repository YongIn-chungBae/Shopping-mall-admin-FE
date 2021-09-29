import React, { FC } from 'react';
import Footer from './footer';
import Meta from './meta';
import Nav from './nav';

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

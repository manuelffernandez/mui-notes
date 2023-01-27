import { Header, Footer } from './';

interface BaseLayoutProps {
  children: JSX.Element | Array<JSX.Element> | string;
}

const BaseLayout = (props: BaseLayoutProps): JSX.Element => {
  const { children } = props;
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;

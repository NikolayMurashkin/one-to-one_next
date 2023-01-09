import Header from '../header/Header';
import Footer from '../footer/Footer';
import { TLayoutProps } from './Layout.props';

export default function Layout({ children }: TLayoutProps) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

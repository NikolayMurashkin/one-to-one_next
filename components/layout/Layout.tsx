import Header from '../header/Header';
import Footer from '../footer/Footer';
import { TLayoutProps } from './Layout.props';
import styles from './Layout.module.scss';

export default function Layout({ children }: TLayoutProps) {
	return (
		<div className={styles.wrapper}>
			<Header />
			{children}
			<Footer />
		</div>
	);
}

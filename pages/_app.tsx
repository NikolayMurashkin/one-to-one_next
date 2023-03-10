import { Provider } from 'react-redux';

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@shared/ui/layout/Layout';
import { store } from '@app/store';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

import withRedux from 'next-redux-wrapper';
import App from 'next/app';
import { Provider } from 'react-redux';
import Root from '../components/common/Root';
import { appWithTranslation } from '../i18n';
import initStore from '../redux/store/store';
import '../static/scss/style.scss';

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		return {
			pageProps: {
				...(Component.getInitialProps
					? await Component.getInitialProps(ctx)
					: {})
			}
		};
	}

	render() {
		const { Component, pageProps, store } = this.props;

		return (
			<Provider store={store}>
				<Root />
				<Component {...pageProps} />
			</Provider>
		);
	}
}

export default withRedux(initStore, { debug: false })(appWithTranslation(MyApp));
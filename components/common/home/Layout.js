import Head from 'next/head';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as appAction from '../../../redux/actions/appActions';
import '../styles/ReactToastify.scss';
import Header from './Header';

class Layout extends Component {
	componentDidMount() {
		const binanceChain = window.ethereum ? window.ethereum : undefined;
		if (binanceChain !== undefined) {
			binanceChain.autoRefreshOnNetworkChange = false;
			binanceChain.isConnected();

			try {
				binanceChain.request({ method: 'eth_requestAccounts', params: [] })
					.then(async (accounts) => {
						if (accounts.length === 0) {
							console.log("Please connect to Binance Smart Chain!");
						} else {
							binanceChain.on('accountsChanged', () => {
								window.location.reload();
							});

							binanceChain.on('chainChanged', () => {
								window.location.reload();
							});
						}
					})
					.catch((err) => {
						console.error(err);
					});
			} catch (error) {
				console.error('err binanceChain', error);
			}
		}
	}

	renderContent = () => {
		const { activeMenu } = this.props;

		return (
			<>
				<Header
					activeMenu={activeMenu}
					handleChange={this.handleChange}
				/>
				{this.props.children}
			</>
		);
	}

	render() {
		return (
			<>
				<Head>
					<title>FOTA Marketplace</title>
					<meta name="description" content="Farm" />
					<meta name="author" content="Spa" />
					<meta name="keywords" content="blockchain consultant, startup, ethereum, Farmer" />
					<meta property="og:title" content="FOTA" />
					<meta property="og:url" content="" />
					<meta property="og:type" content="website" />
					<meta property="og:image" content="" />
					<meta property="og:site-name" content="FOTA" />
					<meta property="og:description" content="FOTA" />
					<meta property="og:image:alt" content="FOTA" />
					<meta charSet="utf-8" />
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<link rel="icon" href="../../../static/images/favicon.ico" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css2?family=Jura:wght@600;700&display=swap" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&display=swap" rel="stylesheet" />
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
					<link rel="stylesheet" href="../../../static/css/styles.min.css" />
					<link rel="stylesheet" href="../../../static/css/rangeslider.css" />
				</Head>
				{this.renderContent()}
				<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/mobile-detect/1.4.5/mobile-detect.min.js"></script>
				<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
				{/* <script src="../../../static/js/main.js"></script> */}
				{/* <script src="../../../static/js/vconsole.min.js"></script>
				<script type="text/javascript" src="../../../static/js/myVconsole.js" /> */}
			</>
		);
	}
}

const mapStateToProps = state => ({
	userReducer: state.userReducer
});

const mapDispatchToProps = dispatch => ({
	updateDataUser: (data) => dispatch(appAction.updateDataUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

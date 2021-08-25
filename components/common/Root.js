import React, { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { useDispatch } from 'react-redux';
import { ToastContainer } from "react-toastify";
import { ACCOUNT } from '../../commons/constants';
import configs from '../../configs';
import * as appAction from '../../redux/actions/appActions';
import './styles/ReactToastify.scss';

const Root = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const binanceChain = window.ethereum ? window.ethereum : undefined;
		// console.log('ethereum', binanceChain);

		if (binanceChain !== undefined) {
			binanceChain.autoRefreshOnNetworkChange = false;
			binanceChain.isConnected();

			try {
				binanceChain.request({ method: 'eth_requestAccounts', params: [] })
					.then(async (accounts) => {
						// console.log('accounts', accounts);

						if (accounts.length === 0) {
							console.log("Please connect to Binance Smart Chain!");
						} else {
							const address = accounts[0];

							// console.log({ address });

							dispatch(appAction.updateDataUser({ address }));
							let chainId = 1;

							if (isMobile) {
								chainId = binanceChain.chainId;
								// console.log('chainId mobile', chainId);
							} else {
								await binanceChain
									.request({ method: 'eth_chainId', params: [] })
									.then(async (response) => {
										chainId = response;
										// console.log('response eth_chainId', chainId);
									})
									.catch((err) => {
										console.error(err);
									});
							}

							// console.log('chainId abc', chainId);
							dispatch(appAction.updateDataContract({
								chainId,
								binanceChain,
								isPopupDetect: !configs.chainId.includes(chainId),
								isBinanceChain: configs.chainId.includes(chainId)
							}));
						}
					})
					.catch((err) => {
						if (err.code === 4001) {
							console.log('Please connect to MetaMask.');
						} else {
							console.error(err);
						}
						dispatch(appAction.updateDataContract({
							isPopupDetect: true,
							binanceChain: 1,
							isBinanceChain: false
						}));
						dispatch(appAction.updateDataUser({ address: ACCOUNT }));
					});
			} catch (error) {
				console.error('err ethereum', error);
				dispatch(appAction.updateDataContract({
					isPopupDetect: true,
					binanceChain: 1,
					isBinanceChain: false
				}));
				dispatch(appAction.updateDataUser({ address: ACCOUNT }));
			}
		} else {
			console.log('error');
			dispatch(appAction.updateDataContract({
				isPopupDetect: true,
				binanceChain: 1,
				isBinanceChain: false
			}));
			dispatch(appAction.updateDataUser({ address: ACCOUNT }));
		}
	}, [])

	return (
		<ToastContainer
			position="bottom-center"
			pauseOnFocusLoss={false}
			hideProgressBar={true}
		/>
	);
}

export default Root;
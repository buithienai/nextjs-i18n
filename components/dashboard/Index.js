import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from '../../i18n';
import * as appAction from '../../redux/actions/appActions';
import Layout from '../common/home/Layout';
import ModalDetect from '../common/home/ModalDetect';

class Dashboard extends Component {
    render() {
        const { isPopupDetect } = this.props.contractReducer;
        const { t } = this.props;

        return (
            <Layout activeMenu={2} classes="page page-dashboard">
                <main className="static-page">
                    {t('dashboard')}
                    <ModalDetect
                        isPopupDetect={isPopupDetect}
                        updateDataContract={this.props.updateDataContract}
                    />
                </main>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    userReducer: state.userReducer,
    contractReducer: state.contractReducer
});

const mapDispatchToProps = dispatch => ({
    updateDataContract: (data) => dispatch(appAction.updateDataContract(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('common')(Dashboard));
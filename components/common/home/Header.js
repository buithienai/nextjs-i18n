import cookie from 'js-cookie';
import Link from 'next/link';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LANGUAGE } from '../../../commons/constants';
import { i18n, withTranslation } from '../../../i18n';
import * as appAction from '../../../redux/actions/appActions';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalDetect: false,
            en: i18n.language === 'en',
            vi: i18n.language === 'vi',
            check: false
        }
    }

    handleChange = (data) => {
        this.setState({
            ...data
        });
    }

    handleChangeLanguage = (item) => {
        this.setState({
            en: item.lang === 'en',
            vi: item.lang === 'vi',
            check: item.lang === 'en' ? true : false
        })
        this.setState({

        })
        i18n.changeLanguage(item.lang);
    }

    render() {
        const { activeMenu } = this.props;
        const { t } = this.props;
        const { en, vi, check } = this.state;

        console.log({ en });
        console.log({ vi });
        console.log({ check });

        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
                    <div className="collapse navbar-collapse" id="navbarsExample09">
                        <ul className="navbar-nav mr-auto">
                            <li className={"nav-item " + (activeMenu === 1 ? "active" : "")}>
                                <Link href="/">
                                    <a className="nav-link">{t('home')}</a>
                                </Link>
                            </li>
                            <li className={"nav-item " + (activeMenu === 2 ? "active" : "")}>
                                <Link href="/dashboard">
                                    <a className="nav-link">{t('dashboard')}</a>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown09" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {i18n.language}
                                </a>
                                <div className="dropdown-menu" aria-labelledby="dropdown09">
                                    <a
                                        className={`dropdown-item ` + (!check ? 'active' : '')}
                                        onClick={() => this.handleChangeLanguage(LANGUAGE.vi)}
                                    >VI</a>
                                    <a
                                        className={`dropdown-item ` + (check ? 'active' : '')}
                                        onClick={() => this.handleChangeLanguage(LANGUAGE.en)}
                                    >EN</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

const mapStateToProps = state => ({
    contractReducer: state.contractReducer,
    userReducer: state.userReducer
});

const mapDispatchToProps = dispatch => ({
    updateDataUser: (data) => dispatch(appAction.updateDataUser(data)),
    updateDataContract: (data) => dispatch(appAction.updateDataContract(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('common')(Header));
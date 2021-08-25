import React from 'react';
import Head from 'next/head';

const Index = () => {
    return (
        <>
            <Head>
                <title>FOTA Marketplace</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="..../../static/images/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Jura:wght@600;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                <link rel="stylesheet" href="../../../static/css/styles.min.css" />
                <link rel="stylesheet" href="./../../static/scss/style.scss" />
            </Head>
            <div className="wrap-error">
                <div>
                    <h1>404</h1>
                    <p>Error occurred! - File not Found</p>
                    <div className="sub">
                        <a href="/">
                            Back
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
// App

import React, { useEffect, useState } from 'react';
import uniqueKey from 'unique-key';

// Styles
import './styles.scss';

// Components
import { Card, Grid, Loader } from '../components/index';

// Requests
import getMancoRequest from '../requests/getManco';

const App = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getMancoRequest()
            .then((response) => {
                setData(response);
                setIsLoading(false);
            }).catch(({ response: { status = 500, statusText = 'Internal Server Error' } = {} }) => {
                setError(`${status}: ${statusText}`);
                setIsLoading(false);
            });

        return () => {
            setData([]);
        };
    }, []);

    return (
        <div className="app">
            <Loader isLoading={isLoading}>
                {
                    data.length
                        ? (
                            <Grid>
                                {
                                    data.map(item => (
                                        <Card
                                            {...item}
                                            key={uniqueKey()}
                                        />
                                    ))
                                }
                            </Grid>
                        )
                        : (
                            <div className="app__message">
                                Whoops!&nbsp;
                                { error }
                                <br />
                                No Data To Display
                            </div>
                        )
                }
            </Loader>
        </div>
    );
};

export default App;

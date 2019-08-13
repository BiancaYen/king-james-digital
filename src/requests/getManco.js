// Get Manco Request

import axios from 'axios';
import moment from 'moment';

const getManco = () => {
    return axios.get('http://localhost:3001/manco')
        .then((response) => {
            const { portfolio = {} } = response.data;
            const { clientAccountGroups = {} } = portfolio;
            // Cast object to array
            return Object.values(clientAccountGroups).map(({ inceptionDate, updatedDate, ...clientAccountGroup }) => ({
                ...clientAccountGroup,
                // Format Dates
                inceptionDate: moment(inceptionDate).format('DD MMMM YYYY'),
                updatedDate: moment(updatedDate).format('DD MMMM YYYY').toUpperCase()
            }));
        });
};

export default getManco;

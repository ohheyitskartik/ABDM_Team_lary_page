import axios from 'axios';
import { useQuery } from 'react-query';
import { ambeeKey } from '../../../env.config';

export const useAmbee = () => {
    const options = {
        method: 'GET',
        url: 'https://api.ambeedata.com/latest/by-city',
        params: { city: 'Pune' },
        headers: { 'x-api-key': ambeeKey, 'Content-type': 'application/json' },
    };

    const fetchData = async () => {
        const data = await axios
            .get(options.url, { headers: options.headers, params: options.params })
            .then((response) => response.data);
        return data;
    };

    const { data, isFetching } = useQuery('ambee-data', fetchData);

    const optionsPollen = {
        method: 'GET',
        url: 'https://api.ambeedata.com/latest/pollen/by-place',
        params: { place: 'sinhagadh,pune' },
        headers: { 'x-api-key': ambeeKey, 'Content-type': 'application/json' },
    };

    const fetchDataPollen = async () => {
        const dataTwo = await axios
            .get(optionsPollen.url, {
                headers: optionsPollen.headers,
                params: optionsPollen.params,
            })
            .then((response) => response.data);
        return dataTwo;
    };

    const { data: pollenData, isFetching: isFetchingPollenData } = useQuery(
        'ambee-data-pollen',
        fetchDataPollen,
    );

    return { data, isFetching, pollenData, isFetchingPollenData };
};

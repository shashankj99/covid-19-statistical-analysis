import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl, Typography} from '@material-ui/core';

import {fetchCountries} from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker = ({handleCountryChange}) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries());
        }
        fetchAPI();
    }, []);

    return (
        <FormControl className={styles.formControl}>
            <Typography color="textSecondary" gutterBottom>
              ** Select country to see the statistics of the respective country.
            </Typography>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">All Country data</option>
                {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;

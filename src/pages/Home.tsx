import React, { useEffect, useMemo, useState } from 'react';
import {
    allCountries,
    getAllCountries,
    selectedRegion,
    status,
} from '../app/countriesSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import CountryCard from '../components/CountryCard';
import Dropdown from '../components/Dropdown';
import SearchBar from '../components/SearchBar';
import { FILTER_REGIONS } from '../helpers/constants';
import { HomeWrapper } from './pageStyles';

function Home() {
    const countries = useAppSelector(allCountries);
    const requestStatus = useAppSelector(status);
    const region = useAppSelector(selectedRegion);
    const dispatch = useAppDispatch();

    const [searchValue, setSearchValue] = useState<string>('');

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchValue(event.target.value);
    }

    const searchedCountries = useMemo(
        () =>
            countries.filter((country) => {
                return country.name.common
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
            }),
        [countries, searchValue]
    );

    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);

    console.log(countries);

    return (
        <HomeWrapper>
            <div className="home-header">
                <SearchBar
                    value={searchValue}
                    onChange={handleSearch}
                    placeholder="Search for a country..."
                />
                <Dropdown
                    value={region}
                    options={FILTER_REGIONS}
                    placeholder="Filter by Region"
                />
            </div>
            {requestStatus === 'loading' && <h1>Loading...</h1>}
            {searchedCountries.length > 0 &&
                searchedCountries.map((country) => {
                    return <CountryCard key={country.cca3} country={country} />;
                })}
        </HomeWrapper>
    );
}

export default Home;

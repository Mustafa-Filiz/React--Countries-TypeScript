import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    allCountries,
    filteredCountries,
    getAllCountries,
    getFilteredCountries,
    selectedRegion,
    status,
} from '../app/countriesSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import CountryCard from '../components/CountryCard';
import Dropdown from '../components/Dropdown';
import Loading from '../components/Loading';
import SearchBar from '../components/SearchBar';
import { FILTER_REGIONS } from '../helpers/constants';
import { HomeWrapper } from './pageStyles';

function Home() {
    const countries = useAppSelector(allCountries);
    const filtered = useAppSelector(filteredCountries);
    const requestStatus = useAppSelector(status);
    const region = useAppSelector(selectedRegion);
    const dispatch = useAppDispatch();

    const [searchValue, setSearchValue] = useState<string>('');

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchValue(event.target.value);
    }

    function handleFilterChange(value: string): void {
        if (value === 'All') {
            dispatch(getAllCountries());
            return;
        }
        dispatch(getFilteredCountries(value));
    }

    const displayedCountries = useMemo(() => {
        return filtered.length > 0 ? filtered : countries;
    }, [filtered, countries]);

    const searchedCountries = useMemo(
        () =>
            displayedCountries.filter((country) => {
                return country.name.common
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
            }),
        [displayedCountries, searchValue]
    );

    useEffect(() => {
        dispatch(getAllCountries());
    }, []);

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
                    onChange={handleFilterChange}
                />
            </div>
            {requestStatus === 'loading' && <Loading />}
            {searchedCountries.length > 0 &&
                searchedCountries.map((country) => {
                    return (
                        <Link to={`/detail/${country.cca3.toLowerCase()}`} key={country.cca3}>
                            <CountryCard country={country} />
                        </Link>
                    );
                })}
        </HomeWrapper>
    );
}

export default Home;

import React, { useEffect } from 'react'
import { allCountries, getAllCountries, status } from '../app/countriesSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import CountryCard from '../components/CountryCard';
import { HomeWrapper } from './pageStyles';

function Home() {
	const countries = useAppSelector(allCountries)
	const requestStatus = useAppSelector(status)
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getAllCountries())
	}, [dispatch])

	console.log(countries)

  return (
	<HomeWrapper>
		{requestStatus === 'loading' && <h1>Loading...</h1>}
		{countries.length > 0 && countries.map((country) => {
			return <CountryCard country={country} />
		})}
	</HomeWrapper>
  )
}

export default Home
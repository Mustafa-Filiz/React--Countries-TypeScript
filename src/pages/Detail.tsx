import Button from '../components/Button';
import { StyledDetailWrapper } from './pageStyles';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { IoHome } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
    allCountries,
    getAllCountries,
    getCountryDetail,
    selectedCountry,
    status,
} from '../app/countriesSlice';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import NumberUtility from '../helpers/NumberUtility';

function Detail() {
    const country = useAppSelector(selectedCountry);
    const countries = useAppSelector(allCountries);
    const loading = useAppSelector(status);
    const dispatch = useAppDispatch();

    const { cca3 } = useParams();
    const navigate = useNavigate();

    const { name, capital, population, region, languages, currencies, flags, tld, subregion, borders } =
        country || {};

    function handleBackClick(): void {
        navigate(-1);
    }

    function handleHomeClick(): void {
        navigate('/');
    }

    function handleCountryClick(countryCode:string): void {
        navigate(`/detail/${countryCode}`);
    }

    useEffect(() => {
        if (!cca3) return;
        dispatch(getCountryDetail(cca3));
    }, [cca3]);

    useEffect(() => {
        if (countries.length) return
        dispatch(getAllCountries());
    }, [])

    return (
        <StyledDetailWrapper>
            <div className="action-buttons">
                <Button onClick={handleBackClick}>
                    <HiArrowNarrowLeft size="1.5rem" />
                    <span>Back</span>
                </Button>
                <Button onClick={handleHomeClick}>
                    <IoHome size="1.5rem" />
                    <span>Home</span>
                </Button>
            </div>
            {loading === 'loading' && <Loading />}
            {Object.values(country).length > 0 && (
                <div className="detail-body">
                    <div className="img-wrapper">
                        <img src={flags.png} alt="flag-img" />
                    </div>
                    <div className="detail-content">
                        <h1>{name.common}</h1>
                        <div className="detail-info">
                            <p><strong>Native Name: </strong>{name && name?.nativeName[Object.keys(name?.nativeName)?.[0]]?.common}</p>
                            <p><strong>Top Level Domain: </strong>{tld && tld?.[0]}</p>
                            <p><strong>Population: </strong>{population && NumberUtility.formatToLocale(population)}</p>
                            <p><strong>Currencies: </strong>{currencies && currencies[Object.keys(currencies)?.[0]]?.name}</p>
                            <p><strong>Region: </strong>{region && region}</p>
                            <p><strong>Languages: </strong>{languages && languages[Object.keys(languages)?.[0]]}</p>
                            <p><strong>Sub Region: </strong>{subregion && subregion}</p>
                            <p><strong>Capital: </strong>{capital && capital?.[0]}</p>
                        </div>
                        <div className="border-countries">
                            <strong>Border Countries:</strong>
                            {borders?.length > 0 && borders.map((countryCode: string) => {
                                const country = countries.find((country: any) => country.cca3 === countryCode);
                                return (
                                    <Button key={countryCode} onClick={() => handleCountryClick(country.cca3)}>
                                        {countries.length > 0 ? <p>{country?.name?.common}</p> : <Loading includeText={false} />}
                                    </Button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </StyledDetailWrapper>
    );
}

export default Detail;

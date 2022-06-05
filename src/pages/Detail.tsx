import Button from '../components/Button';
import { StyledDetailWrapper } from './pageStyles';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
    getCountryDetail,
    selectedCountry,
    status,
} from '../app/countriesSlice';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

function Detail() {
    const country = useAppSelector(selectedCountry);
    console.log('🚀 ~ country', country)
    const loading = useAppSelector(status);
    const dispatch = useAppDispatch();

    const { cca3 } = useParams();

    const { name, capital, population, region, languages, currencies, flags, tld, subregion } =
        country || {};

    useEffect(() => {
        if (!cca3) return;
        dispatch(getCountryDetail(cca3));
    }, [cca3]);

    return (
        <StyledDetailWrapper>
            <Button>
                <HiArrowNarrowLeft size="1.5rem" />
                <span>Back</span>
            </Button>
            {loading === 'loading' && <Loading />}
            {Object.values(country).length > 0 && (
                <div className="detail-body">
                    <div className="img-wrapper">
                        <img src={flags.svg} alt="flag-img" />
                    </div>
                    <div className="detail-content">
                        <h3>{name.common}</h3>
                        <div className="detail-info">
                            <p><strong>Native Name: </strong>{cca3 ? name.nativeName[cca3].common : null}</p>
                            <p><strong>Top Level Domain: </strong>{tld[0]}</p>
                            <p><strong>Population: </strong>{population}</p>
                            <p><strong>Currencies: </strong>{currencies[Object.keys(currencies)[0]].name}</p>
                            <p><strong>Region: </strong>{region}</p>
                            <p><strong>Languages: </strong>{cca3 ? languages[cca3] : null}</p>
                            <p><strong>Sub Region: </strong>{subregion}</p>
                            <p><strong>Capital: </strong>{capital[0]}</p>
                        </div>
                    </div>
                </div>
            )}
        </StyledDetailWrapper>
    );
}

export default Detail;

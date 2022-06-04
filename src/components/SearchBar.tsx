import { StyledSearchBar } from './componentStyles';
import { AiOutlineSearch } from 'react-icons/ai';

interface SearchBarProps {
    value: string;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ value, placeholder, onChange }: SearchBarProps) {
    return (
        <StyledSearchBar>
            <AiOutlineSearch />
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </StyledSearchBar>
    );
}

export default SearchBar;

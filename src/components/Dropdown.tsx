import { useState } from 'react';
import {
    DropdownTrigger,
    DropdownOverlay,
    StyledDropdown,
} from './componentStyles';
import { FaChevronDown } from 'react-icons/fa';

interface DropdownProps {
    value: string;
    placeholder?: string;
    open?: boolean;
    options: string[];
}

function Dropdown({ value, placeholder, open = false, options }: DropdownProps) {
    const [isOpen, setIsOpen] = useState<boolean>(open);
    const [selectedItem, setSelectedItem] = useState<string>(value);

    function handleToggle(): void {
        setIsOpen((prev) => !prev);
    }

    return (
        <StyledDropdown>
            <DropdownTrigger onClick={handleToggle} isOpen={isOpen}>
                <span>{selectedItem || placeholder}</span>
				<FaChevronDown />
            </DropdownTrigger>
            {isOpen && (
                <DropdownOverlay>
                    {options.map((option, index) => {
                        function handleItemClick() {
                            setSelectedItem(option);
							setIsOpen(false);
                        }

                        return (
                            <div key={index} onClick={handleItemClick}>
                                {option}
                            </div>
                        );
                    })}
                </DropdownOverlay>
            )}
        </StyledDropdown>
    );
}

export default Dropdown;

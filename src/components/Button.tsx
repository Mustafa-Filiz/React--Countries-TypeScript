import { StyledButton } from "./componentStyles";

interface ButtonProps {
	  onClick?: () => void;
	  children: React.ReactNode;
}

function Button({ onClick, children }: ButtonProps) {

  return (
	<StyledButton onClick={onClick}>
		{children}
	</StyledButton>
  )
}

export default Button
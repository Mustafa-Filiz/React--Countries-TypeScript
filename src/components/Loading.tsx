import React from 'react'
import { StyledLoading } from './componentStyles'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

interface LoadingProps {
	includeText?: boolean
}

function Loading({ includeText = true }: LoadingProps): JSX.Element {
  return (
	<StyledLoading>
		<AiOutlineLoading3Quarters />
		{includeText && <p>Loading...</p>}
	</StyledLoading>
  )
}

export default Loading
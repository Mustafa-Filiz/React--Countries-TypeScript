import React from 'react'
import { StyledLoading } from './componentStyles'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function Loading() {
  return (
	<StyledLoading>
		<AiOutlineLoading3Quarters />
		<h1>Loading...</h1>
	</StyledLoading>
  )
}

export default Loading
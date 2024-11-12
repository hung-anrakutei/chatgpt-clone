import { Box, HStack, IconButton, Input } from '@chakra-ui/react'
import {
	FileUploadList,
	FileUploadRoot,
	FileUploadTrigger,
} from '@/components/ui/file-button'
import { EnterIcon, UploadIcon } from '@/icons/other-icons'
import { useState } from 'react'

const InputContent = () => {
	const [inputValue, setInputValue] = useState('')

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)

		if (event.target.value.length > 0) {
			setDisabledButtonSubmit(false)
		} else {
			setDisabledButtonSubmit(true)
		}
	}

	const [disabledButtonSubmit, setDisabledButtonSubmit] = useState(true)

	return (
		<HStack bg='bg.muted' py={1} px={3} borderRadius={'2xl'}>
			<Box>
				<FileUploadRoot>
					<FileUploadTrigger asChild>
						<IconButton
							variant='ghost'
							_hover={{
								bg: 'bg.subtle',
							}}
							borderRadius={'3xl'}
						>
							<UploadIcon fontSize={'xl'} />
						</IconButton>
					</FileUploadTrigger>
					<FileUploadList />
				</FileUploadRoot>
			</Box>

			<Input
				placeholder='Message ChatGPT'
				variant={'subtle'}
				size='lg'
				borderRadius={'xl'}
				_focus={{
					outline: 'none',
				}}
				border='none'
				px={0}
				fontSize={'lg'}
				value={inputValue}
				onChange={handleInputChange}
			/>

			<Box>
				<IconButton
					disabled={disabledButtonSubmit}
					borderRadius={'full'}
				>
					<EnterIcon fontSize={'xl'} />
				</IconButton>
			</Box>
		</HStack>
	)
}

export default InputContent

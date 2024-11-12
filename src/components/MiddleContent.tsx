import {
	Box,
	Button,
	Center,
	Heading,
	HStack,
	Stack,
	Text,
} from '@chakra-ui/react'
import React from 'react'

import {
	HatIcon,
	IllustrationIcon,
	SearchIcon,
	WriteIcon,
} from '@/icons/other-icons'
import InputContent from '@/components/InputContent'

interface CategoriesComponentProps {
	title: string
	icon?: React.ReactNode
}

const listCategories = [
	{
		title: 'Create image',
		icon: <IllustrationIcon color='green.500' fontSize={'2xl'} />,
	},
	{
		title: 'Make a plan',
		icon: <HatIcon color='orange.500' fontSize={'2xl'} />,
	},
	{
		title: 'Summarize text',
		icon: <WriteIcon color='blue.500' fontSize={'2xl'} />,
	},
	{
		title: 'Analyze images',
		icon: <SearchIcon color='purple.500' fontSize={'2xl'} />,
	},
	{
		title: 'More',
	},
]

const CategoriesComponent = ({ title, icon }: CategoriesComponentProps) => {
	return (
		<Button
			variant='outline'
			borderRadius='full'
			py={4}
			px={2}
			outline={'none'}
		>
			<Box display='flex' alignItems='center' gap={2}>
				{icon}
				<Text fontSize='sm' color='fg.muted'>
					{title}
				</Text>
			</Box>
		</Button>
	)
}

const MiddleContent = () => {
	return (
		<Stack w='95%' maxW={800}>
			<Center>
				<Heading size={'3xl'} pb={2}>
					What can I help with?
				</Heading>
			</Center>
			<Box pb={3}>
				<InputContent />
			</Box>
			<Center>
				<HStack gap={2}>
					{listCategories.map((category, index) => (
						<CategoriesComponent key={index} {...category} />
					))}
				</HStack>
			</Center>
		</Stack>
	)
}

export default MiddleContent

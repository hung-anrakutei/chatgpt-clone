import { Button } from '@/components/ui/button'
import {
	MenuContent,
	MenuItem,
	MenuRoot,
	MenuTrigger,
} from '@/components/ui/menu'
import {
	ChatGPTMenuIcon,
	ChatGPTPlusIcon,
	CheckIcon,
	MenuIcon,
	TemporaryChatIcon,
} from '@/icons/other-icons'
import {
	Box,
	Circle,
	HStack,
	MenuSeparator,
	Stack,
	Text,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import { Switch } from '@/components/ui/switch'

interface MenuItemDetailProps {
	icon: ReactElement
	title: string
	description?: string
	element: ReactElement
}

const MenuItemDetail = ({
	icon,
	title,
	description,
	element,
	...rest
}: MenuItemDetailProps) => (
	<HStack {...rest} w='full' cursor={'pointer'}>
		<Circle size={8} bg='bg.subtle'>
			{icon}
		</Circle>
		<Stack gap={0} flex='1'>
			<Text fontSize='md' fontWeight={'semibold'}>
				{title}
			</Text>
			<Text fontSize='sm' color='fg.muted'>
				{description}
			</Text>
		</Stack>
		<Box pl={2}>{element}</Box>
	</HStack>
)

const ChatGPTMenu = () => {
	return (
		<MenuRoot>
			<MenuTrigger asChild>
				<Button
					variant='ghost'
					size='sm'
					fontSize='lg'
					borderRadius={'lg'}
					outline={'none'}
				>
					<HStack>
						<Text
							fontSize={'lg'}
							fontWeight={'bold'}
							color={'fg.muted'}
						>
							ChatGPT
						</Text>
						<MenuIcon />
					</HStack>
				</Button>
			</MenuTrigger>
			<MenuContent minW={'300px'} borderRadius={'lg'} p={2}>
				<MenuItem value='chatgpt-plus' py={2}>
					<MenuItemDetail
						title='ChatGPT Plus'
						description='Our smartest model & more'
						icon={<ChatGPTPlusIcon />}
						element={
							<Button
								variant={'outline'}
								size='sm'
								borderRadius='full'
								bg={'bg'}
								lineHeight={1}
								outline={'none'}
							>
								Upgrade
							</Button>
						}
					/>
				</MenuItem>
				<MenuItem value='chatgpt' py={2}>
					<MenuItemDetail
						title='ChatGPT'
						description='Great for everyday tasks'
						icon={<ChatGPTMenuIcon />}
						element={<CheckIcon fontSize={'lg'} />}
					/>
				</MenuItem>
				<MenuSeparator />
				<MenuItem value='temporary-chat' py={2}>
					<MenuItemDetail
						title='Temporary chat'
						icon={<TemporaryChatIcon />}
						element={<Switch />}
					/>
				</MenuItem>
			</MenuContent>
		</MenuRoot>
	)
}

export default ChatGPTMenu

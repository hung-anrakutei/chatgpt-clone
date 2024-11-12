import { ExploreGPTIcon } from '@/icons/sidebar-icons'
import { ReactElement } from 'react'
import {
	MenuContent,
	MenuItem,
	MenuSeparator,
	MenuRoot,
	MenuTrigger,
} from '@/components/ui/menu'
import { Avatar } from '@/components/ui/avatar'
import { Box, Button, Flex, HStack, Stack, Text } from '@chakra-ui/react'

interface AvatarDropdownProps {
	icon: ReactElement
	title: string
}

const listIcons = [
	{
		icon: <ExploreGPTIcon fontSize='xl' />,
		title: 'My GPTs',
		seperator: false,
	},
	{
		icon: <ExploreGPTIcon fontSize='xl' />,
		title: 'Customize ChatGPT',
		seperator: false,
	},
	{
		icon: <ExploreGPTIcon fontSize='xl' />,
		title: 'Settings',
		seperator: true,
	},
	{
		icon: <ExploreGPTIcon fontSize='xl' />,
		title: 'Upgrade Plan',
		seperator: true,
	},
	{
		icon: <ExploreGPTIcon fontSize='xl' />,
		title: 'Logout',
		seperator: false,
	},
]

const DropDownItem = ({ icon, title, ...rest }: AvatarDropdownProps) => {
	return (
		<HStack {...rest} w='full' cursor={'pointer'} p={1}>
			<Flex pr={2}>{icon}</Flex>
			<Stack gap={0} flex='1'>
				<Text fontSize='md' fontWeight='normal'>
					{title}
				</Text>
			</Stack>
		</HStack>
	)
}

const AvatarDropdown = () => {
	return (
		<MenuRoot>
			<MenuTrigger asChild>
				<Button variant='ghost' px={0} outline={'none'}>
					<Avatar
						name='Laughing'
						src='https://countdown-newyear2025.netlify.app/'
						size={'sm'}
						variant={'solid'}
						colorPalette={'teal'}
					/>
				</Button>
			</MenuTrigger>
			<MenuContent minW={'260px'} p={1} borderRadius={'xl'}>
				{listIcons.map((item, index) => (
					<Box key={index}>
						<MenuItem value={item.title}>
							<DropDownItem icon={item.icon} title={item.title} />
						</MenuItem>
						{item.seperator && <MenuSeparator />}
					</Box>
				))}
			</MenuContent>
		</MenuRoot>
	)
}

export default AvatarDropdown

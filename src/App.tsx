import ChatGPTMenu from '@/components/ChatGPTMenu'
import { Tooltip } from '@/components/ui/tooltip'
import {
	ExploreGPTIcon,
	NewChatIcon,
	SidebarIcon,
	SmallGPTIcon,
	UpgradeIcon,
} from '@/icons/sidebar-icons'
import {
	Box,
	Center,
	Circle,
	Flex,
	HStack,
	IconButton,
	Link,
	Stack,
	Text,
} from '@chakra-ui/react'
import AvatarDropdown from '@/components/AvatarDropdown'
import MiddleContent from '@/components/MiddleContent'

function App() {
	return (
		<Flex minH='100vh'>
			<Box bg='bg.muted' minW={260}>
				<Stack h='full' px='2' py='2'>
					<Flex justify='space-between'>
						<Tooltip
							content={
								<Text textStyle='sm' fontWeight='semibold'>
									Close sidebar
								</Text>
							}
							showArrow
							positioning={{
								placement: 'right',
								offset: { mainAxis: -4, crossAxis: 0 },
							}}
						>
							<IconButton variant='ghost'>
								<SidebarIcon fontSize='2xl' color='fg.subtle' />
							</IconButton>
						</Tooltip>
						<Tooltip
							content={
								<Text textStyle='sm' fontWeight='semibold'>
									New chat
								</Text>
							}
							showArrow
							positioning={{
								placement: 'bottom',
								offset: { mainAxis: 0, crossAxis: 4 },
							}}
						>
							<IconButton variant='ghost'>
								<NewChatIcon fontSize='2xl' color='fg.subtle' />
							</IconButton>
						</Tooltip>
					</Flex>
					<Stack px={1} gap={0} flex={1}>
						<HStack
							_hover={{
								layerStyle: 'fill.muted',
								textDecor: 'none',
							}}
							px={1}
							h={10}
							borderRadius='lg'
							w='full'
						>
							<Link
								href='#'
								variant={'plain'}
								_hover={{
									textDecor: 'none',
								}}
							>
								<Circle size={6} bg='bg' borderWidth='1px'>
									<SmallGPTIcon fontSize={'md'} />
								</Circle>
								<Text fontSize={'sm'} fontWeight={'md'}>
									ChatGPT
								</Text>
							</Link>
						</HStack>
						<HStack
							_hover={{
								layerStyle: 'fill.muted',
								textDecor: 'none',
							}}
							px={1}
							h={10}
							borderRadius={'lg'}
							w={'full'}
						>
							<Link
								href='#'
								variant={'plain'}
								_hover={{
									textDecor: 'none',
								}}
							>
								<Circle size={6} bg='none' border={'none'}>
									<ExploreGPTIcon fontSize={'md'} />
								</Circle>
								<Text fontSize={'sm'} fontWeight={'md'}>
									Explore GPTs
								</Text>
							</Link>
						</HStack>
					</Stack>
					<Link
						href='#'
						_hover={{
							textDecor: 'none',
							layerStyle: 'fill.muted',
						}}
						py={2}
						pl={1}
						borderRadius={'lg'}
					>
						<HStack>
							<Circle
								size={8}
								fontSize={'lg'}
								borderWidth='1px'
								bg='bg.subtle'
							>
								<UpgradeIcon />
							</Circle>
							<Stack gap={0} fontWeight={'medium'}>
								<Text fontSize={'sm'}>Upgrade plan</Text>
								<Text fontSize={'sm'} color='fg.subtle'>
									More access to the best models
								</Text>
							</Stack>
						</HStack>
					</Link>
				</Stack>
			</Box>
			<Box flex={1}>
				<Stack h='full'>
					<Flex
						justifyContent='space-between'
						alignItems='center'
						p={3}
					>
						<ChatGPTMenu />
						<AvatarDropdown />
					</Flex>
					<Center flex='1' p={2}>
						<MiddleContent />
					</Center>
					<Box pb={2}>
						<Center>
							<Text fontSize='sm' color='fg.subtle'>
								ChatGPT can make mistakes. Check important info.
							</Text>
						</Center>
					</Box>
				</Stack>
			</Box>
		</Flex>
	)
}

export default App

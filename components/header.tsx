import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { ButtonPrimary } from "./button-primary"

export default function Header() {
	return (
		<header className='max-w-[1120px] flex justify-between items-center mx-auto py-5 w-full'>
			<div className="h-12 flex items-center ">
				<div className="flex items-center font-poppins">
					<Image src="/logo.svg" alt="logo" width={36} height={36}/>
					<Link href={'/'} className="ml-2 text-3xl font-semibold">
						fleet
					</Link>
				</div>
				<div className="w-[1px] h-full bg-border mx-10"></div>
				<DropdownMenu>
					<DropdownMenuTrigger className="flex items-center outline-none">
						<p className="text-secondary font-bold text-sm">Travelers</p>
						<Image className="ml-2" src="/arrow-down.svg" alt="arrow" width={24} height={24}/>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="bg-background">
						<DropdownMenuLabel>Title</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Item1</DropdownMenuItem>
						<DropdownMenuItem>Item2</DropdownMenuItem>
						<DropdownMenuItem>Item3</DropdownMenuItem>
						<DropdownMenuItem>Item4</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<ul className="flex items-center gap-x-6 text-sm text-secondary">
				<li>
					<Link href={'/support'}>Support</Link>
				</li>
				<li className="px-4">
					<DropdownMenu>
						<DropdownMenuTrigger className="flex items-center outline-none">
							<Image src="/globe.svg" alt="logo" width={16} height={16}/>
							<p className="ml-2">Language</p>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="bg-background">
							<DropdownMenuItem>English</DropdownMenuItem>
							<DropdownMenuItem>Russian</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</li>
				<li>
					<ButtonPrimary>List your property</ButtonPrimary>
				</li>
				<li>
					<DropdownMenu>
						<DropdownMenuTrigger className="flex items-center outline-none">
							<Image src="/notification.svg" alt="logo" width={40} height={40}/>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="bg-background">
							<DropdownMenuLabel>Notifications</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>First</DropdownMenuItem>
							<DropdownMenuItem>Second</DropdownMenuItem>
							<DropdownMenuItem>Third</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</li>
				<li>
					<DropdownMenu>
						<DropdownMenuTrigger className="flex items-center outline-none">
							<Avatar>
								<AvatarImage asChild src="/avatar.svg" >
									<Image src="/avatar.svg" alt="logo" width={40} height={40}/>
								</AvatarImage>
								<AvatarFallback>A</AvatarFallback>
							</Avatar>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="bg-background">
							<DropdownMenuLabel>Authorization</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Sign in</DropdownMenuItem>
							<DropdownMenuItem>Sign up</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</li>
				<li>
					<ModeToggle/>
				</li>
			</ul>
			
		</header>
	)
}
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar"

import { ListCheck, Timer, } from "lucide-react"

// Menu items.
const items = [
	{
		title: "Countdown",
		url: "/",
		icon: Timer,
	},
	{
		title: "Checklist",
		url: "/checklist",
		icon: ListCheck,
	},
]

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Menu</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<a className="text-sm w-full text-center" href="https://candidosales.me/" target="_blank" rel="noreferrer">Made with ❤️</a>
			</SidebarFooter>
		</Sidebar>
	)
}

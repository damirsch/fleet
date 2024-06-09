import { Button } from "@/components/ui/button"
 
export function ButtonPrimary({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <Button className="border-border-secondary border-[2px] rounded-full text-primary bg-transparent hover:bg-border-secondary hover:text-black">{children}</Button>
}
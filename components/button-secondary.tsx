import { Button } from "@/components/ui/button"
 
export function ButtonSecondary({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <Button className="border-none rounded-full text-white bg-blue hover:bg-blue-dark px-6 py-4 font-bold">{children}</Button>
}
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header/>
			<div className="flex items-center justify-center my-auto">
				<Image className="rounded-xl" src="/404.gif" alt="logo" width={500} height={500}/>
			</div>
		</div>
	);
}

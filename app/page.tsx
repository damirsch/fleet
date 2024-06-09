import { ButtonSecondary } from "@/components/button-secondary";
import Header from "@/components/header";

export default function Home() {
	return (
		<>
			<div className="max-w-[1280px] mx-auto">
				<section className="home-main h-full rounded-3xl">
					<div className="pt-36 pl-20 pb-40 text-black">
						<h1 className="font-bold text-8xl">Air, sleep,<br /> dream</h1>
						<p className="mt-4 text-2xl">Find and book a great experience.</p>
						<div className="mt-6">
							<ButtonSecondary>Start your search</ButtonSecondary>
						</div>
					</div>
				</section>
				{/* <section className="mt-40">
					<h2>Let’s go on an adventure</h2>
				</section> */}
			</div>
		</>
	);
}

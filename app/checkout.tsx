import { AiOutlineExclamationCircle as ExclamationCircle } from "react-icons/ai";
import { BsCalendar4Week as Calendar } from "react-icons/bs";
import { MdOutlineFlight as Flight } from "react-icons/md";

import { Spacer } from "../components";

export default function CheckoutCard() {
	const data = {
		name: "Mr. John Doe",
		maturity: "Adult",
		origin: "Jakarta (CGK)",
		destination: "Denpasar (DPS)",
		date: "23 Nov 2020",
		price: "Rp 2.238.000",
	};

	return (
		<div className="flex flex-col bg-white px-5 pt-4 pb-2 rounded-lg h-fit">
			<div className="flex justify-between items-end py-4">
				<p className="text-sky-900 font-medium">YOUR BOOKING</p>
				<a className="text-sm text-sky-500 hover:cursor-pointer">Details</a>
			</div>
			<Spacer className="border-dashed" />

			<DetailPart title="List of Passenger(s)">
				<div className="flex justify-between">
					<p>{data.name}</p>
					<p>{data.maturity}</p>
				</div>
			</DetailPart>
			<Spacer />

			<DetailPart title="Flight">
				<span className="flex gap-2 items-center">
					<Flight />
					<p>
						{data.origin}
						&nbsp;&rarr;&nbsp;
						{data.destination}
					</p>
				</span>

				<span className="flex gap-2 items-center">
					<Calendar />
					<p>{data.date}</p>
				</span>
			</DetailPart>
			<Spacer />

			<DetailPart title="Price">
				<div className="flex justify-between items-end">
					<p>Total</p>
					<span className="flex gap-2 items-center">
						<ExclamationCircle className="text-red-500" />
						<p className="text-2xl font-bold">{data.price}</p>
					</span>
				</div>
			</DetailPart>
		</div>
	);
}

function DetailPart({
	title,
	children,
}: {
	className?: string;
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col py-4 gap-2">
			<p className="font-medium uppercase">{title}</p>
			{children}
		</div>
	);
}

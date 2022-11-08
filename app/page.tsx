import React from "react";
import { BiLock as Lock } from "react-icons/bi";

import CheckoutCard, { Spacer } from "./checkout";

import Visa from "public/images/visa.svg";
import MasterCard from "public/images/mastercard.svg";
import Amex from "public/images/amex.svg";
import Jcb from "public/images/jcb.svg";

export default function Home() {
	const payments = [
		"Credit/Debit Card",
		"LinkAja",
		"KlikBCA",
		"e-Pay BRI",
		"CIMB Clicks",
		"GoPay",
		"ATM",
		"BNI Mobile",
		"ShoopePay",
		"Bank Transfer",
		"Alfamart",
		"Indomaret",
	];

	return (
		<div className="container mx-auto w-full py-6 grid grid-cols-9 gap-8">
			<div className="col-span-7">
				<div className="w-full grid grid-cols-4">
					<div className="col-span-1 bg-gray-50 flex flex-col px-12 py-6 items-start gap-2 rounded-l-xl">
						{payments.map((method: string, i) => (
							<Button key={i} isActive={i === 0}>
								{method}
							</Button>
						))}
					</div>

					<div className="col-span-3">
						<div className="flex flex-col gap-4 px-12 py-8 h-full bg-white drop-shadow-[-12px_0px_12px_rgba(0,0,0,0.1)] rounded-r-xl">
							<Section title="Card details">
								<div className="flex gap-2 items-center text-gray-500 ">
									<Lock />
									<p>Secure Server</p>
								</div>
							</Section>

							<div className="grid grid-cols-6 gap-x-8 gap-y-4 child:w-full">
								<Input
									wrapperClassName="col-span-3"
									id="credit-card"
									label="Credit Card"
									type="number"
									required
								/>

								<div className="col-span-3">
									<label htmlFor="payment-methods" className="invisible">
										Payment methods
									</label>
									<div id="payment-methods" className="flex gap-3">
										<PaymentMethodButton>
											<Visa />
										</PaymentMethodButton>
										<PaymentMethodButton>
											<MasterCard />
										</PaymentMethodButton>
										<PaymentMethodButton>
											<Amex />
										</PaymentMethodButton>
										<PaymentMethodButton>
											<Jcb />
										</PaymentMethodButton>
									</div>
								</div>

								<Input
									wrapperClassName="col-span-2"
									id="expired-month"
									label="Expiration Date"
									type="date"
									placeholder="Month"
									required
								/>
								<Input
									wrapperClassName="col-span-2"
									id="expired-year"
									type="date"
									placeholder="Year"
									required
								/>
								<Input
									wrapperClassName="col-span-2"
									id="cvc"
									label="CVC"
									type="number"
									placeholder="***"
									required
									maxLength={3}
								/>
							</div>

							<Section title="Billing Information" />

							<div className="grid grid-cols-6 gap-x-8 gap-y-4 gutter child:w-full"></div>
						</div>
					</div>
				</div>
			</div>

			<div className="col-span-2">
				<CheckoutCard />
			</div>
		</div>
	);
}

function Button({
	children,
	isActive = false,
}: {
	children: string;
	isActive?: boolean;
}) {
	return (
		<button
			className={`py-2 px-4 w-full hover:rounded-lg hover:bg-sky-300 hover:text-white ${
				isActive
					? "text-sky-500 border-b-[3px] border-b-sky-500"
					: "text-sky-900"
			}`}
		>
			<p className="font-medium text-lg text-left">{children}</p>
		</button>
	);
}

function PaymentMethodButton({ children }: { children: React.ReactNode }) {
	return (
		<button className="bg-gray-200 rounded child:h-12 focus:ring ring-offset-2 ring-sky-200">
			{children}
		</button>
	);
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	wrapperClassName?: string;
}

function Input({
	id,
	label,
	required,
	className,
	wrapperClassName,
	...props
}: InputProps) {
	return (
		<div className={wrapperClassName}>
			<label htmlFor={id} className={!label ? "invisible" : ""}>
				{label ?? id}
				{required ? " *" : ""}
			</label>
			<input
				id={id}
				required={required}
				className={`border rounded-lg h-12 px-4 outline-sky-200 w-full ${
					className ?? ""
				}`}
				{...props}
			/>
		</div>
	);
}

function Section({
	title,
	children,
}: {
	title: string;
	children?: React.ReactNode;
}) {
	return (
		<div>
			<div className="flex justify-between items-end py-4">
				<p className="uppercase text-sky-900 font-medium">{title}</p>
				{children}
			</div>
			<Spacer className="border-dashed" />
		</div>
	);
}

"use client";

import React from "react";
import { BiLock as Lock } from "react-icons/bi";

import SummarySection from "./summary-section";
import { Section } from "../components";

import Visa from "public/images/visa.svg";
import MasterCard from "public/images/mastercard.svg";
import Amex from "public/images/amex.svg";
import Jcb from "public/images/jcb.svg";

export default function FormPayment() {
	return (
		<div className="col-span-full lg:col-span-3">
			<div className="flex flex-col gap-4 px-4 lg:px-12 lg:py-8 h-full bg-white drop-shadow-[-12px_0px_12px_rgba(0,0,0,0.1)] rounded-l-xl lg:rounded-l-none rounded-r-xl">
				<Section title="Card details">
					<div className="flex gap-2 items-center text-gray-500 ">
						<Lock />
						<p>Secure Server</p>
					</div>
				</Section>

				<div className="grid grid-cols-6 gap-x-8 gap-y-4 child:w-full">
					<Input
						wrapperClassName="col-span-full lg:col-span-3"
						id="credit-card"
						label="Credit Card"
						type="number"
						required
					/>
					<div className="col-span-full lg:col-span-3 ">
						<label
							htmlFor="payment-methods"
							className="hidden lg:block lg:invisible"
						>
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
						wrapperClassName="col-span-3 lg:col-span-2"
						id="expired-month"
						label="Expiration Date"
						type="date"
						placeholder="Month"
						required
					/>
					<Input
						wrapperClassName="col-span-3 lg:col-span-2"
						id="expired-year"
						type="date"
						placeholder="Year"
						required
					/>
					<Input
						wrapperClassName="col-span-full lg:col-span-2"
						id="cvc"
						label="CVC"
						type="number"
						placeholder="***"
						required
						maxLength={3}
					/>
				</div>

				<Section title="Billing Information" />

				<div className="grid grid-cols-6 gap-x-8 gap-y-4 gutter child:w-full">
					<Input
						wrapperClassName="col-span-full lg:col-span-3"
						id="card-holder-name"
						label="Card Holder Name"
						type="text"
						placeholder="John Doe"
						required
					/>

					<Input
						wrapperClassName="col-span-full lg:col-span-4"
						id="address"
						label="Address"
						type="text"
						placeholder="Jl. Jenderal Sudirman Kav.10-11"
					/>
					<div className="col-span-3 lg:col-span-2">
						<label htmlFor="country">Country</label>
						<select
							id="country"
							className="w-full h-12 rounded-lg px-2 bg-white border-[1px] outline-sky-300"
						>
							<option>Indonesia</option>
							<option>United States</option>
							<option>United Kingdom</option>
						</select>
					</div>

					<Input
						wrapperClassName="col-span-3 lg:col-span-2"
						id="province"
						label="Province/State"
						placeholder="DKI Jakarta"
					/>
					<Input
						wrapperClassName="col-span-3 lg:col-span-2"
						id="city"
						label="City"
						placeholder="Jakarta"
					/>
					<Input
						wrapperClassName="col-span-3 lg:col-span-2"
						id="zip-code"
						label="ZIP Code"
						placeholder="10202"
						type="number"
					/>

					<Input
						wrapperClassName="col-span-full lg:col-span-3"
						id="email"
						label="Email"
						placeholder="example@email.com"
					/>
					<Input
						wrapperClassName="col-span-full lg:col-span-3"
						id="phone"
						label="Phone"
						placeholder="0812 3456 6890"
					/>
				</div>

				<SummarySection />
			</div>
		</div>
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

import React from "react";
import { BsCheckCircle as CheckCircle } from "react-icons/bs/";
import { MdOutlineAlarmOn as Alarm } from "react-icons/md/";

import GarudaIndonesia from "../public/images/garuda-indonesia.svg";

import "./globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head />
			<body>
				<div className="">
					<div className="w-full bg-white">
						<div className="container mx-auto grid grid-cols-9 gap-8 ">
							<div className="col-span-2 py-2">
								<GarudaIndonesia className="mx-auto" />
							</div>

							<div className="col-span-5 flex px-16">
								<Button>
									<CheckCircle className="text-4xl text-gray-600" />
									<span className="text-xl">SELECT</span>
								</Button>
								<Spacer />
								<Button>
									<CheckCircle className="text-4xl text-gray-600" />
									<span className="text-xl">BOOK</span>
								</Button>
								<Spacer />
								<Button>
									<div className="bg-sky-500 w-9 h-9 rounded-full text-2xl text-white flex items-center justify-center">
										<p>3</p>
									</div>
									<span className="text-xl text-sky-500">PAYMENT</span>
								</Button>
							</div>

							<div className="col-span-2 flex items-center">
								<div className="bg-gray-200 w-full h-10 rounded flex justify-center items-center gap-2 ">
									<p>
										Complete Payment in{" "}
										<span className="text-red-500">{"00:01:19"}</span>
									</p>
									<Alarm className="text-red-500 text-lg" />
								</div>
							</div>
						</div>
					</div>

					<main className="">{children}</main>

					<div className="w-full absolute bottom-0 bg-blue-500 text-white">
						<div className="container h-8 mx-auto flex justify-between">
							<p className="my-auto">
								© 2020. PT Garuda Indonesia (Persero) Tbk. All right reserved.
							</p>

							<div className="flex gap-4 items-center">
								<button>privacy policy</button>
								<span>&bull;</span>
								<button>contact us</button>
							</div>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}

const Button = ({ children }: { children: React.ReactNode }) => {
	return (
		<button className="flex text-gray-700 gap-2 items-center px-4">
			{children}
		</button>
	);
};

const Spacer = () => {
	return <div className="bg-gray-300 grow h-0.5 self-center" />;
};

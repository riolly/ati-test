export function Spacer({ className }: { className?: string }) {
	return <div className={`border-b-2 w-full h-0.5 ${className ?? ""}`} />;
}

export function Section({
	title,
	children,
}: {
	title?: string;
	children?: React.ReactNode;
}) {
	return (
		<div className="mt-4">
			<div
				className={`flex justify-between items-end ${title ? "py-4" : "pb-4"}`}
			>
				<p className={title ? "uppercase text-sky-900 font-medium" : "hidden"}>
					{title}
				</p>
				{children}
			</div>
			<Spacer className="border-dashed" />
		</div>
	);
}

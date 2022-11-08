export function Spacer({ className }: { className?: string }) {
	return <div className={`border-b-2 w-full h-0.5 ${className ?? ""}`} />;
}

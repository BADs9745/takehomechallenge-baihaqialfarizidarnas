import { forwardRef, type HTMLAttributes } from "react";

const Diva = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement> & { title: string }
>(({ children, title, ...props }, ref) => {
	return (
		<div>
			{title}
			<div {...props} ref={ref}>
				{children}
			</div>
		</div>
	);
});
Diva.displayName = "Diva";
export { Diva };

import { twMerge } from "tailwind-merge";

export default function PackagesCard(props: {
    title: React.ReactNode;
    description: React.ReactNode;
    button: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
}) {
    const { title, description, children, className, button } = props;
    return (
        <div
            className={twMerge(
                "border border-black/40 p-6 rounded-3xl",
                className
            )}
        >
            <div>
                <h3 className="text-3xl font-medium mt-2 text-black">
                    {title}
                </h3>
                <p className="text-white/20 mt-8">{description}</p>
            </div>
            <div>{button}</div>
            <div className="aspect-video">{children}</div>
        </div>
    );
}

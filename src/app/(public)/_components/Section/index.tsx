interface Props {
    sectionId?: string;
    children: React.ReactNode;
}

export function Section({ sectionId, children }: Props) {
    return (
        <section id={sectionId} className="overflow-hidden">
            <div className="max-w-460 mx-auto px-4 lg:px-6 py-20 lg:py-30">
                {children}
            </div>
        </section>
    );
}

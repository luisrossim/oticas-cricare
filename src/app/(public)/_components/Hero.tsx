import { lora } from '@/styles/fonts';

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <div className="absolute inset-0 z-0">
                <video
                    poster="/assets/videos/video-desktop-preload.png"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="hidden lg:block h-full w-full object-cover"
                >
                    <source
                        src="/assets/videos/video-desktop.webm"
                        type="video/webm"
                    />
                </video>

                <video
                    poster="/assets/videos/video-mobile-preload.png"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="block lg:hidden h-full w-full object-cover"
                >
                    <source
                        src="/assets/videos/video-mobile.webm"
                        type="video/webm"
                    />
                </video>
            </div>

            <div className="relative flex h-full items-end max-w-460 mx-auto pb-16 lg:pb-32 px-4 lg:px-6 text-white font-light">
                <div className="flex flex-col gap-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl max-w-3xl">
                        Na Cricaré, a escolha é guiada por{' '}
                        <span className={`${lora.className}`}>visagismo</span>,{' '}
                        <span className={`${lora.className}`}>conforto</span> e{' '}
                        <span className={`${lora.className}`}>estilo</span>.
                    </h1>
                    <span>ÓTICAS CRICARÉ</span>
                </div>
            </div>
        </section>
    );
}

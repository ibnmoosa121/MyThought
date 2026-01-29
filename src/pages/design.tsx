import { useEffect } from "react";
import { DesignHeroFrame } from "../components/features/design/frames/design-hero-frame";
import { DesignServicesFrame } from "../components/features/design/frames/design-services-frame";
import { DesignShowcaseFrame } from "../components/features/design/frames/design-showcase-frame";
import { DesignExpertiseFrame } from "../components/features/design/frames/design-expertise-frame";
import { DesignMethodologyFrame } from "../components/features/design/frames/design-methodology-frame";
import { DesignContactFrame } from "../components/features/design/frames/design-contact-frame";
import { DesignBackground } from "../components/features/design/design-background";

const DesignPage = () => {
    useEffect(() => {
        document.title = "Design & Creative | MyThought";
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-black relative flex-1 overflow-x-hidden flex flex-col">
            <DesignBackground />

            <div className="relative z-10 flex flex-col">
                <section className="relative z-20">
                    <DesignHeroFrame />
                </section>

                <DesignServicesFrame />

                <DesignShowcaseFrame />

                <DesignExpertiseFrame />

                <DesignMethodologyFrame />

                <DesignContactFrame />
            </div>
        </main>
    );
};

export default DesignPage;

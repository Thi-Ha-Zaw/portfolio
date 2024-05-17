import React, { useCallback, useEffect, useRef } from "react";
import {
    EmblaCarouselType,
    EmblaEventType,
    EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { Project } from "../../pages/Project";




const TWEEN_FACTOR_BASE = 0.2;


type PropType = {
    slides: Project[];
    options?: EmblaOptionsType;
};



const EmblaCarousel: React.FC<PropType> = props => {
    const { slides,options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const tweenFactor = useRef(0);
    const tweenNodes = useRef<HTMLElement[]>([]);

 

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
        tweenNodes.current = emblaApi.slideNodes().map(slideNode => {
            return slideNode.querySelector(
                ".embla__parallax__layer"
            ) as HTMLElement;
        });
    }, []);

    const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
        tweenFactor.current =
            TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
    }, []);

    const tweenParallax = useCallback(
        (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
            const engine = emblaApi.internalEngine();
            const scrollProgress = emblaApi.scrollProgress();
            const slidesInView = emblaApi.slidesInView();
            const isScrollEvent = eventName === "scroll";

            emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
                let diffToTarget = scrollSnap - scrollProgress;
                const slidesInSnap = engine.slideRegistry[snapIndex];

                slidesInSnap.forEach(slideIndex => {
                    if (isScrollEvent && !slidesInView.includes(slideIndex))
                        return;

                    if (engine.options.loop) {
                        engine.slideLooper.loopPoints.forEach(loopItem => {
                            const target = loopItem.target();

                            if (slideIndex === loopItem.index && target !== 0) {
                                const sign = Math.sign(target);

                                if (sign === -1) {
                                    diffToTarget =
                                        scrollSnap - (1 + scrollProgress);
                                }
                                if (sign === 1) {
                                    diffToTarget =
                                        scrollSnap + (1 - scrollProgress);
                                }
                            }
                        });
                    }

                    const translate =
                        diffToTarget * (-1 * tweenFactor.current) * 100;
                    const tweenNode = tweenNodes.current[slideIndex];
                    tweenNode.style.transform = `translateX(${translate}%)`;
                });
            });
        },
        []
    );

    useEffect(() => {
        if (!emblaApi) return;

        setTweenNodes(emblaApi);
        setTweenFactor(emblaApi);
        tweenParallax(emblaApi);

        emblaApi
            .on("reInit", setTweenNodes)
            .on("reInit", setTweenFactor)
            .on("reInit", tweenParallax)
            .on("scroll", tweenParallax);
    }, [emblaApi, tweenParallax]);

    return (
        <div className="embla  max-w-[48rem] mx-auto">
            <div className="embla__viewport overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex touch-pan-y touch-pinch-zoom -ml-[1rem]">
                    {slides.map(({ src, title, description,href }, index) => (
                        <div
                            className="embla__slide flex-[0_0_70%] min-w-0 pl-[1rem]"
                            key={index}
                        >
                            <div className="embla__parallax">
                                <a href={href} className="embla__parallax__layer relative">
                                    <img
                                        className="embla__slide__img embla__parallax__img"
                                        src={src}
                                        alt="Your alt text"
                                    />
                                    <div className=" absolute left-5 bottom-5">
                                        <p className={` mb-2 text-lg ${title == "ERP" ? 'text-gray-200' : 'text-gray-950'} font-roboto_slab`}>
                                            {title}
                                        </p>
                                        <p className={` text-xs ${title == "ERP" ? 'text-gray-400' : 'text-gray-800'} tracking-wider font-roboto_condensed`}>
                                            {description}
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls mt-[1.8rem] ps-10 sm:ps-10">
                <div className="embla__buttons flex gap-3">
                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    />
                </div>
            </div>
        </div>
    );
};

export default EmblaCarousel;

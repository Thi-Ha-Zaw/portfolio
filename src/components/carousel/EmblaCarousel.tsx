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

import Delivery from "../../images/devli_one.jpg";
import TodoList from "../../images/todolist.jpg";
import Shop from "../../images/shop.jpg";
import News from "../../images/news.jpg";
import ERP from "../../images/erp.jpg";

import { Project } from "../../pages/Home";

const TWEEN_FACTOR_BASE = 0.2;

type PropType = {
    options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = props => {
    const { options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const tweenFactor = useRef(0);
    const tweenNodes = useRef<HTMLElement[]>([]);

    const slides: Project[] = [
        {
            src: Delivery,
            title: "Delivery",
            description:
                "A streamlined app for tracking and managing deliveries in real-time.",
        },
        {
            src: TodoList,
            title: "Todo List",
            description:
                "An intuitive task management tool to help organize daily activities and projects.",
        },
        {
            src: Shop,
            title: "Shop",
            description:
                "A comprehensive e-commerce platform for browsing and purchasing products.",
        },
        {
            src: News,
            title: "News",
            description:
                "A dynamic news aggregator delivering the latest headlines and stories.",
        },
        {
            src: ERP,
            title: "ERP",
            description:
                "An enterprise resource planning system to optimize business processes and workflows.",
        },
    ];

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
                    {slides.map(({ src, title, description }, index) => (
                        <div
                            className="embla__slide flex-[0_0_70%] min-w-0 pl-[1rem]"
                            key={index}
                        >
                            <div className="embla__parallax">
                                <div className="embla__parallax__layer relative">
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
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls mt-[1.8rem]">
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

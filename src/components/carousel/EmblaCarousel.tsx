import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
    PrevButton,
    NextButton,
    usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

import ToDoImg from "../../images/todoapp.png";

type PropType = {
    slides: number[];
    options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = props => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <section className="embla max-w-[48rem] mx-auto">
            <div className="embla__viewport overflow-hidden " ref={emblaRef}>
                <div className="embla__container flex touch-pan-y touch-pinch-zoom -ml-[1rem]">
                    {slides.map(index => (
                        <div
                            className="embla__slide flex-[0_0_70%] min-w-0 pl-[1rem]"
                            key={index}
                        >
                            <div className="embla__slide__number h-[19rem]">
                                <img
                                    src={ToDoImg}
                                    className=" w-full h-full object-cover shadow-sm rounded-xl"
                                    alt=""
                                />
                                {/* <video
                                    controls={false}
                                    autoPlay={true}
                                    loop
                                    className=" w-full h-[15rem] object-cover shadow-sm rounded-xl"
                                >
                                    <source
                                        src="../../../public/videos/ucsm_news.mp4"
                                        type="video/mp4"
                                    />
                                </video> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls grid grid-cols-[auto,1fr] justify-between gap-[1.2rem] mt-[1.8rem]">
                <div className="embla__buttons grid grid-cols-2 gap-[0.6rem] items-cente">
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
        </section>
    );
};

export default EmblaCarousel;

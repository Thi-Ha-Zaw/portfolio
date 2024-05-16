
type Props = {
    title : string
};

const Heading = ({title}: Props) => {
    return (
        <h1 className=" text-3xl font-[500] font-roboto_condensed text-gray-50"> {title} </h1>
    );
};

export default Heading;

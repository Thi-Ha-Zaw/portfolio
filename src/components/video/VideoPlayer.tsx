type Props = {
    path: string;
};

const VideoPlayer = ({ path }: Props) => {
    return (
        <video controls={false} muted autoPlay loop>
            <source src={path} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoPlayer;

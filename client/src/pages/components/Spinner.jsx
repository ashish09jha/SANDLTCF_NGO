
import { RotatingLines } from 'react-loader-spinner';

const Loading = () => (
    <div className="w-screen h-screen z-50 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col">

        <div className="bg-gray-100 opacity-50 absolute top-0 left-0 right-0 bottom-0"></div>
        <RotatingLines
            strokeColor="#85ba51"
            strokeWidth="5"
            animationDuration="0.4"
            width="96"
            visible={true}
        />

    </div>
);

export default Loading;

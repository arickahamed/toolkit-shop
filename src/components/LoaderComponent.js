import React from "react";
import { BallTriangle } from "react-loader-spinner";

const LoaderComponent = () => {
    return (
        <div>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="rgb(223, 174, 83)"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </div>
    );
};

export default LoaderComponent;

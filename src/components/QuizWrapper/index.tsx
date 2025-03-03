import { Outlet } from 'react-router-dom'
import ProgressBar from '../ProgressBar'
import React from 'react';

const QuizWrapper:React.FC = () => {
    return (
        <div className="h-[100dvh] w-full p-4 self-center flex flex-col items-center px-5">
            <ProgressBar />
            <div className="mt-8 w-full h-full">
                <Outlet />
            </div>
        </div>
    )
}

export default QuizWrapper
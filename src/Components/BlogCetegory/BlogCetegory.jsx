import React from 'react';
import { SiBlogger } from 'react-icons/si';

const BlogCetegory = () => {
    return (
        <div className="shadow-lg px-3 my-3 rounded-md">
        <h1 className="font-semibold text-2xl py-5 border-b text-primary">Blog cetegory</h1>
        <div className="flex justify-between border-b hover:border-none hover:shadow-md hover:translate-x-1 px-3 rounded py-2 cursor-pointer">
            <div className="flex justify-center items-center ">
                <p className="text-primary">
                    <SiBlogger />
                </p>
                <p className="text-xl ml-4 hover:text-primary">
                    Dining Room
                </p>
            </div>
            <p>45</p>
        </div>
        <div className="flex justify-between border-b hover:border-none hover:shadow-md hover:translate-x-1 px-3 rounded py-2 cursor-pointer">
            <div className="flex justify-center items-center ">
                <p className="text-primary">
                    <SiBlogger />
                </p>
                <p className="text-xl ml-4 hover:text-primary">Living Room</p>
            </div>
            <p>98</p>
        </div>
        <div className="flex justify-between border-b hover:border-none hover:shadow-md hover:translate-x-1 px-3 rounded py-2 cursor-pointer">
            <div className="flex justify-center items-center ">
                <p className="text-primary">
                    <SiBlogger />
                </p>
                <p className="text-xl ml-4 hover:text-primary">Bed Room</p>
            </div>
            <p>67</p>
        </div>
        <div className="flex justify-between border-b hover:border-none hover:shadow-md hover:translate-x-1 px-3 rounded py-2 cursor-pointer">
            <div className="flex justify-center items-center ">
                <p className="text-primary">
                    <SiBlogger />
                </p>
                <p className="text-xl ml-4 hover:text-primary">
                    Table
                </p>
            </div>
            <p>32</p>
        </div>
        <div className="flex justify-between border-b hover:border-none hover:shadow-md hover:translate-x-1 px-3 rounded py-2 cursor-pointer">
            <div className="flex justify-center items-center cursor-pointer">
                <p className="text-primary">
                    <SiBlogger />
                </p>
                <p className="text-xl ml-4 hover:text-primary">Chair</p>
            </div>
            <p>72</p>
        </div>
        <div className="flex justify-between border-b hover:border-none hover:shadow-md hover:translate-x-1 px-3 rounded py-2 cursor-pointer">
            <div className="flex justify-center items-center cursor-pointer">
                <p className="text-primary">
                    <SiBlogger />
                </p>
                <p className="text-xl ml-4 hover:text-primary">Light</p>
            </div>
            <p>27</p>
        </div>
        <div className="flex justify-between border-b hover:border-none hover:shadow-md hover:translate-x-1 px-3 rounded py-2 cursor-pointer">
            <div className="flex justify-center items-center ">
                <p className="text-primary">
                    <SiBlogger />
                </p>
                <p className="text-xl ml-4 hover:text-primary">
                    Almari
                </p>
            </div>
            <p>22</p>
        </div>
    </div>
    );
};

export default BlogCetegory;
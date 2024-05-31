
import { CopyToClipboard } from 'react-copy-to-clipboard';
function RekeninSection() {
    return (

        <><section className="bg-white ">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-6xl md:text-7xl font-semibold mb-4 font-dancing-script text-blue-950 ">Amplop & Hadiah</h1>
                <p className="mt-4 text-gray-500 xl:mt-6 ">
                    Jika berkenan memberikan hadiah, bisa dikirim melalui rekening berikut:
                </p>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                    <div className="p-8 space-y-3 shadow-sm shadow-blue-400  rounded-xl">
                        <span className="inline-block text-blue-500 dark:text-blue-400">
                            <img className='w-26 h-10' src="https://4.bp.blogspot.com/-tceaeWKDv00/UNhHf_6AdZI/AAAAAAAAERE/hR3lYKZxCiQ/s1600/Logo+Bank+BRI.jpg" alt="" />
                        </span>

                        <h1 className="text-2xl font-semibold text-gray-700 capitalize ">Bank BRI</h1>

                        <p className="text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>
                        <div className='flex items-center gap-2'>

                            <CopyToClipboard text="0223123123133">

                                <a className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500  hover:underline hover:text-blue-600 dark:hover:text-blue-500">

                                    <i className="icon-clipboard text-white"></i>
                                </a>

                            </CopyToClipboard>
                            <h2 className='font-lato-thin underline cursor-pointer'>Klik disini</h2>
                        </div>
                    </div>

                    <div className="p-8 space-y-3 border-2 shadow-sm shadow-blue-400 rounded-xl">
                        <span className="inline-block text-blue-500 dark:text-blue-400">
                            <img className='w-26 h-10' src="https://cdn.5minvideo.id/images/logo/Logo-Dana-Png.png" alt="" />

                        </span>

                        <h1 className="text-2xl font-semibold text-gray-700 capitalize ">Dana</h1>

                        <p className="text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>

                        <div className='flex items-center gap-2'>

                            <CopyToClipboard text="0223123123133">

                                <a className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500  hover:underline hover:text-blue-600 dark:hover:text-blue-500">

                                    <i className="icon-clipboard text-white"></i>
                                </a>

                            </CopyToClipboard>
                            <h2 className='font-lato-thin underline cursor-pointer'>Klik disini</h2>
                        </div>
                    </div>

                    <div className="p-8 space-y-3 border-2 shadow-sm shadow-blue-400 rounded-xl">
                        <span className="inline-block text-blue-500 dark:text-blue-400">
                            <img className='w-26 h-10' src="https://3.bp.blogspot.com/-2D8ZpPxvI7M/Wq9f_rwOhAI/AAAAAAAAKAQ/8BCUm6JuGugFFaJXSIx6wz65lMq1Pj5tQCLcBGAs/s1600/Telkomsel.jpg" alt="" />

                        </span>

                        <h1 className="text-2xl font-semibold text-gray-700 capitalize ">Pulsa Telkomsel</h1>

                        <p className="text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>
                        <div className='flex items-center gap-2'>

                            <CopyToClipboard text="0223123123133">

                                <a className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500  hover:underline hover:text-blue-600 dark:hover:text-blue-500">

                                    <i className="icon-clipboard text-white"></i>
                                </a>

                            </CopyToClipboard>
                            <h2 className='font-lato-thin underline cursor-pointer'>Klik disini</h2>
                        </div>

                    </div>
                </div>
            </div>
        </section></>
    )
}

export default RekeninSection
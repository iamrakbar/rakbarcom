"use client"

import { useRef } from "react";
import { motion } from "framer-motion"
import Avatar from "@/components/avatar";
import Noise from "@/components/noise";
import Draggable from "@/components/draggable";

export default function Home() {
    const constraintsDraggableRef = useRef(null);

    return (
        <main className="w-full flex-auto">
            <motion.div ref={constraintsDraggableRef} className="relative grid place-items-center min-h-svh bg-blue-700 text-white overflow-hidden">
                <Noise />
                <div className="mx-auto w-full max-w-5xl lg:px-8">
                    <div className="relative max-w-3xl px-4 sm:px-8 lg:px-12 space-y-4 md:space-y-8">
                        <div className="flex flex-col md:flex-row-reverse items-start md:items-center gap-4 md:gap-8">
                            <Draggable label={'Avatar'} dragConstraints={constraintsDraggableRef}>
                                <Avatar />
                            </Draggable>
                            <Draggable label={'Name'} dragConstraints={constraintsDraggableRef}>
                                <h1 className="m-0 p-0 font-serif italic leading-none tracking-tight text-6xl md:text-9xl">Risky Akbar</h1>
                            </Draggable>
                        </div>
                        <Draggable label={'Work'} dragConstraints={constraintsDraggableRef}>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 md:w-12 md:h-12" fill="currentColor" role="img" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M380 270h-20v20h-60v40h-20v20H40v-20H20V50h280v40h60v20h20v160Zm-170-20H110v20h100v-20Zm130-120h-40v120h40V130ZM110 230H90v20h20v-20Zm120 0h-20v20h20v-20Zm20-20h-20v20h20v-20Zm-160 0H70v20h20v-20Zm30-100h-20v40h20v-40Zm110 0h-20v40h20v-40Z" />
                                </svg>
                                <h3 className="font-vt323 uppercase tracking-tight text-2xl md:text-6xl ml-2 md:ml-4">
                                    <span>Designer</span>
                                    <span className="font-serif italic text-xl md:text-5xl"> & </span>
                                    <span>Developer</span>
                                </h3>
                            </div>
                        </Draggable>
                        <Draggable label={'Description'} dragConstraints={constraintsDraggableRef}>
                            <p className="font-mono max-w-2xl">
                                {`I'm an independent software designer and developer with a focus on crafting web and mobile applications.`}
                            </p>
                        </Draggable>
                        <Draggable label={'Socials'} dragConstraints={constraintsDraggableRef}>
                            <div className="font-mono grid grid-flow-col gap-4 md:gap-6">
                                <a href="https://github.com/iamrakbar" title="GitHub" className="flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <title>GitHub</title>
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                    </svg>
                                </a>
                                <a href="https://x.com/iamrakbar" title="X" className="flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <title>X</title>
                                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                    </svg>
                                </a>
                                <a href="https://instagram.com/iam_rakbar" title="Instagram" className="flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <title>Instagram</title>
                                        <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                                    </svg>
                                </a>
                                <a href="https://dribbble.com/rakbar" title="Dribbble" className="flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <title>Dribbble</title>
                                        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
                                    </svg>
                                </a>
                                <a href="https://id.linkedin.com/in/akbarr" title="LinkedIn" className="flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <title>LinkedIn</title>
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a href="mailto:mail@rakbar.com" title="Mail" className="flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <title>Mail</title>
                                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                    </svg>
                                </a>
                            </div>
                        </Draggable>
                        <div>
                            <Draggable label={'Message'} dragConstraints={constraintsDraggableRef}>
                                <p>
                                    <span className="">♺</span>
                                    <span className="font-mono ml-2 opacity-70">Please Recycle</span>
                                </p>
                            </Draggable>
                        </div>
                    </div>
                </div>
            </motion.div>
            {/* <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div>
                        <h2 className="block font-display text-base font-semibold text-neutral-950">Projects</h2>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-40">

            </div> */}
        </main>
    );
}

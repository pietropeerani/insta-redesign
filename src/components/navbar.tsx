export default function Navbar() {
    return (
        <div className="fixed z-50 bottom-5 left-0 w-full px-2">
            <div className="flex justify-between bg-white rounded-2xl p-6">
                <div className="h-6 w-6 flex items-center justify-center">
                    <svg viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41.6535 21.2688V38.2332C41.6535 39.8901 40.3103 41.2332 38.6535 41.2332H28.0632C27.9454 41.2332 27.8499 41.1377 27.8499 41.0199V31.5451C27.8499 28.2573 25.1847 25.5921 21.8969 25.5921C18.6615 25.5921 16.0185 28.1762 15.9455 31.4109L15.7288 41.0199C15.7261 41.1385 15.6292 41.2332 15.5106 41.2332H5.29615C3.63929 41.2332 2.29615 39.8901 2.29615 38.2332L2.29614 21.2688C2.29614 20.4731 2.61221 19.7101 3.17482 19.1474L19.8535 2.46879C21.0251 1.29722 22.9245 1.29722 24.0961 2.46879L40.7748 19.1474C41.3374 19.7101 41.6535 20.4731 41.6535 21.2688Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className="h-6 w-6 flex items-center justify-center">
                    <svg viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.4">
                            <circle cx="18.6975" cy="18.7573" r="16.0441" stroke="black" stroke-width="4" />
                            <path d="M39.8073 40.8674L30.1855 30.8447" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </svg>
                </div>
                <div className="h-6 w-6 flex items-center justify-center">
                    <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.4">
                            <rect x="2.30737" y="1.97028" width="39.64" height="39.6401" rx="10.5" stroke="black" stroke-width="3" />
                            <path d="M19.2228 31.4697V22.08L27.8846 26.5201L19.2228 31.4697Z" fill="black" stroke="black" stroke-width="2.32176" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.28564 12.902H41.5648" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.5221 12.7139L12.2206 2.74438" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M31.125 12.7139L24.8235 2.74438" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </svg>
                </div>
                <div className="h-6 w-6 flex items-center justify-center rounded-full overflow-hidden">
                    <img src="/profile.png" alt="profile" />
                </div>
            </div>
        </div>
    )
}
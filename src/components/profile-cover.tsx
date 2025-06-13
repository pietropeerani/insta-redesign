export default function ProfileCover() {
    return (
        <div className="bg-black/35 backdrop-blur-2xl p-2 rounded-3xl text-white m-4 mt-32">
            <div className="flex p-2 items-center">
                <div className="w-1/3 px-4">
                    <div className="rounded-full overflow-hidden">
                        <img src="/profile.png" alt="profile image" />
                    </div>
                </div>
                <div className="w-2/3 px-4">
                    <div className="flex justify-between">
                        <div style={{fontFamily: 'Instagram Sans'}}>
                            <span className="!text-3xl font-bold">30.2k</span><br />
                            followers
                        </div>
                        <div>
                            <button className="bg-white text-black px-6 py-3 font-bold rounded-full cursor-pointer">Follow</button>
                        </div>
                    </div>
                    <div>
                        {/* followed by */}
                    </div>
                </div>
            </div>
            <div className="text-white bg-white/20 backdrop-blur-lg rounded-2xl py-4 px-6">
                <p>Host di <span className="font-bold cursor-pointer"><span className="bg-[linear-gradient(-45deg,#F3C94E,#EE8131,#E84379,#EA356A,#6E3BF1,#C128BF)] bg-clip-text text-transparent mr-0.5">@</span>caffè_design</span><br />
                    Progetto, rido, fallisco e documento tutto qui.
                </p>
            </div>
        </div>
    )
}
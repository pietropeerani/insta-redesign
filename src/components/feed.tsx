const Feed = () => {
    const images = [
        '/feed/1.png',
        '/feed/2.png',
        '/feed/3.png',
        '/feed/4.png',
        '/feed/5.png',
        '/feed/6.png',
        '/feed/7.png',
        '/feed/8.png',
        '/feed/9.png'
    ];

    return (
        <div className="columns-2 gap-0 px-2">
            {images.map((src, index) => (
                <div
                    key={index}
                    className="p-2"
                >
                    <img
                        src={src}
                        alt={`image-${index}`}
                        className="w-full h-auto object-contain rounded-3xl"
                    />
                </div>
            ))}
        </div>
    );
};

export default Feed;

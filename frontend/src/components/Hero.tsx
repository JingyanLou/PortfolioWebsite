const Hero = () => {
    return (
        <section className="relative w-full h-screen bg-white">
            {/* Left Content */}
            <div className="absolute left-0 top-0 w-3/5 h-full p-16">
                {/* Name Section */}
                <div className="w-full">
                    <h1 className="text-8xl font-bold tracking-tight leading-none">
                        FOREST LOU
                    </h1>
                    <h2 className="text-4xl mt-6 w-4/5">
                        SOFTWARE ENGINEER
                    </h2>
                </div>

                {/* Japanese Quote */}
                <div className="mt-16">
                    <p className="text-2xl leading-relaxed">
                        あなたが十分に努力すれば、<br />
                        神々が訪れるでしょう。
                    </p>
                </div>

                {/* Navigation */}
                <div className="absolute bottom-16 left-16 w-4/5">
                    <h3 className="text-sm text-gray-400 mb-8 tracking-widest">
                        NAVIGATION
                    </h3>
                    <nav>
                        {['PROJECTS', 'WORK EXPERIENCE', 'MY SERVICE', 'CONTACT ME'].map((item, index) => (
                            <div
                                key={index}
                                className="border-b border-gray-200 py-4 group cursor-pointer"
                            >
                                <div className="flex justify-between items-center">
                                    <span className="text-xl tracking-wide">{item}</span>
                                    <span className="text-gray-400 transform group-hover:translate-x-2 transition-transform duration-200">
                                        →
                                    </span>
                                </div>
                            </div>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Right Image Section */}
            <div className="absolute right-0 top-0 w-2/5 h-full">
                <img
                    src="/images/Forest.jpg"
                    alt="Forest Lou"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
};

export default Hero;


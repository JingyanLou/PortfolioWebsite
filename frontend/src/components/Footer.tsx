
const Footer = () => {
    return (
        <footer className="w-full h-[40vh] bg-black text-white px-16 py-12">
            <div className="space-y-4 font-['Helvetica']" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                {/* Title */}
                <h2 className="text-5xl font-bold mb-8" style={{ letterSpacing: '0.02em' }}>
                    CONTACT ME
                </h2>

                {/* Contact Information */}
                <div className="space-y-4">
                    <p className="text-xl font-normal">
                        <a href="mailto:loujingyan226@gmail.com">
                            loujingyan226@gmail.com
                        </a>
                    </p>

                    <p className="text-xl font-normal">
                        0404352260
                    </p>

                    <p className="text-xl font-normal">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            Github
                        </a>
                    </p>

                    <p className="text-xl font-normal">
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                            Linkedin
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
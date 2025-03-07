export default function AboutComponent() {
    return (
        <section className="about-container">
            <h3>ABOUT</h3>
            <hr className="mar-bot-3" />
            <h4 className="mar-bot-3">Over the years, I have worked on customer-facing products with a strong focus on excellent user experience and accessibility</h4>
            <section className="paragraphs-container">
                <p>
                    Self-taught software engineer with a strong knowledge of TypeScript, Swift, and Java. I am passionate about working on meaningful projects that have a positive impact on people's lives.
                </p>
                <p>
                    I have hands-on experience working on high-traffic, customer-facing products and prioritize building clean, maintainable codebases that enable continuous improvement and scalability.
                </p>
                <p>
                    I hold a Bachelor of Business Administration from Hult International Business School in London and an International Baccalaureate from Leysin American School in Switzerland.
                </p>
                <p>
                    I am fluent in English and Russian and have experience working and studying in an international environment.
                </p>
            </section>
            <div className="links-about">
                <div>
                    <div className="about-role-container">
                        <p>Product Development</p>
                        <p>UX/UI & Design</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
import { ActionButtonProps } from "../models/button-custom-model";
import ActionButtonComponent from "./buttons/action-button-component"

export default function AboutComponent() {

    const props: ActionButtonProps = {
        firstText: "Explore LinkedIn",
        icon: "M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
    }


    const arrayParagraphs = [
        "Self-taught software engineer with a strong knowledge of TypeScript, Swift, and Java. I am passionate about working on meaningful projects that have a positive impact on people's lives.",
        "I have hands-on experience working on high-traffic, customer-facing products and prioritize building clean, maintainable codebases that enable continuous improvement and scalability.",
        "I hold a Bachelor of Business Administration from Hult International Business School in London and an International Baccalaureate from Leysin American School in Switzerland.",
        "I am fluent in English and Russian and have experience working and studying in an international environment."
    ];

    const paragraphs = arrayParagraphs.map((p, index) =>
        <p key={index}>
            {p}
        </p>
    );

    const title = "Over the years, I have worked on customer-facing products with a strong focus on excellent user experience and accessibility";

    const role =
        <div>
            <p>Product Development</p>
            <p>UX/UI & Design</p>
        </div>

    return (
        <section id="about" className="about-container content-container">
            <h3 className="title-section">ABOUT</h3>
            <hr className="mar-bot" />
            <div className="about-grid-container">
                <div className="about-grid-title">
                    <h4 className="mar-bot grid-about-title">{title}</h4>
                </div>
                <div className="about-grid-text">
                    <section className="paragraphs-container grid-about-paragraph">
                        {paragraphs}
                    </section>
                </div>
                <div className="about-grid-links">
                    <div className="grid-links">
                        <div className="role-link-container">{role}</div>
                        <div className="contact-link-container">
                            <ActionButtonComponent firstText={"say hello"} secondText={"privet.dev@pm.me"} />
                        </div>
                        <div className="explore-link-container">
                            <ActionButtonComponent {...props} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
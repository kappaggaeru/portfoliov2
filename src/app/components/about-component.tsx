import { ActionButtonProps } from "../models/button-custom-model";
import ActionButtonComponent from "./buttons/action-button-component"

export default function AboutComponent() {

    const props: ActionButtonProps = {
        texts: ["Explore LinkedIn"],
        icon: {
            path: "M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
        }
    }

    return (
        <section className="about-container content-container">
            <h3>ABOUT</h3>
            <hr className="mar-bot-3" />
            <div className="grid-about">
                <h4 className="mar-bot-3 grid-about-title">Over the years, I have worked on customer-facing products with a strong focus on excellent user experience and accessibility</h4>
                <section className="paragraphs-container grid-about-paragraph">
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
                <div className="links-about grid-about-buttons">
                    <div>
                        <div className="about-role-container">
                            <p>Product Development</p>
                            <p>UX/UI & Design</p>
                        </div>
                        <div className="w-fit-content">
                            <ActionButtonComponent texts={["Say hello", "privet.dev@pm.me"]} />
                        </div>
                    </div>
                    <a href="https://www.linkedin.com/in/mitk8" target="_blank" className="link-w-icon">
                        <ActionButtonComponent {...props} />
                    </a>
                </div>
            </div>
        </section>
    );
}
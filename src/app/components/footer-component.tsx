import ActionButtonComponent from "./buttons/action-button-component";

const arrowIcon = "M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z";

export default function FooterComponent() {
    return (
        <footer id="contact">
            <hr className="mar-bot" />
            <div className="footer-grid">
                <div className="footer-title-container">
                    <h4>Let's Collaborate</h4>
                    <a className="contact-link-footer">
                        <ActionButtonComponent texts={["privet.dev@pm.me"]} />
                    </a>
                </div>
                <div className="footer-subtitle-container">
                    <div className="footer-links-container">
                        <a href="">
                            <ActionButtonComponent texts={["GitHub"]} icon={arrowIcon} />
                        </a>
                        <a href="">
                            <ActionButtonComponent texts={["LinkedIn"]} icon={arrowIcon} />
                        </a>
                        <a href="">
                            <ActionButtonComponent texts={["Medium"]} icon={arrowIcon} />
                        </a>
                    </div>
                    <p>© ANDREY MITKO 2025</p>
                </div>
            </div>
        </footer>
    );
}
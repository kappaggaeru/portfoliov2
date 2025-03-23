import { ActionButtonProps } from "@/app/models/button-custom-model";

export default function ActionButtonComponent({ texts, icon, styleClass }: ActionButtonProps) {
    const Texts = texts?.map((text, index) =>
        <span key={index}>
            {text}
            <br />
        </span>
    );

    const Icon = (
        icon &&
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="remixicon css-1tetme1 svg-icon">
            <path d={icon.path}></path>
        </svg>
    );

    return (
        <button className={"action-button-container " + styleClass}>
            <div className={icon ? "d-flex flex-row" : ""}>
                {Texts}
                {icon?.path && Icon}
            </div>
            <div className="button-bottom-container">
                <div className="button-bottom-border"></div>
            </div>
        </button>
    );
}
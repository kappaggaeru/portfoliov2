import { ActionButtonProps } from "@/app/models/button-custom-model";

export default function ActionButtonComponent({ firstText, secondText, icon, styleClass }: ActionButtonProps) {
    const Texts =
        <p className={"action-button-text " + styleClass}>
            <span>{firstText}</span>
            {secondText && <span>{secondText}</span>}
        </p>
        ;

    const Icon = (
        icon &&
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="remixicon css-1tetme1 svg-icon">
            <path d={icon}></path>
        </svg>
    );

    return (
        <button className={"action-button-container"}>
            <div className={icon ? "d-flex flex-row" : ""}>
                {Texts}
                {icon && Icon}
            </div>
            <div className="button-bottom-container">
                <div className="button-bottom-border"></div>
            </div>
        </button>
    );
}

export default function ActionButtonComponent({ text }: { text?: string}) {
    return (
        <div className="action-button-container">
            <span>{text}</span>
            <div className="button-bottom-container">
                <div className="button-bottom-border"></div>
            </div>
        </div>
    );
}
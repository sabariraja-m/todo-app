interface ButtonProps {
    onClick: () => void;
}
export const Button = (props: ButtonProps) => {
    const { onClick } = props;
    const handler = () => {
        console.log("hey");
    };
    if (onClick)
        return (
            <Button onClick={handler} data-testid="button-test">
                button
            </Button>
        );
    return (
        <button onClick={onClick} data-testid="button-test">
            button
        </button>
    );
};

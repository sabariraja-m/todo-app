"use client"
interface ButtonProps {
    onClick?: () => void,
    primary?: boolean,
    label?: string,
    size?: string,
}
export const Button = (props: ButtonProps) => {
    const { onClick, label } = props

    return (
        <button onClick={onClick} data-testid="button-test">{label}</button>
    )
}
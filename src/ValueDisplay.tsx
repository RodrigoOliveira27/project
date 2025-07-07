

interface IValueDisplayProps {
    title: string,
    value?: string
}


const ValueDisplay = ({ title, value }: IValueDisplayProps) => {
    return (
        <div>{title}</div>
    )
}

export default ValueDisplay;
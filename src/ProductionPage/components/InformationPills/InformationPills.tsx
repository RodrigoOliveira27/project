
interface IInformationPillsProps {
    src: string;
}

const InformationPills = ({ src }: IInformationPillsProps) => {
    return (
        <div>
            <img src={src}/>
        </div>
    )
}

export default InformationPills;
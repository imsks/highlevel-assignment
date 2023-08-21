interface DraggbleItemProps {
    label: string
}

const DraggbleItem = ({ label }: DraggbleItemProps) => {
    return (
        <li draggable='true'>
            <span>{label}</span>
            <i className='icon icon-resize-plus-2'></i>
        </li>
    )
}

export default DraggbleItem

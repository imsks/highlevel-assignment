interface AddNodeProps {
    isStart?: boolean
    isEnd?: boolean
}

const AddNode = ({ isStart = false, isEnd = false }: AddNodeProps) => {
    return (
        <li>
            <div
                className={`${isStart && "--start"} workflow_card--add ${
                    isEnd && "--end"
                }`}>
                <a href='#s'>
                    <i className='icon icon-plus'></i>
                </a>
            </div>
        </li>
    )
}

export default AddNode

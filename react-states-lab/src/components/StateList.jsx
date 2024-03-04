import { useNavigate } from "react-router-dom"

const StateList = (props) => {
    console.log(props.stateItems)

    let navigate = useNavigate()

    const showStateItem = (stateItem) => {
        navigate(`${stateItem.name}`)
    }

    return (
        <div>
            <h2>State list</h2>
            <div className="stateList">
                {
                props.stateItems.map((stateItem) => (
                <div className='stateListItem' onClick={() => showStateItem(stateItem)} key={stateItem.name}>
                    <h3>{stateItem.name}</h3>
                </div>
                ))}
            </div>
        </div>
    )
    
}
export default StateList
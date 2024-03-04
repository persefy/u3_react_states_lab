import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const StateDetails = (props) => {
    
    const [stateItem, setStateItem] = useState('')

    let { name } = useParams()
    
    useEffect(() => {
    let selectedStateItem = props.stateItems.find((stateItem)=>stateItem.name === (name))
    
    setStateItem(selectedStateItem)
    }, [props.stateItems, name])

    return stateItem ? (
        <div key={stateItem.name}>
            <h3>{stateItem.name} ({stateItem.abbreviation})</h3>
            <div><span className='label'>Capital:</span> {stateItem.capital}</div>
            <div><span className='label'>Incorporated:</span> {stateItem.incorporation_date}</div>
            <div><span className='label'>Timezone:</span> {stateItem.timezone}</div>
            <div className='label'>Bordering States:</div>
            <ul>
                { stateItem.borders.map((border) => (
                    
                    <li key={border.id}>{border}</li>
                 )
                )}
            </ul>
            <div><span className='label'>Pizza Quality:</span> {stateItem.quality_of_pizza}</div>
          <Link to="/">Back</Link>
        </div>
      
      ) : <h1>State not found</h1>; //could also be null
    
}
export default StateDetails
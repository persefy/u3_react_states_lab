import { useState } from 'react'
import states from '../data/states'
import { Route, Routes } from 'react-router-dom'
import StateList from './StateList'
import StateDetails from './StateDetails'


const Main = () => {
    const [stateItems, setStateItems] = useState(states)

    return (
        <main>
            <Routes>
                <Route path="/" element={ <StateList stateItems={stateItems.states} /> } />
                <Route path="/:name" element={ <StateDetails stateItems={stateItems.states} />} />
            </Routes>
        </main>
    )
    
}
export default Main
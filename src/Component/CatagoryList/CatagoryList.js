import React, { useContext, useState } from 'react'
import { stateUpdater } from '../../Utils/utils'
import GlobalContext from '../GlobalContext/GlobalContext'
import api from '../../Utils/api'
import './catagorylist.css'




function CatagoryList() {

    const [globalState, setGlobalState] = useContext(GlobalContext)
    const [activeTab, setActiveTab] = useState();



    function onCatagoryClicked(e) {

        const newCatagoryState = stateUpdater(globalState, { isLoading: true })
        setGlobalState(newCatagoryState)

        const clickedItem = e.target.id;
        setActiveTab(clickedItem)

        api.get(`/api?catagory=${e.target.id}`)
            .then(res => {

                console.log(res);

                const products = res.data.products || []
                //console.log('ressss',res.data);
                const updatedProductState = stateUpdater(globalState, { products, isLoading: false })
                setGlobalState(updatedProductState)
            })
            .catch(e => {
                const errorState = stateUpdater(globalState, { isLoading: false, error: e.message })
                setGlobalState(errorState)
            })


    }
    return (
        <ul className='catagory-list'>
            {globalState.catagories.map(catagory => {
                if(activeTab === catagory._id){
                    return (<li className='catagory-li active-list' id={catagory._id} key={catagory._id} onClick={onCatagoryClicked}>{catagory.name}</li>)
                }
                return (<li className='catagory-li' id={catagory._id} key={catagory._id} onClick={onCatagoryClicked}>{catagory.name}</li>)
            })}
        </ul>
    )
}

export default CatagoryList

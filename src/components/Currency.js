import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const { currency, dispatch } = useContext(AppContext);
    const handleCurrencyChange = (event) => {
        const newCurrencyValue = event.target.value;

        dispatch ({
            type: 'CHG_CURRENCY',
            payload: newCurrencyValue,
        })
    }

    const dropdownStyle = {
        borderRadius: '5px', 
        backgroundColor: 'lightgreen',
        border: 'none',
        padding: '.5rem',
        paddingLeft: '1rem'
    }

    return (
        <div className='alert alert-secondary'>
            <select className="custom-select" id="inputGroupCurrency" value={ currency } onChange={handleCurrencyChange} 
                style={dropdownStyle}>
                <option id="initial" style={{display: 'none', color: 'white'}}selected="selected">Currency (£ Pound)</option>
                <option value='$' name="dollar"> $ Dollar</option>
                <option value='£' name="pound"> £ Pound</option>
                <option value='€' name="euro"> € Euro</option>
                <option value='₹' name="ruppee"> ₹ Ruppee</option>
                
            </select>
        </div>
    );
}

export default Currency;
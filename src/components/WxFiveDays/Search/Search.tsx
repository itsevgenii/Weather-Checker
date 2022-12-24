import {ChangeEvent} from 'react'
import shortid from 'shortid'

type optionType = {
    name : string
    country: string
    lat: number,
    lon: number
    }

type Props = {
    input : string
    options: []
    handleChange: (e: ChangeEvent<HTMLInputElement>)=> void
    handleOptionSelect: (option: optionType) => void
    handleSubmit: ()=> void
}

const Search = ({input, options, handleChange, handleOptionSelect, handleSubmit}:Props):JSX.Element => {
    // const {input, options, handleChange, handleOptionsSelect, handleSubmit} = props
    
    return (
        <main className="flex justify-center">
        <section>
        <h1>Weather Forecast</h1>
        <p>Type in the place and select the right one from drop down menu</p>
        </section>
        <div>
        <input type="text" value={input} className="" onChange={(e)=>handleChange(e)}/>
        <ul>
        {options.map((option: optionType) => <li key={shortid.generate()}><button onClick={()=>handleOptionSelect(option)}>{option.name}, {option.country}</button></li>)}
        {/* {options.map((option: {name: string}) => <li key={shortid.generate()}><button onClick={(e)=>handleOptionSelect(option)}>{option.name}</button></li>)} */}
        </ul>
        <button onClick={handleSubmit}>Search</button>
        </div>
      </main>
    )
}

export default Search
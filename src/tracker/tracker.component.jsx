import { useState } from 'react'
import data from '../../public/demons.json'
import { TrackerRootContainer, TrackerListContainer, TrackerFields } from './tracker.styles';

function Tracker() {
  const [total, setTotal] = useState(0);

  let handleOnChange = (id) => {
    let checkboxes = Array.from(document.querySelectorAll('input[id='+id+']'));
    let state = true
    checkboxes.map((value) => {
      value.checked = state
    })
    state ? setTotal(total +1) : setTotal(total -1)
  }

  let firstLetterUppercase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);

  }

  let toggleFieldsBox = (id) => {
    var current = document.getElementById(id);
    console.log(current.className)
    console.log(current.className.includes("active"))
    if(current.className.includes("active"))
      current.className = "";
    else{
        current.className += "active";
    }
  }

  return (
    <TrackerRootContainer>
      <header>
        <h3>Shin Megami Tensei - Demon Tracker</h3>
      </header>
      <TrackerListContainer>
        {Object.entries(data).map(([area, demons]) => {
          return (<fieldset>
          <legend id={area} onClick={() => toggleFieldsBox(area)}>{area}:</legend>

            <div className='tracker-fields'>
              {demons.map((value) => {
                return (<div>
                  <input type="checkbox" id={value} name={value} onClick={() => handleOnChange(value)} />
                  <label for={value}>{firstLetterUppercase(value)}</label>
                </div>)
              })}
            </div>
          </fieldset>)
        })}
      </TrackerListContainer>
      <br></br>
      <footer>
        <h3>Total: {total} / 155</h3>
      </footer>
    
    </TrackerRootContainer>
  )
}

export default Tracker
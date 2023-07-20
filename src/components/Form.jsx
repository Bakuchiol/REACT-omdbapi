import React from 'react'
import { useState, useEffect } from 'react'

function Form(props) {
    // set form data in useState pass an object
    const [formData, setFormData] = useState({
        searchTerm: ''
        // searchTerm is event.target.name
    })

    // functions -- manage the input
    // handle change :: when input value is changed, let's track it
    // takes an event : interacted with and values are being put in input
    // in even something happens to form, setForm data to spread ...
    // target.name is form take it and make its value as event value?
    const handleChange = (event) => {
        // change existing formData to event target(actual input itself and .name)
        //prevent page from refreshing on form submission
        // event.target.name also has data of event.target.value
        // ...formdata :: object/ replicate it but now the atarget as it changes, it is now se
        setFormData({...formData, [event.target
        .name]:event.target.value})
    }

    // when submit button is pressed, store value in input
    const handleSubmit = (event) => {
        // prevent default() : submit automatically goes to other -- this will stop default action and tell where to submit it
        event.preventDefault()
        props.movieSearch(formData.searchTerm)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        onChange={handleChange}
        value={formData.searchTerm}
        name='searchTerm'
        type='text'/>

        {/* to click in order for submit to work */}
        <input type='submit' value='submit'/> 
      </form>
    </div>
  )
}

export default Form

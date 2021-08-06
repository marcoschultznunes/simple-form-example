profileForm = document.getElementById('profile-form')
formInputs = document.getElementsByClassName('form-input')

profileForm.onsubmit = (e) => {
    e.preventDefault()
    
    const profile = {}

    Array.from(formInputs).forEach(element => {
        let value = element.value

        if(element.classList.contains('radio-group')){ // Getting value from radio groups
            value = Array.from(element.children).find(e => e.checked).value
        }
        if(element.getAttribute('type') == 'checkbox'){ // From checkboxes
            value = element.checked ? true : false
        }

        profile[element.getAttribute('name')] = value
    });

    console.log(profile)
}

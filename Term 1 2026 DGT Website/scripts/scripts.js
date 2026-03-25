

// every time there is a click this function runs
document.addEventListener('click', e =>{
    // returns a boolean depending on whether the target has the attribute data-dropdown-button
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    // If we are not clicking on the dropdown button (the thing that opens the dropdown in the first place) but are clicking somewhere else on the dropdown return/do nothing
    if (!isDropdownButton && e.target.closest('[data-dropdown]') !=null) return;


    // creates the currentDropdown variable
    let currentDropdown;
    // if isDropdownButton = true then set currentDropdown to the closest parent/grandparent then
    //  Toggles the active class
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    }
    

    // close all dropdowns except the dropdown that you clicked on. If you haven't clicked on a dropdown then it closes all dropdowns
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
    })

});

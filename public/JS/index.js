/*Start of Navgation active status*/
function setActive(element) 
{
    const navItems = document.querySelectorAll('.nav_pages li');
    navItems.forEach(item => {
      item.classList.remove('active');
    });
    element.parentElement.classList.add('active');
}
/*ENd of Navgation active status*/

/*Article carsouel*/


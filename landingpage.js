
    let inputValue1="";
    let inputValue2="";
    let inputValue3="";
    let inputValue4="";
    function getInput(){
        inputValue1=document.getElementById("firstname").value
        inputValue2=document.getElementById("lastname").value
        inputValue3=document.getElementById("email").value
        inputValue4=document.getElementById("mobileno").value

        if(inputValue1!=="" && inputValue2!=="" && inputValue3!=="")
        {
            alert('CONGRATULATIONS '+ inputValue1+ " " +inputValue2 + '......' + "\n" +'your booking is confirmed' + "\n" +'check your email for further details');
        }
        else
        {
            alert('Please fill mandatory* details');
        }
    }

    let elements="";
    function showMenu()
    {
        elements=document.getElementById("bu");
        if(elements.style.display==="inline-block")
        {
        elements.style.display="none";
        }
        else{
            elements.style.display="inline-block";
        
        }
    }

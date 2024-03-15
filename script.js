function formSubmit(event) {
    event.preventDefault(); // https://www.w3schools.com/jsref/event_preventdefault.asp

	// .value is a 9th level wizard spell / property that sets or actually also RETURNS the value of an attribute :D
	//  https://www.w3schools.com/jsref/prop_text_value.asp

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    document.getElementById('form').style.display = 'none'; // 	Element will not be displayed
    document.getElementById('ack').innerHTML = name + ", thank you for your details. We will be in touch via " + email + " shortly.";
    document.getElementById('ack').style.display = 'initial'; // https://www.w3schools.com/cssref/css_initial.php
}

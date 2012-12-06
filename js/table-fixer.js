var color_date = new Date(),
	color;

//is it Tuesday? Tuesdays suck. Make the tables ugly to reflect this
if ( 2 === color_date.getDay() ) {
	color = '#665d2f';
} else {
	color = 'magenta';
}

//get all the tds and surround them with beauty
//NB: but not on Tuesdays, see above
var cells = document.getElementsByTagName('td');

//sexytime
for( var i in cells ) {
	if( cells[ i ].style ) {
		cells[ i ].style.border = '10px solid ' + color;
	}
}
a = function (){

	setTimeout(

		function function_name (argument) {
			console.log(1);
			a();
		}
	)	
}

a();


//your JS code here. If required.
	let output="";
	n=1;
	while(n<=20){
		if(n%3==0 && n%5==0){
			output+="FizzBuzz\n"
		}
		else if(n%3==0){
			output+="Fizz\n"
		}
		else if(n%5==0){
			output+="Buzz\n"
		}
		else{
			output+=n.toString()+"\n";
		}
		n++;
	}
	window.alert(output);
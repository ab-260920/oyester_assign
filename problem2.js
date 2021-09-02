
function addLeadingZeros(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function changeAndAppendTime(str)
{
	var h1 = Number(str[1] - '0');
	var h2 = Number(str[0] - '0');
	var hh = (h2 * 10 + h1 % 10);
    
    let final_Arr = "";

	if (str[8] == 'P') {
		if (hh == 12) {
			final_Arr = final_Arr.concat("12");
			for (var i = 2; i <= 7; i++)
				final_Arr = final_Arr.concat(str[i]);
		}
		else {
			hh = hh + 12;
			final_Arr = final_Arr.concat(hh);
			for (var i = 2; i <= 7; i++)
				final_Arr = final_Arr.concat(str[i]);
		}
	} else {
        if (hh == 12) {
            final_Arr = final_Arr.concat("00");
			for (var i = 2; i <= 7; i++)
            	final_Arr = final_Arr.concat(str[i]);
		}
		else
		{
			for (var i = 0; i <= 7; i++)
            	final_Arr = final_Arr.concat(str[i]);
		}
	}
    
    var time = final_Arr.split(':');

    var hour = Number(time[0]);
    var min = Number(time[1]);
    var sec = Number(time[2]);
    
    sec = sec + 45;
    if(sec>=60) {
    	sec = sec%60;
        min = min +1;
    }
    min = min + 45;
    if(min>=60) {
    	min = min%60;
        hour = hour +1;
        
        if(hour == 24) {
        	hour = 0;
        }
    }
    
    document.write(addLeadingZeros(hour, 2), ":", addLeadingZeros(min, 2), ":", addLeadingZeros(sec, 2));
}

// Input your time below

	var str = "12:01:00PM";
	changeAndAppendTime(str);

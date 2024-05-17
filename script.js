let sec=0
let min=0
let hrs=0

let displaysec=0
let displaymin=0
let displayhrs=0

let status='stopped'
let interval=''

function display()
{
    sec++
    if(sec/60==1)
        {
            sec=0
            min++
            if(min/60==1)
                {
                    min=0
                    hrs++
                }
        }
        if(sec<10)
            {
                displaysec="0"+sec.toString()
            }
            else
            {
                displaysec=sec
            }
        
            if(min<10)
                {
                    displaymin="0"+min.toString()
                }
                else
                {
                    displaymin=min
                }  
                
                if(hrs<10)
                    {
                        displayhrs="0"+hrs.toString()
                    }
                    else
                    {
                        displayhrs=hrs
                    } 

        document.getElementById('display').innerHTML=displayhrs+":"+displaymin+":"+displaysec
}

function start()
{
    if (status === 'stopped') {
        interval = window.setInterval(display, 1000);
        status = 'started';
    }
}

function stop() {
    if (status === 'started') {
        window.clearInterval(interval);
        status = 'stopped';
    }
}

function reset() {
    window.clearInterval(interval);
    sec = 0;
    min = 0;
    hrs = 0;
    document.getElementById('display').innerHTML = "00:00:00";
    status = 'stopped';
}

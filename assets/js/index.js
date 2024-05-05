{   
    // Grabbing all buttons using dom methods
    
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const resetButton = document.getElementById('resetButton');

    // Adding Event Listeners to all three buttons

    startButton.addEventListener('click', function(e){
        e.preventDefault();
        handleStart();
    });

    stopButton.addEventListener('click', function(e){
        e.preventDefault();
        handleStop();
    });

    resetButton.addEventListener('click', function(e){
        e.preventDefault();
        handleReset();
    });

    let timerCount = 0;
    let timer;
    const seconds = document.querySelector('.seconds');
    const minutes = document.querySelector('.minutes');

    function handleStart(){
        timer = setInterval(function(){
            timerCount += 1;
            displayTimer(false, timerCount);
        }, 1000)
    }

    function handleStop(){
        clearInterval(timer);
    }

    function handleReset(){
        clearInterval(timer);
        displayTimer(true)
        timerCount = 0;
    }

    function displayTimer(resetTimer, tC){
        if(resetTimer){
            seconds.innerHTML = '00';
            minutes.innerHTML = '00';
            return;
        }

        let minute = Math.floor(tC / 60);
        let second = tC % 60;

        seconds.innerHTML = second < 10 ? '0' + second : second;
        minutes.innerHTML = minute < 10 ? '0' + minute : minute;
    }
}
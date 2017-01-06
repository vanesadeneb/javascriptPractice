function Timer(fn, time) {
    var timerObj = setInterval(fn, time);

    this.stop = function() {
        if (timerObj) {
            clearInterval(timerObj);
            timerObj = null;
        }
        return this;
    }

    // start timer using current settings (if it's not already running)
    this.start = function() {
        if (!timerObj) {
            this.stop();
            timerObj = setInterval(fn, time);
        }
        return this;
    }

    // start with new interval, stop current interval
    this.reset = function(newTime) {
        time = newTime;
        return this.stop().start();
    }
}
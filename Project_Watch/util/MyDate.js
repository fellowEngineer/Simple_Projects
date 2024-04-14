module.exports = class MyDate
{
    constructor()
    {
        const date = new Date();
        this.System_Date = {
            Years : date.getFullYear(),
            Months : (date.getMonth()+1),
            Days : date.getDate(),
            Houres : date.getHours(),
            Minutes : date.getMinutes(),
            Seconds : date.getSeconds()
        }
    }

    refresh ()
    {

    }

    getYears() {return this.System_Date.Years;} 
    getMonths() 
    {
        if(this.System_Date.Months < 10)
            return ("0" + this.System_Date.Months);
        return this.System_Date.Months;
    } 
    getDays() 
    {
        if(this.System_Date.Days < 10)
            return ("0" + this.System_Date.Days);
        return this.System_Date.Days;
    }
    getHoures() 
    {

        let Hours = this.System_Date.Houres ;
        let hour = "";

        if(Hours <= 9)
            hour = "0"+Hours;
        else if(Hours >= 13)
        {
            Hours -= 12;

            if(Hours <= 9)
                hour = "0"+Hours;
            else
                hour = Hours;
        }
        else
        {
            hour = Hours
        }

        return hour;
    } 
    getHouresIn24() 
    {
        if(this.System_Date.Houres < 10)
            return ("0" + this.System_Date.Houres);
        return this.System_Date.Houres;
    } 
    getMinutes() 
    {
        if(this.System_Date.Minutes < 10)
            return ("0" + this.System_Date.Minutes);
        return this.System_Date.Minutes;
    } 
    getSeconds() 
    {
        if(this.System_Date.Seconds <= 9)
            return ("0" + this.System_Date.Seconds);
        return this.System_Date.Seconds;
    } 

    getTime()
    {
        let Current_time = this.getHouresIn24() + ':' +  this.getMinutes() + ':' + this.getSeconds();
        return Current_time;
    }
    showTime ()
    {
        console.log("Current Time : " + this.getTime());
    }

    getTimeIn12 ()
    {
        let ampm = (this.getHouresIn24() > 12 ? "PM" : "AM");

        let Current_time = this.getHoures() + ':' +  this.getMinutes() + ':' + this.getSeconds() + ' ' + ampm;

       
        return Current_time
    }
    showTimeIn12 ()
    {
        console.log("Current Time : " + this.getTimeIn12());
    }

    getDate()
    {
        let Current_date = this.getDays() + ':' +  this.getMonths() + ':' + this.getYears();
        return Current_date;
    }
    showDate ()
    {
        console.log("Current Date : " + this.getDate());
    }

    todayIs()
    {
        console.log("T " + this.getTime() + ". D " +this.getDate());
    }
    today()
    {
        return "T " + this.getTime() + ". D " +this.getDate();
    }
}
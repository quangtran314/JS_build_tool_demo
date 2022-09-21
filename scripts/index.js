import moment from "moment";

const sampleDateTime = '2022-09-21T18:29:32.997Z';

function TimeConvert(){
    this.timeInput = document.getElementById("utc-input");
    this.localTimeElement = document.getElementById("local-time");
    this.convertButton = document.getElementById("convert-button");

    this.convertUtc = function() {
        const localDateTime = moment.utc(this.timeInput.value).local().format();
        this.localTimeElement.value = localDateTime;
    }

    this.init = function() {
        this.convertButton.addEventListener('click', (e) => this.convertUtc());
    }
}

const timeConvert = new TimeConvert();
timeConvert.init();
let height = document.querySelector('#height');
let weight = document.querySelector('#weight');

function otherCaracters(height, weight) {
    return /[A-Z]/.test(height) || /[A-Z]/.test(weight) || /[a-z]/.test(height) || /[a-z]/.test(weight) || /[!@#$%*()_+^&{}}:;?]/.test(height) || /[!@#$%*()_+^&{}}:;?]/.test(weight)
}

function calculatePercent(bmi_result) {
    let percent = (bmi_result * 100) / 60;
    let end_percent = percent + 0.5;

    if(bmi_result < 18.5) {
        return "linear-gradient( to right, rgb(230,56,77) 0%,  rgb(230,56,77) " + percent + "%, rgb(255, 255, 255) " + percent + "%, rgb(255, 255, 255) " + end_percent + "%, rgb(230, 56, 77) " + end_percent + "%, rgb(230, 56, 77) 30.8%, rgb(72, 174, 31) 30.8%, rgb(72, 174, 31) 41.7%, rgb(230,56,77) 41.7%, rgb(230,56,77) 50%, rgb(199, 5, 27) 50%, rgb(199, 5, 27) 58.3%, rgb(137, 3, 19) 58.3%, rgb(137, 3, 19) 66.7%, rgb(81, 1, 10) 66.7%, rgb(81, 1, 10) 100%)";
    }  else if (bmi_result >= 18.5 && bmi_result < 25) {
        return "linear-gradient( to right, rgb(230,56,77) 0%,  rgb(230,56,77) 30.8%, rgb(72, 174, 31) 30.8%, rgb(72, 174, 31) " + percent + "%, rgb(255, 255, 255) " + percent + "%, rgb(255, 255, 255) " + end_percent + "%, rgb(72, 174, 31) " + end_percent + "%, rgb(72, 174, 31) 41.7%, rgb(230,56,77) 41.7%, rgb(230,56,77) 50%, rgb(199, 5, 27) 50%, rgb(199, 5, 27) 58.3%, rgb(137, 3, 19) 58.3%, rgb(137, 3, 19) 66.7%, rgb(81, 1, 10) 66.7%, rgb(81, 1, 10) 100%)";
    }  else if (bmi_result >= 25 && bmi_result < 30) {
        return "linear-gradient( to right, rgb(230,56,77) 0%,  rgb(230,56,77) 30.8%, rgb(72, 174, 31) 30.8%, rgb(72, 174, 31) 41.7%, rgb(230, 56, 77) 41.7%, rgb(230, 56, 77) " + percent + "%, rgb(255, 255, 255) " + percent + "%, rgb(255, 255, 255) " + end_percent + "%, rgb(230,56,77) " + end_percent + "%, rgb(230,56,77) 50%, rgb(199, 5, 27) 50%, rgb(199, 5, 27) 58.3%, rgb(137, 3, 19) 58.3%, rgb(137, 3, 19) 66.7%, rgb(81, 1, 10) 66.7%, rgb(81, 1, 10) 100%)";
    }   else if (bmi_result >= 30 && bmi_result < 35) {
        return "linear-gradient( to right, rgb(230,56,77) 0%,  rgb(230,56,77) 30.8%, rgb(72, 174, 31) 30.8%, rgb(72, 174, 31) 41.7%, rgb(230, 56, 77) 41.7%, rgb(230, 56, 77) 50%, rgb(199, 5, 27) 50%, rgb(199, 5, 27) " + percent + "%, rgb(255,255,255) " + percent + "%, rgb(255,255,255) " + end_percent + "%, rgb(199, 5, 27) " + end_percent + "%, rgb(199, 5, 27) 58.3%, rgb(137, 3, 19) 58.3%, rgb(137, 3, 19) 66.7%, rgb(81, 1, 10) 66.7%, rgb(81, 1, 10) 100%)";
    }   else if (bmi_result >= 35 && bmi_result < 40) {
        return "linear-gradient( to right, rgb(230,56,77) 0%,  rgb(230,56,77) 30.8%, rgb(72, 174, 31) 30.8%, rgb(72, 174, 31) 41.7%, rgb(230, 56, 77) 41.7%, rgb(230, 56, 77) 50%, rgb(199, 5, 27) 50%, rgb(199, 5, 27) 58.3%, rgb(137,3, 19) 58.3%, rgb(137, 3, 19) " + percent + "%, rgb(255, 255, 255) " + percent + "%, rgb(255, 255, 255) " + end_percent + "%, rgb(137, 3, 19) " + end_percent + "%, rgb(137, 3, 19) 66.7%, rgb(81, 1, 10) 66.7%, rgb(81, 1, 10) 100%)";
    } else {
        return "linear-gradient( to right, rgb(230,56,77) 0%,  rgb(230,56,77) 30.8%, rgb(72, 174, 31) 30.8%, rgb(72, 174, 31) 41.7%, rgb(230, 56, 77) 41.7%, rgb(230, 56, 77) 50%, rgb(199, 5, 27) 50%, rgb(199, 5, 27) 58.3%, rgb(137,3, 19) 58.3%, rgb(137, 3, 19) 66.7%, rgb(81, 1, 10) 66.7%, rgb(81, 1, 10) " + percent + "%, rgb(255, 255, 255) " + percent + "%, rgb(255, 255, 255) " + end_percent + "%, rgb(81, 1, 10) " + end_percent + "%, rgb(81, 1, 10) 100%)";
    }
}

function calculateBmi() {
    if(height.value.length === 0 || weight.value.length === 0){
        var paragrafo = document.createElement("p");
        paragrafo.innerHTML = "First, you must put all the values.";
        document.querySelector('#bmi-input').append(paragrafo);

        setTimeout(() => {
            var select = document.querySelector('#bmi-input');
            select.removeChild(select.lastChild);
          }, 2000);

    } else if (otherCaracters(height.value, weight.value)) {
        var paragrafo = document.createElement("p");
        paragrafo.innerHTML = "Don't put letters or special caracters.";
        document.querySelector('#bmi-input').append(paragrafo);

        setTimeout(() => {
            var select = document.querySelector('#bmi-input');
            select.removeChild(select.lastChild);
          }, 2000);
    } else {
    
        let height_string = height.value;
        let weight_string = weight.value;

        if(/[,]/.test(height_string)){
            height_string = height_string.replace(",", ".")
        }

        if(/[,]/.test(weight_string)){
            weight_string = weight_string.replace(",", ".")
        }

        let height_value = parseFloat(height_string);
        let weight_value = parseFloat(weight_string);

        let result = (weight_value / (height_value * height_value)).toFixed(2);
        let answer = result.toString();
        document.querySelector("#answer").innerHTML = answer;

        let result_text = document.querySelector("#result-text");
        let result_bar = document.querySelector("#result-bar");

        if(result < 18.5) {
            result_text.innerHTML = 'Underweight';
            result_text.style.color = "rgb(230,56,77)";
        }  else if (result >= 18.5 && result < 25) {
            result_text.innerHTML = 'Normal Weigth';
            result_text.style.color = "rgb(72, 174, 31)";
        }  else if (result >= 25 && result < 30) {
            result_text.innerHTML = 'Overweight';
            result_text.style.color = "rgb(230,56,77)";
        }   else if (result >= 30 && result < 35) {
            result_text.innerHTML = 'Obesity Class I';
            result_text.style.color = "rgb(199, 5, 27)";
        }   else if (result >= 35 && result < 40) {
            result_text.innerHTML = 'Obesity Class II';
            result_text.style.color = "rgb(137, 3, 19)";
        } else {
            result_text.innerHTML = 'Obesity Class III';
            result_text.style.color = "rgb(81, 1, 10)";
        }

        result_text.style.display = "inline"

        result_bar.style.background = calculatePercent(result);

        result_bar.style.display = "block";
    }
}

function resetValues() {
    document.querySelector("#height").value = "";
    document.querySelector("#weight").value = "";
    document.querySelector("#answer").innerHTML = "_ _";
    document.querySelector("#result-bar").style.display = "none";
    document.querySelector("#result-text").style.display = "none"
}
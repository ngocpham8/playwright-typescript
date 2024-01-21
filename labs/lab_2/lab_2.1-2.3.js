const MIN_BMI_NORMALWEIGHT = 18.5;
const MAX_BMI_NORMALWEIGHT = 24.9;
const MIN_BMI_OVERWEIGHT = 25;
const MAX_BMI_OVERWEIGHT = 29.9;
const MIN_BMI_OBESITY = 30;

let weight = 90;
let height = 1.5;
let bmi = (weight / (height * 2)).toFixed(1);

let minWeightToMeetNormalBMI = (MIN_BMI_NORMALWEIGHT * (height * 2)).toFixed(1);
let maxWeightOfNormalBMI = (MAX_BMI_NORMALWEIGHT * (height * 2)).toFixed(1);

if (bmi < MIN_BMI_NORMALWEIGHT) {
    console.log('Your BMI:', bmi, 'Underweight');
    console.log('You should increase:', (minWeightToMeetNormalBMI - weight).toFixed(1), 'kg. Min weight to get normal BMI is', minWeightToMeetNormalBMI);
} else if (bmi <= MAX_BMI_NORMALWEIGHT) {
    console.log('Your BMI:', bmi, 'Normal weight.');
}
else {
    if (bmi <= MAX_BMI_OVERWEIGHT) {
        console.log('Your BMI:', bmi, 'Overweight');
    }
    else {
        console.log('Your BMI:', bmi, 'Obesity');
    }

    console.log('You should descrease:', (weight - maxWeightOfNormalBMI).toFixed(1), 'kg. Max weight to get normal BMI is', maxWeightOfNormalBMI);
}


const form = document.querySelector("form");

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector(".result");

    if(height === '' || height<0 || isNaN(height)){
        result.innerHTML = `Please Enter Valid Height !`;
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please Enter Valid Weight !`;
    } else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let msg;
        if(bmi <= 18.60)
            msg = "Under Weight!";
        else if(bmi>18.60 && bmi<=24.9)
            msg = "Normal Weight!";
        else
            msg = "Over Weight!";
        result.innerHTML = `<h4>${bmi} => ${msg} </h4> `;
    }
});



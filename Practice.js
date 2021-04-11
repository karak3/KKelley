function submitQuiz(){
    var gryffindor = 0;
    var slytherin = 0;
    var hufflepuff = 0;
    var ravenclaw = 0;

/*Query selector lets you go through a list and look for conditions. */
    var q1 = document.querySelector ('input[name="animal"]:checked').value; /*searches input with that name, finds the answer that is checked, stores that value (house name)*/
    var q2 = document.querySelector ('input[name="motto"]:checked').value;

if (q1 == "gryffindor"){
    gryffindor = gryffindor + 1; /* Adds 1 point to gryffindor if it's selected -- shortcut: gryffindor += 1;*/
}
else if (q1 == "slytherin"){
    slytherin += 1;

}
else if (q1 == "hufflepuff"){
    hufflepuff += 1;
    
}
else if (q1 == "ravenclaw"){
    ravenclaw += 1;
}

if (q2 == "gryffindor"){
    gryffindor += 1; 
}
else if (q2 == "slytherin"){
    slytherin += 1;

}
else if (q2 == "hufflepuff"){
    hufflepuff += 1;
    
}
else if (q2 == "ravenclaw"){
    ravenclaw += 1;
}

alert ("gryffindor: "+ gryffindor + 
        "\nslytherin: "+ slytherin +
        "\nhufflupuff: "+ hufflepuff +
        "\nravenclaw: "+ ravenclaw)

}


let input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    input.splice(1,1, "Roman Alamsyah Elsharawy");
    input.splice(2,1, "Provinsi Bandar Lampung");
    input.splice(4,4, "Pria", "SMA International Metro");
    console.log(input);
    input.splice(5,5, "Mei");
    console.log(input[5])
    let reverseElement = input[3].split("/");
    console.log(reverseElement.reverse());
    let dashedElement = input[3].split("/");
    console.log(dashedElement.join("-"));
    let limitChar = input[1];
    limitChar = limitChar.slice(0, 15);
    console.log(limitChar);
}                           

dataHandling(input);

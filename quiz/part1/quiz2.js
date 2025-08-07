let input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    input.splice(1,1, "Roman Alamsyah Elsharawy");
    input.splice(2,1, "Provinsi Bandar Lampung");
    input.splice(4,4, "Pria", "SMA International Metro");
    console.log(input);
    //get a month
    let dateArr = input[3];
    let splitDate = dateArr.split('/');
    let reverseDate = splitDate.reverse();
    const date = new Date(reverseDate);
    const month = date.toLocaleString('id-ID', {month:'long'})
    console.log(month);
    //join -
    let reverseElement = input[3].split("/");
    console.log(reverseElement.reverse());
    let dashedElement = input[3].split("/");
    console.log(dashedElement.join("-"));
    //limit the character
    let limitChar = input[1];
    limitChar = limitChar.slice(0, 15);
    console.log(limitChar);
}                           

dataHandling(input);

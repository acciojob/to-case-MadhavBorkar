function toCase(text) {
  // write your code here
    if (text.length === 0) {
        return '-';
    }

    const lowerCasetext = text.toLowerCase();
    const upperCasetext= text.toUpperCase();

    return `${lowerCasetext}-${upperCasetext}`;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));

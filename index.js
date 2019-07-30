
function consecutiveDates(start, repeatCount, offset, offsetType='d') {
    // let start = new Date(startDate)
    let offsetSeconds;
    const dayInSeconds = 86400000;
    const monthInSeconds = 2592000000;
    const yearInSeconds = 94672800000;
    if (offsetType === 'd' || offsetType === 'D') {
        offsetSeconds = dayInSeconds;
    }
    else if (offsetType ==='m' || offsetType === 'M') {
        offsetSeconds = monthInSeconds;
    }
    else if (offsetType ==='y' || offsetType === 'Y') {
        offsetSeconds = yearInSeconds;
    }
    else {
        throw new Error( "offset Type is incorrect must be 'd', 'm', 'y'");
    }

    let datesArr =  []
    for (let i = 0; i < repeatCount; i++) {
        datesArr.push(new Date(start - 0 + offset * i  * offsetSeconds ).toDateString());
    }
    
    return datesArr;
};

console.log(consecutiveDates(new Date(2019, 1, 28), 3, 1, 'D'))
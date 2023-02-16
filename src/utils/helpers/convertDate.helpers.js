const convertDate = (date) => {
    if (date === "null") return date;

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const dateArr = date.split("-");
    const year = dateArr[0];
    const month = months[+dateArr[1] - 1];
    const day = dateArr[2].split("T")[0];

    return `${month} ${day}, ${year}`;
};

export {convertDate}

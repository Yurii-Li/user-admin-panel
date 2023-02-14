const ifNull = (value, objkey = "") => {
    return value ? (typeof value === "object" ? value[objkey] : value) : "null";
};

export {ifNull};

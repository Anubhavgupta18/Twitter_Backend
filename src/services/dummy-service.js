const helper = () => {
    const num = Math.floor(Math.random() * 1000);
    return num % 2 == 0;
}

export const execute = () => {
    const result = false;
    if (result)
    {
        return "even num";
    }
    else
    {
        return "odd num";
    }
}
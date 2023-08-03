export const getPropertyData = async (propType) => {
    try {
        const res = await fetch('https://greenbrier-api.onrender.com/'.concat(propType), {
            method: 'GET',
            headers : {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });
        console.log('server response received')

        return await res.json();
    } catch (err) {console.log(err)}
}
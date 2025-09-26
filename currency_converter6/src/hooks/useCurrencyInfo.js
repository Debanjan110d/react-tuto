import { useEffect, useState } from "react";


const useCurrencyInfo = (currency) => {
    const [data, setdata] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    }, [currency]).then(res => res.json())
        .then((res) => {
            setdata(res[currency])
        })
    return [data, setdata]

}


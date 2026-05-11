import { useEffect } from "react"

const UseEffectComponent = () => {

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                const profile = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
                    signal: controller.signal,
                });

                const profileJson = await profile.json();
                console.log(profileJson);
            } catch (err) {
                if (err.name !== "AbortError") {
                    console.error(err);
                }
            }
        };

        fetchData();

        return () => {
            controller.abort();
        };
    }, [])


    return <h1>Hello</h1>;
}

export default UseEffectComponent;
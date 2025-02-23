import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (baseUrl) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [requestConfig, setRequestConfig] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!requestConfig) return;
            setLoading(true);
            setError(null);
            try {
                const response = await axios(requestConfig);
                setData(response.data);
            } catch (err) {
                setError(err.message || "Something went wrong");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [requestConfig]);

    const create = (url, body, headers = {}) =>
        setRequestConfig({ method: "POST", url: `${baseUrl}${url}`, data: body, headers });

    const read = (url = "", headers = {}) =>
        setRequestConfig({ method: "GET", url: `${baseUrl}${url}`, headers });

    const update = (url, body, headers = {}) =>
        setRequestConfig({ method: "PATCH", url: `${baseUrl}${url}`, data: body, headers });

    const remove = (url, headers = {}) =>
        setRequestConfig({ method: "DELETE", url: `${baseUrl}${url}`, headers });

    return { data, loading, error, create, read, update, remove };
};

export default useAxios;

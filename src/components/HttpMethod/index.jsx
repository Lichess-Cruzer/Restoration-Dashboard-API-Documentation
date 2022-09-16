import React, { useMemo } from "react";
import styles from "./http.module.css";

const HttpMethod = ({
    method,
    ...props
}) => {

    const [text, color] = useMemo(() => {
        method = typeof method === 'string' ? method : '';
        switch (method.toLowerCase()) {
            case 'post':
                return [
                    'POST',
                    '#3260a8'
                ]
            case 'delete':
                return [
                    'DELETE',
                    '##a83238',
                ]
            default:
                return [
                    'GET',
                    '#32a852'
                ]
        }
    }, [method])

    return (

        <span className={styles.http} style={{ color, borderColor: color }}>{text}</span>

    )

}

export default HttpMethod;
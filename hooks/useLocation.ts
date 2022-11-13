import {useEffect, useState} from "react";
import {useRouter} from "next/router";

const useLocation = () => {
    const router = useRouter();
    const [location, setLocation] = useState<null | Location>()
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setLocation(window.location)
        }
    }, [router])

    return location;
}

export default useLocation;
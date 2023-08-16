/* ===================================================
    Date: 2023-08-11 09:18:27
    Desc: ClientOnly conponent
    Author: 🟣 Enok Lima
=====================================================*/


import { useEffect, useState } from "react";

export const ClientOnly = ({ children }:{children: React.ReactNode}) => {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => setHasMounted(true), []);
    if (!hasMounted) {
      return null;
    }
    return children;
}
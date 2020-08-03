import { useState } from 'react';

const useDropdown = () => {
    const [isShowing, setIsShowing] = useState(false);
    const [isShowing1, setIsShowing1] = useState(false);


    function toggle() {
        setIsShowing(!isShowing);
    }
    function toggle1() {
        setIsShowing1(!isShowing1);
    }

    return {
        isShowing,
        isShowing1,
        toggle,
        toggle1,

    }
};

export default useDropdown;
import React, {useCallback} from "react";
import {NightsStayOutlined, WbSunnyOutlined} from "@mui/icons-material";
import {IconButton, useTheme} from "@mui/material";
import {useRecoilState} from "recoil";
import {themeModState} from "../../../themes/RThemeStates";

const SwitchThemeButton = (): React.ReactElement => {
    const theme = useTheme()
    const [themeMode, setThemeMode] = useRecoilState(themeModState)

    const handleThemeSwitch = useCallback(() => {
        setThemeMode(themeMode === 'light' ? 'dark' : 'light')
    }, [setThemeMode, themeMode])

    return (
        <IconButton onClick={handleThemeSwitch}>
            {theme.palette.mode === 'light' ? (<NightsStayOutlined/>) : (<WbSunnyOutlined/>)}
        </IconButton>
    )
}

export default SwitchThemeButton

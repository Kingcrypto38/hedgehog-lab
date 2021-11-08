import {InputAdornment, TextField} from "@mui/material";
import * as React from "react";
import {IFormProps} from "../../Form/IFormProps";

const HOutlinedInput: React.FC<IFormProps> = (props) => {
    const {name, field, startAdornment, type, placeholder, endAdornment, error} = props

    return (
        <TextField
            variant={"outlined"}
            fullWidth
            {...field}
            type={type}
            placeholder={placeholder}
            error={!!error?.[name]?.message}
            helperText={error?.[name]?.message}
            inputProps={{
                startAdornment: (
                    <InputAdornment position={"start"}>
                        {startAdornment}
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position={"start"}>
                        {endAdornment}
                    </InputAdornment>
                )
            }}
        />
    )
}

export default HOutlinedInput

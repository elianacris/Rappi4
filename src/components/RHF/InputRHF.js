import { TextField } from "@material-ui/core";
import React from "react";
import { useController } from "react-hook-form";


const InputRHF = (props) => {
    const { label, required, name, control, sx, placeholder, color} = props;
    const { field, fieldState: { invalid, error } } = useController({ name, control });
    const { ref } = field;

    return (
        <TextField
            {...field}
            inputRef={ref}
            label={label}
            error={invalid}
            helperText={error?.message}
            required={Boolean(required)}
            placeholder={placeholder}
            variant='outlined'
            sx={{ sx }}
            color={color}
        />
    )
}
export default InputRHF;
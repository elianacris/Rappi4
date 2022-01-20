import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import React, { useState } from "react";
import { useController } from "react-hook-form";


const InputPasswordRHF = (props) => {
    const { label, required, name, control, sx, placeholder } = props;
    const { field, fieldState: { invalid, error } } = useController({ name, control });
    const { ref } = field;

    const [values, setValues] = useState({
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <FormControl
            variant="outlined"
        >
            <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                {...field}
                label={label}
                inputRef={ref}
                error={invalid}
                required={Boolean(required)}
                sx={{ sx }}
                placeholder={placeholder}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            {!!error?.message && (
                <FormHelperText error id="accountId-error">
                    {error?.message}
                </FormHelperText>
            )}
        </FormControl>
    )
}
export default InputPasswordRHF;



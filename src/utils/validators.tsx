import { field_is_required, not_a_valid_email_address } from "./constants";


export const required = (value: string): string | undefined => {
    if (value && value.trim().length != 0) return undefined;
    return field_is_required;
};

// export const  omitempty = (value: string) : string | undefined =>  {
//     if (value.length === 0 || value.length > 5 ) return undefined;
//     return field_is_required;
// };

export const maxLengthCreator = (maxLength: number) => (value: string): string | undefined => {
    if (!value || value.length <= maxLength) return undefined;
    return `max length is ${maxLength} symbols`;
};

export const emailValidation = (value: string): string | undefined => {
    const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (emailValid) return undefined;
    return not_a_valid_email_address;
};

export const emailOmitemptyValidation = (value: string): string | undefined => {
    if (!value || value.length === 0) return undefined
    const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (emailValid) return undefined;
    return not_a_valid_email_address;
};

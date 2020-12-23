export const mobileSize: number = 765
export const linkedInUrl: string = "https://www.linkedin.com/in/rchudin/"
export const gitHubUrl: string = "https://github.com/rchudin"
export const instagramUrl: string = "https://www.instagram.com/rus_chudin/"
export const email = "rus.chudin@gmail.com";
export const telegram = "";
export const telegramURL = "";


//error
export const field_is_required = "field is required";
export const not_a_valid_email_address = "not a valid email address";


export const shortNameProgramLang = (lng: string): string => {
    const list = new Map([
        ["JavaScript", "Js"],
        ["TypeScript", "Ts"],
    ]);

    const newStr: string | undefined = list.get(lng);
    return newStr ? newStr : lng
}

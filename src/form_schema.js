import * as yup from "yup";
export const formSchema = yup.object().shape({
    email: yup
        .string()
        .email("Enter valid email")
        .required("This field is required"),
    name: yup.string().required("This field is required"),
    phone: yup.string(),
});

export const refreshPage = () => {
    window.location.reload()
}
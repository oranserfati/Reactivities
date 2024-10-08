import { useField } from "formik";
import { Form, Label } from "semantic-ui-react";

interface Props {
    placeholder: string;
    name: string;
    rows: number;
    lable?: string;
}

export default function MyTextArea(props: Props) {
    const [field, meta] = useField(props.name);

    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <label> {props.lable}</label>
            <textarea {...field} {...props} />
            {meta.touched && meta.error ? (
                <Label basic color='red' style={{marginTop: '10px'}}> *{meta.error}</Label>
            ) : null}
        </Form.Field>
    )

}
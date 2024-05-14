import { TextInput, Edit, SimpleForm, required, ReferenceInput, NumberInput, BooleanInput } from "react-admin";

export const ChallengeOptionEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <NumberInput source="id" validate={[required()]} label="Id" />
                <BooleanInput source="correct" label="Correct option" />
                <ReferenceInput source="challengeId" reference="challenges" />
                <TextInput source="imageSrc" label="Image URL" />
                <TextInput source="audioSrc" label="Audio URL" />
            </SimpleForm>
        </Edit>
    );
};

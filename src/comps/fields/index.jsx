import NewField from './newField';

export default ({ getAreas, ...props }) =>
    getAreas
        .map((code, index) =>
            <NewField key={index} {...{ getAreas, index, ...props }} />
        )



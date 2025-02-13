import { useId } from "react";

function ExampleUseId() {

    const data = [
        {name: 'Olga', id: useId() },
        {name: 'Marina', id: useId() },
        {name: 'Oksana', id: useId() },
        {name: 'Tanya', id: useId() }
    ];

    console.log(data);

    return (
        <div>
            <ul>
                {data.map(({name, id}) => 
                    <li key={id}>{name}</li>)}
            </ul>
        </div>
    )
}

export default ExampleUseId
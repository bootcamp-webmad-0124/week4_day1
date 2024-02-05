const ExampleWithChildren = (props) => {

    return (
        <section>
            <h3>Estos son mis hijos 👇👶</h3>
            {props.children}
        </section>
    )
}

export default ExampleWithChildren
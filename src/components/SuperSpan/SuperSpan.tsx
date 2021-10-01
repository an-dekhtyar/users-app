



type SuperSpanType = {
    name: string
    searchValue: string
}

export const SuperSpan = (props:SuperSpanType) => {

    const{name, searchValue} = props

    const result = name.match(searchValue)

    if (result) {
        const start = result.index
        const find = result[0]
        const input = result.input
        const length = result.length
        if (start !== undefined && find && input && length) {
            const rest = start + find.length
            return (
                <span>
                    <span>{input.slice(0, start)}</span>
                    <span style={{backgroundColor: "red"}}>{find}</span>
                    <span>{input.slice(rest)}</span>
                </span>
            )
        }
    }
    return <span>{props.name}</span>
}
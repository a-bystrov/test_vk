interface PropsDropDownList {
  list: Array<number | string>,
  name: string,
  handlerOnChange: (event: React.FormEvent) => void
}

export default function DropDownList({list, name, handlerOnChange}: PropsDropDownList) {
  return(
    <select name={name} onChange={handlerOnChange}>
      {list.map((number) => {
        return <option key={name + number}>{number}</option>
      })}
    </select>
  )
}

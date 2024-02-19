export default function TabButton({label,handleSelect, isSelected}){
    
    return <li>
        <button className={isSelected?"active":""} onClick={handleSelect}>{label}</button>
    </li>
}
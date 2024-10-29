
export default function TabButton({lable, OnSelect, isSelected}) {
  return (<li>
    <button className={isSelected?"active":undefined} onClick={OnSelect}>{lable}</button>
    </li>);
}
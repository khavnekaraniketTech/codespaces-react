import { useEffect } from "react-hook"


export default function FragmentReact() {
    useEffect((items)=>{
        items.map((item)=>{
            <ListItem key={item.id} value={item.value}/>
        })
    })
        return (
            <>
            <childComponent1 name="aniket" age={23} isMember={true}/>
            <childComponent2 />
        </>
    )
}
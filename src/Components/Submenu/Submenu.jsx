import "./Submenu.scss"
const Submenu = ({value,index}) => {
    console.log(value);
    console.log(index);
    return ( <>
    {value.map((item,index)=>{
        return <h1 className="pcm" key={index+1}>{item.name}</h1>
    })}
    </> );
}
 
export default Submenu;
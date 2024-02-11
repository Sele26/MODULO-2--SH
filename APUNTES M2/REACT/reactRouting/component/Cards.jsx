import Card from "./Card";
const users = [
     {id:1,name:"Selene"},
    {id:2,name:"Elian"},
    {id:3,name:"Alejo"},
]

const Cards = () => {
    return (
        <div>
            {
            users.map(user=>{
            return <Card id={user.id} name={user.name} />
         }); 
        };
        
        </div>
    )
};
export default Cards;
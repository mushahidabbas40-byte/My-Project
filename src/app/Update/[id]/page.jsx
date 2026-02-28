
import { SingleData } from "@/app/operations/Update";
import UpdatePage from "@/app/components/update";

export default async function GetId({params}){
    const {id}=await params;

    if(!id){
        return<div>id is required</div>
    }
    
    const data =await SingleData(id);
    return(
        <UpdatePage data={data}/>
    )
}
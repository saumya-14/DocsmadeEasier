import CollaborativeRoom from "@/components/CollaborativeRoom"
import { getDocument } from "@/lib/actions/room.actions";
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";


const Document = async ({params:{id}}:SearchParamProps) => {
  const clerkUsers= await currentUser();
  if(!clerkUsers)redirect("./sign-in");

  const room=await getDocument({
    roomId:id,
    userId:clerkUsers.emailAddresses[0].emailAddress,
  })

  if(!room) redirect('/');

  //todo add permission  of the user to access
 

  return (
    <main className="flex w-full flex-col items-center">
     <CollaborativeRoom
     roomId={id}
     roomMetadata={room.metadata}/>
    </main>
  )
}

export default Document